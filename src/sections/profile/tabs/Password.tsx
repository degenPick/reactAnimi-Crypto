import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useAuthContext } from 'src/auth/useAuthContext';
import { CustomAvatar } from 'src/components/custom-avatar';
import MyProfileForm from './MyProfileForm';
import PasswordForm from './PasswordForm';

function Password() {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return <PasswordForm />;
}

export default Password;
