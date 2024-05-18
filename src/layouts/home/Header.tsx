import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import { gsap } from 'gsap';

import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from 'src/auth/useAuthContext';
import Image from 'src/components/image';
import { useI18nContext } from '../../i18n/i18n-react';
import Logo from '../../assets/images/logo.png';
import { locales } from '../../i18n/i18n-util';
import { Locales } from '../../i18n/i18n-types';
import { loadLocaleAsync } from '../../i18n/i18n-util.async';
import { PATH_ADMIN_DASHBOARD, PATH_AUTH, PATH_DASHBOARD, PATH_HOME } from '../../routes/paths';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    fontSize: 13,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  color: '#FFFFFF',
}));

const Header = () => {
  const { locale, LL, setLocale } = useI18nContext();

  const { pathname } = useLocation();

  const { isAuthenticated, user } = useAuthContext();

  const goToMain = () => {
    try {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#main',
          offsetY: 180,
        },
      });
    } catch (error) {
      console.log('error');
    }
  };

  const goToAbout = () => {
    try {
      const section = document.querySelector('#about');
      section!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      console.log('error');
    }
  };

  const goToActiveInvest = () => {
    try {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#content-active-invest',
          offsetY: 180,
        },
      });
    } catch (error) {
      console.log('error');
    }
  };

  const goToPassiveInvest = () => {
    try {
      // const section = document.querySelector('#passinvest');

      // console.log('quant invest section ==> ', section);
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#content-pass-invest',
          offsetY: 300,
        },
      });
      // smoother.scrollTo(section);
      // section!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      console.log('error');
    }
  };

  const goToPrivateClub = () => {
    try {
      const section = document.querySelector('#content-private-club');
      section!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      console.log('error');
    }
  };

  // const goToFaq = () => {
  //   try {
  //     const section = document.querySelector('#faq');
  //     section!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   } catch (error) {
  //     console.log('error');
  //   }
  // };

  const goToContact = () => {
    try {
      const section = document.querySelector('#contact');
      section!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      console.log('error');
    }
  };

  // const goToJoinUs = () => {
  //   try {
  //     gsap.to(window, {
  //       duration: 1,
  //       scrollTo: {
  //         y: '#content-join-us',
  //         offsetY: 250,
  //       },
  //     });
  //   } catch (error) {
  //     console.log('error');
  //   }
  // };

  const navigate = useNavigate();

  const goToAffiliate = () => {
    navigate(PATH_HOME.affiliate);
  };

  const pages = [
    {
      label: LL.home(),
      path: goToMain,
      id: 'header-home',
    },
    {
      label: LL.passive_invests(),
      path: goToPassiveInvest,
      id: 'header-passive-invest',
    },
    {
      label: LL.active_invests(),
      path: goToPrivateClub,
      id: 'header-private-club',
    },
    {
      label: LL.affiliate(),
      path: goToAffiliate,
      id: 'header-affiliate',
    },
    // {
    //   label: LL.about(),
    //   path: goToAbout,
    //   id: 'header-about',
    // },
    // {
    //   label: LL.FAQ(),
    //   path: goToFaq,
    //   id: 'header-faq',
    // },
    {
      label: LL.contact(),
      path: goToContact,
      id: 'header-contact',
    },
  ];

  const onLocaleSelected = async ({ target }: any) => {
    const locale1 = target.value as Locales;
    localStorage.setItem('lang', locale1);
    await loadLocaleAsync(locale1);
    setLocale(locale1);
  };

  const goToLogin = () => {
    navigate(PATH_AUTH.login);
  };

  const getUserDefaultPage = () => {
    if (user?.subscription.actInvest === false && user?.subscription.passInvest === true)
      return PATH_DASHBOARD.passiveInvest;
    return PATH_DASHBOARD.activeInvest;
  };

  const goToDashboard = () => {
    navigate(user?.isAdmin ? PATH_ADMIN_DASHBOARD.dashboard : getUserDefaultPage());
  };

  const goToRegister = () => {
    console.log('go to register:::');
    navigate(PATH_AUTH.register);
  };

  const settings = [
    {
      label: LL.sign_in(),
      path: goToLogin,
      id: 'settings-login',
    },
    {
      label: LL.join_us_lower_font(),
      path: goToRegister,
      id: 'settings-register',
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const goToHome = () => {
    if (pathname !== '/') {
      navigate(PATH_HOME.root);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling animation
      });
    }
  };

  return (
    <Stack
      px={{ xl: 32, lg: 8, md: 8, sm: 4, xs: 2 }}
      sx={{
        backgroundColor: '#141A36',
        color: 'white',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        zIndex: 999,
        py: 2,
      }}
      id="home"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* <Box component="img" src={Logo} onClick={goToHome} /> */}
        {/* <Image
          src="/assets/logo.png"
          sx={{
            width: '200px',
            height: '50px',
            cursor: 'pointer',
            marginRight: 2,
          }}
          onClick={goToHome}
        /> */}
        <Box
          component="img"
          sx={{
            height: 57,
            cursor: 'pointer',
          }}
          alt="The house from the offer."
          src="/assets/logo.png"
          onClick={goToHome}
        />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ display: { xs: 'none', lg: 'flex' } }}
        >
          {pages.map((page, index) => (
            <Button
              key={index}
              id={page.id}
              onClick={page.path}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'none',
                fontSize: '16px',
              }}
            >
              {page.label}
            </Button>
          ))}
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          gap={{ xs: 1, lg: 2, xl: 4 }}
          sx={{ display: { xs: 'none', lg: 'flex' } }}
        >
          <CustomSelect value={locale} onChange={onLocaleSelected} input={<BootstrapInput />}>
            {locales.map((local) => (
              <MenuItem value={local} key={local}>
                {local.toUpperCase()}
              </MenuItem>
            ))}
          </CustomSelect>

          {isAuthenticated && (
            <Button
              variant="contained"
              onClick={goToDashboard}
              sx={{
                textTransform: 'none',
                display: { xs: 'none', md: 'block' },
                background: 'linear-gradient(90deg, #199B59 0%, #37EC99 100%)',
                margin: '4px 0px !important',
                padding: '4px 28px !important',
                fontSize: '14px',
                '&:hover': {
                  background: 'linear-gradient(90deg, #199B59 0%, #37EC99 100%)',
                },
              }}
            >
              {LL.go_to_dashboard()}
            </Button>
          )}

          {!isAuthenticated && (
            <>
              <Button
                variant="contained"
                onClick={goToLogin}
                sx={{
                  backgroundColor: '#fbb532',
                  color: 'white',
                  height: '56px',
                  fontWeight: '700',
                  form: 'capitalize',
                }}
              >
                {LL.login()}
              </Button>
              {/* <Button
                variant="contained"
                onClick={goToJoinUs}
                sx={{
                  textTransform: 'none',
                  display: { xs: 'none', md: 'block' },
                  background: 'linear-gradient(90deg, #199B59 0%, #37EC99 100%)',
                  margin: '4px 0px !important',
                  padding: '4px 28px !important',
                  fontSize: '14px',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #199B59 0%, #37EC99 100%)',
                  },
                }}
              >
                {LL.join_us_lower_font()}
              </Button> */}
            </>
          )}
        </Stack>
        <Box sx={{ display: { xs: 'block', md: 'flex', lg: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ zIndex: 999 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', lg: 'none' },
              minWidth: { xs: '300px' },
            }}
          >
            {[...pages, ...settings].map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={page.path} sx={{ cursor: 'pointer' }}>
                  {page.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Header;
