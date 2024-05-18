import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from 'src/auth/useAuthContext';
import LoadingScreen from 'src/components/loading-screen';
import { useDispatch } from 'src/redux/store';
import { actions } from 'src/redux/user/user.slice';
import { PATH_ADMIN_DASHBOARD, PATH_DASHBOARD } from 'src/routes/paths';
import axiosInstance from 'src/utils/axios';

export function GitHubCallback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginWithGoogle, isAuthenticated, isInitialized, user } = useAuthContext();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        axiosInstance
          .post('/api/v1/auth/github/callback', {
            code,
          })
          .then((response) => {
            const status = response.data.status;
            const loginData = response.data.data;
            if (status === false) {
              dispatch(
                actions.setUserDetails({
                  email: loginData.email,
                  firstName: loginData.firstName,
                  lastName: loginData.lastName,
                })
              );

              navigate('/auth/register');
            } else {
              loginWithGoogle(loginData);
            }
          })
          .catch((e) => console.log(e));
        // Send code to backend

        //   fetch('http://localhost:5000/auth/github/callback', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ code }),
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {
        //       // Handle the response from your backend. Maybe store an authentication token or set user data.
        //     });
      }
    }, 200);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [loginWithGoogle, navigate, dispatch]);

  const getUserDefaultPage = () => {
    if (user?.subscription.actInvest === false && user?.subscription.passInvest === true)
      return PATH_DASHBOARD.passiveInvest;
    return PATH_DASHBOARD.activeInvest;
  };

  if (isAuthenticated) {
    return <Navigate to={user?.isAdmin ? PATH_ADMIN_DASHBOARD.dashboard : getUserDefaultPage()} />;
  }

  return <LoadingScreen />;
}
