import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router';
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
    padding: 0,
    borderRadius: 4,
  },
});

interface StyledTabProps {
  label: string;
  icon: any;
}
const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  borderRadius: 4,
  padding: 10,
  fontWeight: theme.typography.fontWeightRegular,
  color: 'rgba(0, 0, 0, 0.85)',
  fontSize: 16,
  gap: 10,
  '&.Mui-selected': {
    color: 'white',
    backgroundColor: '#202540',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const routeNames = [
  '/admin/account/settings/profile',
  '/admin/account/settings/password',
  '/admin/account/settings/2fa_security',
  '/admin/account/settings/payment',
  '/admin/account/settings/my_socials',
];
function AdminSettings() {
  const { user } = useAuthContext();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const navigate = useNavigate();

  const handleTabChange = (e: any, tabIndex: number) => {
    try {
      navigate(routeNames[tabIndex]);
      setCurrentTabIndex(tabIndex);
    } catch (error) {
      console.log(error);
    }
  };

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

export default AdminSettings;
