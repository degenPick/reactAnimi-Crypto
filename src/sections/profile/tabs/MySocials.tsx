import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { LoadingButton } from '@mui/lab';
import { useAuthContext } from 'src/auth/useAuthContext';
import { CustomAvatar } from 'src/components/custom-avatar';
import MyProfileForm from './MyProfileForm';
import MySocalItem, { IMySocialItemProps } from './MySocalItem';

const datas: IMySocialItemProps[] = [
  { type: 'Discord', icon: '/assets/icons/discord.svg' },
  { type: 'X', icon: '/assets/icons/x.svg' },
  { type: 'Instagram', icon: '/assets/icons/instagram.svg' },
  { type: 'Telegram', icon: '/assets/icons/telegram.svg' },
  { type: 'Linkedin', icon: '/assets/icons/linkedin.svg' },
  { type: 'Tiktok', icon: '/assets/icons/tiktok.svg' },
];
function MySocials() {
  const { user } = useAuthContext();
  return (
    <Box sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2, mb: 2 }}>
      <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 4, mb: 2 }}>
        <Typography>My Socials</Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography variant="subtitle2" color="text.secondary">
          Supercharge your experience with us! Link your social media accounts to effortlessly stay
          connected, share insights, and amplify your presence within our community!
        </Typography>

        <Grid container sx={{ mt: 2 }}>
          {datas.map((item) => (
            <Grid item xs={12} md={4} lg={4}>
              <MySocalItem type={item.type} icon={item.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MySocials;
