import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Typography, MenuItem, Stack, Divider, Button } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';
import { WarningIcon } from 'src/theme/overrides/CustomIcons';

// routes
import {
  ADMIN_PATH_PROFILE,
  PATH_AUTH,
  PATH_DASHBOARD,
  PATH_HOME,
  PATH_PROFILE,
} from '../../../../routes/paths';
// auth
import { useAuthContext } from '../../../../auth/useAuthContext';
// components
import { CustomAvatar } from '../../../../components/custom-avatar';
import MenuPopover from '../../../../components/menu-popover';
import { IconButtonAnimate } from '../../../../components/animate';

// ----------------------------------------------------------------------

// const OPTIONS = [
//   {
//     label: 'Profile',
//     linkTo: PATH_DASHBOARD.user.profile,
//   },
//   {
//     label: 'Settings',
//     linkTo: PATH_DASHBOARD.user.account,
//   },
// ];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();

  const { user, logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleLogout = async () => {
    try {
      logout();
      navigate(PATH_HOME.root, { replace: true });
      handleClosePopover();
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  const handleClickItem = (path: string) => {
    handleClosePopover();
    navigate(path);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          border: '1px solid #EA485C',
          ...(openPopover && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <CustomAvatar
          color="default"
          src="/assets/avatar.png"
          alt={user?.firstName}
          name={user?.firstName}
        />
      </IconButtonAnimate>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        sx={{ width: 350, p: 2, backgroundColor: '#202540' }}
      >
        <Stack
          direction="column"
          alignItems="center"
          gap={2}
          sx={{ pb: 2, borderBottom: '1px dashed #2C2F40' }}
        >
          <CustomAvatar
            color="default"
            src="/assets/avatar.png"
            alt={user?.firstName}
            name={user?.firstName}
            sx={{ width: 100, height: 100 }}
          />

          <Typography variant="h6" fontWeight={700}>
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Email: {user?.email}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Phone: {user?.phone ?? '124 948 4012'}
          </Typography>
        </Stack>

        <Stack
          direction="column"
          alignItems="center"
          gap={2}
          sx={{ mt: 2, pb: 2, borderBottom: '1px dashed #2C2F40' }}
        >
          <Button
            variant="outlined"
            fullWidth
            sx={{ borderColor: '#2C2F40', p: 2 }}
            onClick={() => {
              handleClickItem(ADMIN_PATH_PROFILE.settings);
            }}
          >
            <Stack
              direction="row"
              sx={{ width: '100%' }}
              gap={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" gap={2} alignItems="center">
                <Stack
                  sx={{ p: 1, backgroundColor: '#363A53', borderRadius: 1 }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <SvgColor src="/assets/profile.svg" color="white" />
                </Stack>
                <Typography variant="h5" fontWeight={700} color="text.secondary">
                  Profile Settings
                </Typography>
              </Stack>
              <Image src="/assets/warning.svg" alignSelf="flex-end" />
            </Stack>
          </Button>
        </Stack>

        <LoadingButton
          color="inherit"
          size="medium"
          type="submit"
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #EE404C, #EE404C)',
            color: '#fff',
            mt: 2,
          }}
          onClick={handleLogout}
        >
          Logout
        </LoadingButton>
        {/* <MenuItem
          sx={{ my: 1.5, px: 2.5 }}
          onClick={() => {
            handleClickItem(PATH_PROFILE.settings);
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            Logout
          </Typography>
        </MenuItem> */}
      </MenuPopover>
    </>
  );
}
