import { Box, Button, Checkbox, Divider, IconButton, Stack, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';

import { LoadingButton } from '@mui/lab';
import WarningIcon from '@mui/icons-material/Warning';
import axiosInstance from 'src/utils/axios';
import OtpInput from 'src/components/editor/OtpInput';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import { useAuthContext } from 'src/auth/useAuthContext';
import { SuccessIcon } from 'src/theme/overrides/CustomIcons';
import { CustomAvatar } from 'src/components/custom-avatar';
import MyProfileForm from './MyProfileForm';

function TwoFactor() {
  const { user, verifyTwoFactor, disableTwoFactor } = useAuthContext();

  const [imageSrc, setImageSrc] = useState<string>('');
  const [secretCode, setSecretCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [acceptEnable, setAcceptEnable] = useState<boolean>(false);
  const [acceptDisable, setAcceptDisable] = useState<boolean>(false);

  function insertSpaceEveryFourChars(inputString: string): string {
    const regex = /.{1,4}/g; // Match every 4 characters
    const result = inputString.match(regex); // Split the string into groups of 4 characters
    if (result) {
      return result.join(' '); // Join the groups with a space
    }
    return inputString; // Return the original string if no matches found
  }

  useLegacyEffect(() => {
    const generate = async () => {
      try {
        const response = await axiosInstance.post('/api/v1/generate');
        const data = response.data;
        setImageSrc(data.qrcode);
        setSecretCode(data.secret);
      } catch (error) {
        console.log(error);
      }
    };
    if (user && user.twofaEnabled !== true) generate();
  }, [user]);

  const [otpValue, setOtpValue] = React.useState<string>('');

  const buttonDisabled = () =>
    user?.twofaEnabled === true
      ? otpValue.length < 6 || !acceptDisable
      : otpValue.length < 6 || !acceptEnable;

  const processMFA = async () => {
    if (buttonDisabled()) return;
    setIsLoading(true);

    if (user?.twofaEnabled !== true) {
      try {
        await verifyTwoFactor(otpValue);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        await disableTwoFactor(otpValue);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClick = () => {
    navigator.clipboard.writeText(secretCode);
  };

  const handleChange = (newValue: string) => {
    setOtpValue(newValue);
  };

  return (
    <Box sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2, mb: 2 }}>
      <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 4, mb: 2 }}>
        {user?.twofaEnabled !== true && (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="column" gap={2}>
                <Typography variant="subtitle1">Setup Two-Factor Authentication (2FA)</Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Two-factor authentication makes your account secure by requiring a special code in
                  addition to your password to log in.
                </Typography>
              </Stack>
              <Stack
                sx={{ backgroundColor: '#5D2D44', p: 1, borderRadius: 1 }}
                direction="row"
                gap={1}
              >
                <WarningIcon color="error" />
                <Typography variant="subtitle2" sx={{ color: 'white' }}>
                  Two Factor Authentication is not enabled
                </Typography>
              </Stack>
            </Stack>

            <Divider sx={{ mt: 2, mb: 2 }} />

            <Box
              sx={{ color: 'grey.200', backgroundColor: '#0F1532', borderRadius: 1, p: 4, mb: 2 }}
            >
              <Typography variant="subtitle1">1-Install a two-factor authentication app</Typography>
              <Divider sx={{ mt: 2, mb: 2 }} />

              <Stack direction="column">
                <Stack direction="row" gap={2} alignItems="center">
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    Google Authenticator
                  </Typography>

                  {/* <SvgColor src="/assets/play_store.svg" width={200} height={50} /> */}
                  <Stack direction="row" alignItems="center">
                    <Button>
                      <Image disabledEffect src="/assets/play_store.svg" />
                    </Button>
                    <Button>
                      <Image disabledEffect src="/assets/app_store.svg" />
                    </Button>
                  </Stack>
                </Stack>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Or
                </Typography>
                <Stack direction="row" gap={2} alignItems="center">
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    Authy
                  </Typography>

                  {/* <SvgColor src="/assets/play_store.svg" width={200} height={50} /> */}
                  <Stack direction="row" alignItems="center">
                    <Button>
                      <Image disabledEffect src="/assets/play_store.svg" />
                    </Button>
                    <Button>
                      <Image disabledEffect src="/assets/app_store.svg" />
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{ color: 'grey.200', backgroundColor: '#0F1532', borderRadius: 1, p: 4, mb: 2 }}
            >
              <Typography variant="subtitle1">2-Configure the app</Typography>
              <Divider sx={{ mt: 2, mb: 2 }} />

              <Stack direction="row">
                <Stack direction="column" gap={2} sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    Once you downloaded and installed the app of your choice,simply open app and add
                    your account by pointing yourmobile device’s camera at the QR code:
                  </Typography>
                  <Image src={imageSrc} sx={{ width: 200, height: 200 }} />
                </Stack>
                <Stack direction="column" gap={1} alignItems="center">
                  <Divider orientation="vertical" sx={{ flex: 1 }} />
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    OR
                  </Typography>
                  <Divider orientation="vertical" sx={{ flex: 1 }} />
                </Stack>
                <Stack direction="column" gap={2} sx={{ flex: 1 }}>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                      Manually enter the code below ito the app:
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{ backgroundColor: '#141A36', p: 1, mt: 2, borderRadius: 1 }}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="subtitle2" color="text.secondary" sx={{ ml: 2 }}>
                        {insertSpaceEveryFourChars(secretCode)}
                      </Typography>
                      <Button
                        onClick={() => {
                          handleClick();
                        }}
                      >
                        <Iconify icon="ph:copy" sx={{ color: 'white' }} />
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{ color: 'grey.200', backgroundColor: '#0F1532', borderRadius: 1, p: 4, mb: 2 }}
            >
              <Typography variant="subtitle1">
                3-Enter the 6-digit OTP code that the app generates
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }} />

              <OtpInput onChange={handleChange} />
            </Box>

            <Box
              sx={{
                color: 'grey.200',
                backgroundColor: '#0F1532',
                borderRadius: 1,
                px: 2,
                py: 4,
                mb: 2,
              }}
            >
              <Stack direction="row" alignItems="flex-start" gap={1}>
                <Checkbox checked={acceptEnable} onChange={(_, value) => setAcceptEnable(value)} />
                <Typography variant="subtitle2" color="text.secondary">
                  I attest to have saved my QR Code and Secret Key in a safe and secure placeBy
                  checking this box, I acknowledge that I have taken the necessary steps to save my
                  QR Code and the secret key associatedwith my Scale-In account. I understand that
                  the loss of this information could result in the loss of access to my account.
                </Typography>
              </Stack>
            </Box>
          </>
        )}
        {user?.twofaEnabled === true && (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="column" gap={2}>
                <Typography variant="subtitle1">Setup Two-Factor Authentication (2FA)</Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Two-factor authentication makes your account secure by requiring a special code in
                  addition to your password to log in.
                </Typography>
              </Stack>

              <Stack
                sx={{ backgroundColor: '#1AC26D', p: 1, borderRadius: 1 }}
                direction="row"
                gap={1}
              >
                <SuccessIcon color="inherit" />
                <Typography variant="subtitle2" sx={{ color: 'white' }}>
                  Two Factor Authentication is enabled
                </Typography>
              </Stack>
            </Stack>

            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box
              sx={{ color: 'grey.200', backgroundColor: '#0F1532', borderRadius: 1, p: 4, mb: 2 }}
            >
              <Typography variant="subtitle1">
                3-Enter the 6-digit OTP code that the app generates
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }} />

              <OtpInput onChange={handleChange} />
            </Box>

            <Box
              sx={{
                color: 'grey.200',
                backgroundColor: '#0F1532',
                borderRadius: 1,
                px: 2,
                py: 4,
                mb: 2,
              }}
            >
              <Stack direction="row" alignItems="flex-start" gap={1}>
                <Checkbox
                  checked={acceptDisable}
                  onChange={(_, value) => setAcceptDisable(value)}
                />
                <Typography variant="subtitle2" color="text.secondary">
                  I acknowledge the increased security risks associated with disabling Two-Factor
                  Authentication (2FA). I understand that byopting out of 2FA, I take full
                  responsibility for the potential consequences of unauthorized access to my
                  account.
                </Typography>
              </Stack>
            </Box>
          </>
        )}
      </Box>

      <Divider />

      <Stack direction="row">
        <Box sx={{ flex: 1 }} />
        <LoadingButton
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isLoading}
          sx={{
            mt: 2,
            background:
              user?.twofaEnabled === true
                ? 'linear-gradient(to right, #EA485C, #ED8A4C)'
                : 'linear-gradient(to right, #199B59, #10CB6C)',
            opacity: buttonDisabled() ? 0.6 : 1.0,
            color: '#FFF',
            '&.MuiLoadingButton-root': {
              '&.Mui-disabled': {
                color: !isLoading ? '#fff' : 'transparent',
              },
            },
            '& .MuiLoadingButton-loadingIndicator': {
              color: 'red',
            },
          }}
          disabled={buttonDisabled()}
          onClick={processMFA}
        >
          {user?.twofaEnabled === true ? 'Disable 2FA' : 'Enable 2FA'}
        </LoadingButton>
      </Stack>
    </Box>
  );
}

export default TwoFactor;
