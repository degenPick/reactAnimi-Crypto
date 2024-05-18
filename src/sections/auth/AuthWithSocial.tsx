// @mui
import { Divider, Button, Box, Stack } from '@mui/material';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'src/utils/axios';
import { useDispatch } from 'src/redux/store';
import { actions } from 'src/redux/user/user.slice';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Google from '../../assets/images/google.png';
import Microsoft from '../../assets/images/microsoft.png';
import Apple from '../../assets/images/apple.png';

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  const { loginWithGoogle, loginWithMicrosoft, loginWithApple } = useAuthContext();

  const { instance, accounts, inProgress } = useMsal();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axiosInstance
        .post('/api/v1/google-authenticate', {
          token: codeResponse.access_token,
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

      // loginWithGoogle(codeResponse.access_token)
      //   .then(() => {})
      //   .catch((e) => console.log(e));
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  const handleMicrosoftLogin = async () => {
    try {
      const result = await instance.loginPopup({
        scopes: ['email'],
      });
      console.log('result ==> ', result);

      const response = await axiosInstance.post('/api/v1/microsoft-authenticate', {
        token: result.accessToken,
      });

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
    } catch (err) {
      console.log(err);
    }
  };

  const handleGithubLogin = () => {
    const clientID = 'eb348b7f57c65bbe8831';
    const redirectURI = 'https://scale-in.com/auth/github';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=user:email`;
  };

  return (
    <Box
      sx={{
        mx: { md: 6, xs: 1 },
      }}
    >
      <Divider
        sx={{
          my: 2.5,
          typography: 'overline',
          color: 'text.disabled',
        }}
      >
        or continue with
      </Divider>

      <Stack
        justifyContent="center"
        spacing={2}
        sx={{ backgroundColor: '#293048', borderRadius: 2, p: 3 }}
      >
        <Button
          onClick={() => googleLogin()}
          variant="outlined"
          sx={{
            py: 1,
            border: '1px solid #141A36',
            color: 'white',
            backgroundColor: '#141A36',
            '&:hover': {
              border: '1px solid #141A36',
            },
          }}
        >
          <Box component="img" src={Google} mx={1} /> Sign in with Google
        </Button>

        <Button
          onClick={handleMicrosoftLogin}
          variant="outlined"
          sx={{
            py: 1,
            border: '1px solid #141A36',
            color: 'white',
            backgroundColor: '#141A36',
            '&:hover': {
              border: '1px solid #141A36',
            },
          }}
        >
          <Box component="img" src={Microsoft} mx={1} /> Sign in with Microsoft
        </Button>

        <Button
          onClick={handleGithubLogin}
          variant="outlined"
          sx={{
            py: 1,
            border: '1px solid #141A36',
            backgroundColor: '#141A36',
            color: 'white',
            '&:hover': {
              border: '1px solid #141A36',
            },
          }}
        >
          <GitHubIcon sx={{ mr: 1 }} />
          Sign in with Github
        </Button>
      </Stack>
    </Box>
  );
}
