import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { LoadingButton } from '@mui/lab';
import { useAuthContext } from 'src/auth/useAuthContext';
import { CustomAvatar } from 'src/components/custom-avatar';
import MyProfileForm from './MyProfileForm';

function MyProfile() {
  const { user } = useAuthContext();
  return <MyProfileForm />;
}

export default MyProfile;
