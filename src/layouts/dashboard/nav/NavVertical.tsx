import { useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
// @mui
import { Box, Stack, Drawer, Typography, Link } from '@mui/material';
import { PATH_HOME } from 'src/routes/paths';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config-global';
// components
// import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
//
import NavToggleButton from './NavToggleButton';
import { useAuthContext } from '../../../auth/useAuthContext';
import Youtube from '../../../assets/images/youtube.png';
import X from '../../../assets/images/x.png';
import Instagram from '../../../assets/images/instagram.png';
import ScaleInNano from '../../../assets/images/scale-in-nano.png';
import { navActiveConfig, navBothConfig, navPassiveConfig } from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isDesktop = useResponsive('up', 'lg');

  const { user } = useAuthContext();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const getNavConfigData = () => {
    if (user?.subscription.actInvest && user?.subscription.passInvest) {
      return navBothConfig;
    }
    if (user?.subscription.actInvest) return navActiveConfig;
    if (user?.subscription.passInvest) return navPassiveConfig;

    return navPassiveConfig;
  };

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        backgroundColor: '#252D4B',
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 5,
          pb: 5,
          px: 2.5,
          flexShrink: 0,
        }}
        alignItems="center"
      >
        <Link to={PATH_HOME.root} component={RouterLink}>
          <Box component="img" src="/assets/logo.png" width={140} />
        </Link>
      </Stack>

      <NavSectionVertical data={getNavConfigData()} />

      <Box sx={{ flexGrow: 1 }} />
      <Stack my={2}>
        <Typography variant="body2" textAlign="center" sx={{ color: 'grey.500' }} my={1}>
          Terms and conditions of Sale
        </Typography>
        <Stack flexDirection="row" justifyContent="center" alignItems="center">
          <Box mx={2} component="img" src={Youtube} sx={{ cursor: 'pointer' }} />
          <Box mx={2} component="img" src={X} sx={{ cursor: 'pointer' }} />
          <Box mx={2} component="img" src={Instagram} sx={{ cursor: 'pointer' }} />
        </Stack>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          my={1}
        >
          <Typography fontSize={16} mx={1} mt={1} sx={{ color: 'grey.500', fontWeight: 700 }}>
            © 2015-2024{' '}
          </Typography>
          <Box component="img" src={ScaleInNano} m={1} />
        </Stack>
      </Stack>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      <NavToggleButton />

      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: 'transparent',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
