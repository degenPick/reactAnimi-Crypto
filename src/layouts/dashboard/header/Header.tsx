import { useLocation } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';
//
import AccountPopover from './AccountPopover';
import imgUrl from '../../../assets/images/header_pattern.png';
import { useAuthContext } from '../../../auth/useAuthContext';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
import { PATH_DASHBOARD, PATH_PROFILE } from '../../../routes/paths';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const { user } = useAuthContext();

  const { themeLayout } = useSettingsContext();

  const { pathname } = useLocation();

  const domainNameConversion = (_pathname: string): string => {
    const names = _pathname.split('/');

    if (names.length <= 3) {
      const mainDomain = _pathname.split('/')[1];
      switch (mainDomain) {
        case 'active-invest':
          return 'Private Club';
        case 'passive-invest':
          return 'Quant Invest';
        case 'lets-talk':
          return 'Lets Talk';
        case 'affiliate':
          return 'Affiliate';
        case 'documentation':
          return 'Documentation';
        case 'customer-support':
          return 'CustomerSupport';
        case 'account':
          return 'My Subscriptions';
        default:
          return '';
      }
    }
    const mainDomain = _pathname.split('/')[3];
    switch (mainDomain) {
      case 'profile':
        return 'My Profile';
      case 'password':
        return 'Password';
      case '2fa_security':
        return '2FA Security';
      case 'my_socials':
        return 'My Socials';
      default:
        return '';
    }
  };

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive('up', 'lg');

  const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

  const getUserDefaultPage = () => {
    if (user?.subscription.actInvest === false && user?.subscription.passInvest === true)
      return PATH_DASHBOARD.passiveInvest;
    return PATH_DASHBOARD.activeInvest;
  };

  const renderContent = (
    <>
      {isDesktop && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}
      <CustomBreadcrumbs
        links={[
          pathname.split('/')[1] !== 'account'
            ? { name: 'Dashboard', href: getUserDefaultPage() }
            : { name: 'My Account', href: PATH_PROFILE.settings },
          { name: domainNameConversion(pathname) },
        ]}
      />

      {!isDesktop && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        <Typography variant="h6" fontWeight={700}>
          {user?.firstName} {user?.lastName}
        </Typography>
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
          height: HEADER.H_DASHBOARD_DESKTOP,
          ...(isOffset && {
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: 'background.default',
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
          backgroundColor: '#141A36',
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
