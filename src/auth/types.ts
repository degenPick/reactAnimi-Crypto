// ----------------------------------------------------------------------

import { ISubscriptionStatus } from 'src/redux/user/user.type';
import { IMyDetail } from '../@types/admins';

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

// export type AuthUserType = null | Record<string, any>;
export type AuthUserType = IMyDetail | null | Record<string, any>;

export type AuthStateType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUserType;
};

// ----------------------------------------------------------------------

export type JWTContextType = {
  method: string;
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUserType;
  login: (email: string, password: string, rememberMe: boolean) => Promise<{ user: AuthUserType }>;
  resetPassword: (email: string) => Promise<void>;
  sendEmail: (email: string) => Promise<void>;
  sendPhone: (phone: string) => Promise<void>;
  verifyEmail: (email: string, otpCode: string) => Promise<void>;
  verifyMfa: (email: string, phone: string, otpCode: string) => Promise<void>;
  verifyTwoFactor: (token: string) => Promise<void>;
  disableTwoFactor: (token: string) => Promise<void>;
  loginWithGoogle: (loginData: any) => void;
  loginWithGithub: (code: string) => Promise<void>;
  verifyPhone: (phone: string, otpCode: string) => Promise<void>;
  newPassword: (email: string, otpCode: string, newPassword: string) => Promise<void>;
  changePassword: (oldPassword: string, password: string) => Promise<void>;
  updateProfile: (
    email: string,
    firstName: string,
    lastName: string,
    country: string
  ) => Promise<void>;
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    cardName: string,
    paymentMethodId: string,
    register: ISubscriptionStatus
  ) => Promise<void>;
  logout: () => void;
  loginWithMicrosoft?: () => void;
  loginWithApple?: () => void;
};

export type FirebaseContextType = {
  method: string;
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUserType;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, firstName: string, lastName: string) => void;
  logout: () => void;
  loginWithGoogle?: () => void;
  loginWithMicrosoft?: () => void;
  loginWithApple?: () => void;
};

export type AWSCognitoContextType = {
  method: string;
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUserType;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, firstName: string, lastName: string) => void;
  logout: () => void;
  loginWithGoogle?: () => void;
  loginWithMicrosoft?: () => void;
  loginWithApple?: () => void;
};

export type Auth0ContextType = {
  method: string;
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUserType;
  // login: () => Promise<void>;
  logout: () => void;
  // To avoid conflicts between types this is just a temporary declaration.
  // Remove below when you choose to authenticate with Auth0.
  login: (email?: string, password?: string) => Promise<void>;
  register?: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    subscription: ISubscriptionStatus
  ) => Promise<void>;
  loginWithGoogle?: () => void;
  loginWithMicrosoft?: () => void;
  loginWithApple?: () => void;
};
