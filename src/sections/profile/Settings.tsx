import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Image from 'src/components/image';
import { useAuthContext } from 'src/auth/useAuthContext';
import SvgColor from 'src/components/svg-color';
import MyProfile from './tabs/MyProfile';
import Password from './tabs/Password';
import TwoFactor from './tabs/TwoFactor';

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-flexContainer': {
    border: '1px solid black',
    borderBottom: '2px solid rgba(219, 218, 244, 0.1)',
    padding: 0,
    gap: 0,
    borderTopLeftRadius: '10px!important',
    borderTopRightRadius: '10px!important',
  },
});

interface StyledTabProps {
  label: string;
  icon: any;
}
const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 10,
  paddingBottom: 10,
  fontWeight: theme.typography.fontWeightRegular,
  color: 'rgba(0, 0, 0, 0.85)',
  fontSize: 16,
  marginRight: 0,
  gap: 10,
  border: '1px solid #10152B',
  '&.Mui-selected': {
    color: 'white',
    backgroundColor: '#202540',
    fontWeight: theme.typography.fontWeightMedium,
    border: '2px solid rgba(219, 218, 244, 0.1)',
    borderBottom: 'none',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
  '&.MuiTab-root': {
    margin: 0,
  },
}));

const routeNames = [
  '/account/settings/profile',
  '/account/settings/password',
  '/account/settings/2fa_security',
  '/account/settings/payment',
  '/account/settings/my_socials',
];
function Settings() {
  const { user } = useAuthContext();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const navigate = useNavigate();
  const route = useLocation();

  const handleTabChange = (e: any, tabIndex: number) => {
    try {
      navigate(routeNames[tabIndex]);
      setCurrentTabIndex(tabIndex);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCurrentTabIndex(routeNames.indexOf(route.pathname) ?? 0);
  }, [route]);

  const getTwoFactorSvg = () => {
    if (user?.twofaEnabled === true) {
      return currentTabIndex === 2
        ? '/assets/profile/twofactor_enable_active.svg'
        : '/assets/profile/twofactor_enable.svg';
    }
    return currentTabIndex === 2
      ? '/assets/profile/twofactor_active.svg'
      : '/assets/profile/twofactor.svg';
  };

  return (
    <>
      <AntTabs defaultValue={currentTabIndex} value={currentTabIndex} onChange={handleTabChange}>
        <AntTab
          label="My Profile"
          icon={
            <Image
              src={
                currentTabIndex === 0
                  ? '/assets/profile/account_active.svg'
                  : '/assets/profile/account.svg'
              }
              sx={{
                width: '30px',
                height: '30px',
              }}
            />
          }
        />
        <AntTab
          label="Password"
          icon={
            <Image
              // alt="/assets/profile/password.svg"
              src={
                currentTabIndex === 1
                  ? '/assets/profile/password_active.svg'
                  : '/assets/profile/password.svg'
              }
              sx={{ width: '30px', height: '30px' }}
            />
          }
        />
        <AntTab
          label="2FA Security"
          icon={
            <Image
              src={getTwoFactorSvg()}
              sx={{ width: user?.twofaEnabled === true ? '30px' : '70px', height: '30px' }}
            />
          }
        />
        <AntTab
          label="Payments"
          icon={
            <Image
              src={
                currentTabIndex === 3
                  ? '/assets/profile/payments_active.svg'
                  : '/assets/profile/payments.svg'
              }
              sx={{ width: '30px', height: '30px' }}
            />
          }
        />
        <AntTab
          label="My Socials"
          icon={
            <Image
              src={
                currentTabIndex === 4
                  ? '/assets/profile/socials_active.svg'
                  : '/assets/profile/socials.svg'
              }
              sx={{ width: '30px', height: '30px' }}
            />
          }
        />
      </AntTabs>

      {/* {currentTabIndex === 0 && <MyProfile />}
      {currentTabIndex === 1 && <Password />}
      {currentTabIndex === 2 && <TwoFactor />} */}
      <Outlet />
      {/* {currentTabIndex === 0 && <YourPortfolio />}
      {currentTabIndex === 1 && <OpenOrders />}
      {currentTabIndex === 2 && <OrdersHistory />}
      {currentTabIndex === 3 && <SyncYourAccount />} */}
    </>
  );
}

export default Settings;
