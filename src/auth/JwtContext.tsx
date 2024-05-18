import { createContext, useEffect, useReducer, useCallback, useMemo } from 'react';
import { ISubscriptionStatus } from 'src/redux/user/user.type';

// utils
import axios from '../utils/axios';
import localStorageAvailable from '../utils/localStorageAvailable';
//
import { isValidToken, setSession } from './utils';
import { ActionMapType, AuthStateType, AuthUserType, JWTContextType } from './types';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  MFA_EMAIL_METHOD = 'MFA_EMAIL_METHOD',
  MFA_PHONE_METHOD = 'MFA_PHONE_METHOD',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.MFA_EMAIL_METHOD]: {
    user: AuthUserType;
  };
  [Types.MFA_PHONE_METHOD]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === Types.MFA_EMAIL_METHOD) {
    return {
      ...state,
      isAuthenticated: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.MFA_PHONE_METHOD) {
    return {
      ...state,
      isAuthenticated: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storageAvailable = localStorageAvailable();

  const initialize = useCallback(async () => {
    try {
      const accessToken = storageAvailable ? localStorage.getItem('accessToken') : '';

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get('/api/v1/me');

        const { user } = response.data.data;

        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(
    async (
      email: string,
      password: string,
      rememberMe: boolean
    ): Promise<{ user: AuthUserType }> => {
      const response = await axios.post('/api/v1/login', {
        email,
        password,
        rememberMe,
      });

      const loginData = response.data.data;

      setSession(loginData?.accessToken?.token);

      dispatch({
        type: Types.LOGIN,
        payload: {
          user: loginData?.user,
        },
      });

      return {
        user: loginData.user,
      };
    },
    []
  );

  // Reset Password
  const resetPassword = useCallback(async (email: string) => {
    await axios.post('/api/v1/reset-password', {
      email,
    });
  }, []);

  // Send Email
  const sendEmail = useCallback(async (email: string) => {
    await axios.post('/api/v1/send-code-email', {
      email,
    });
  }, []);

  // Send phone
  const sendPhone = useCallback(async (phone: string) => {
    await axios.post('/api/v1/send-code-phone', {
      phone,
    });
  }, []);

  // Verify Email
  const verifyEmail = useCallback(async (email: string, otpCode: string) => {
    await axios.post('/api/v1/verify-email', {
      email,
      otpCode,
    });
  }, []);

  // Verify Phone
  const verifyPhone = useCallback(async (phone: string, otpCode: string) => {
    await axios.post('/api/v1/verify-phone', {
      phone,
      otpCode,
    });
  }, []);

  // Verify MFA
  const verifyMfa = useCallback(async (email: string, phone: string, otpCode: string) => {
    const response = await axios.post('/api/v1/verify-mfa', {
      email,
      phone,
      otpCode,
    });

    console.log('verifyMfa:::', response);

    const loginData = response.data.data;

    setSession(loginData?.accessToken?.token);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user: loginData?.user,
      },
    });
  }, []);
  // Verify Two Factor
  const verifyTwoFactor = useCallback(async (token: string) => {
    const response = await axios.post('/api/v1/verify-otp', {
      token,
    });

    const loginData = response.data;

    setSession(loginData?.token.token);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user: loginData?.user,
      },
    });
  }, []);
  // Verify Two Factor
  const disableTwoFactor = useCallback(async (token: string) => {
    const response = await axios.post('/api/v1/disable-otp', {
      token,
    });

    const loginData = response.data;

    setSession(loginData?.token.token);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user: loginData?.user,
      },
    });
  }, []);
  // Login with google
  const loginWithGoogle = useCallback((loginData: any) => {
    setSession(loginData?.accessToken?.token);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user: loginData?.user,
      },
    });
  }, []);
  // Login with Github
  const loginWithGithub = useCallback(async (code: string) => {
    const response = await axios.post('/api/v1/auth/github/callback', {
      code,
    });

    const loginData = response.data.data;

    console.log('loginData ', loginData);
    setSession(loginData?.accessToken?.token);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user: loginData?.user,
      },
    });
  }, []);

  // New Password
  const newPassword = useCallback(async (email: string, otpCode: string, password: string) => {
    await axios.post('/api/v1/new-password', {
      email,
      otpCode,
      newPassword: password,
    });
  }, []);

  // Change Password
  const changePassword = useCallback(async (oldPassword: string, password: string) => {
    await axios.post('/api/v1/change-password', {
      oldPassword,
      password,
    });
  }, []);

  // Update Profile
  const updateProfile = useCallback(
    async (email: string, firstName: string, lastName: string, country: string) => {
      const response = await axios.post('/api/v1/update-profile', {
        email,
        firstName,
        lastName,
        country,
      });

      const loginData = response.data;

      setSession(loginData?.token.token);

      dispatch({
        type: Types.LOGIN,
        payload: {
          user: loginData?.user,
        },
      });
    },
    []
  );

  // REGISTER
  const register = useCallback(
    async (
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      cardName: string,
      paymentMethodId: string,
      subscription: ISubscriptionStatus
    ) => {
      const response = await axios.post('/api/v1/signup', {
        firstName,
        lastName,
        email,
        password,
        cardName,
        paymentMethodId,
        subscription,
      });

      const { accessToken, user } = response.data.data;

      setSession(accessToken?.token);

      dispatch({
        type: Types.REGISTER,
        payload: {
          user,
        },
      });
    },
    []
  );

  // LOGOUT
  const logout = useCallback(() => {
    setSession(null);
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: 'jwt',
      login,
      resetPassword,
      newPassword,
      changePassword,
      updateProfile,
      sendEmail,
      sendPhone,
      verifyEmail,
      verifyPhone,
      verifyMfa,
      verifyTwoFactor,
      disableTwoFactor,
      loginWithGoogle,
      loginWithGithub,
      loginWithTwitter: () => {},
      register,
      logout,
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      resetPassword,
      newPassword,
      changePassword,
      updateProfile,
      sendEmail,
      sendPhone,
      verifyEmail,
      verifyPhone,
      verifyMfa,
      verifyTwoFactor,
      disableTwoFactor,
      loginWithGoogle,
      loginWithGithub,
      logout,
      register,
    ]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
