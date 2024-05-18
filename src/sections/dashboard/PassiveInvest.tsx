import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import Image from 'src/components/image';
import { border, borderBottom, margin } from '@mui/system';

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
  '/passive-invest/portfolio',
  // '/passive-invest/open-orders',
  '/passive-invest/order-history',
  '/passive-invest/deposit-and-withdrawal',
  '/passive-invest/sync-cex',
];

function PassiveInvest() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const navigate = useNavigate();
  const route = useLocation();

  const handleTabChange = (e: any, tabIndex: number) => {
    navigate(routeNames[tabIndex]);
    setCurrentTabIndex(tabIndex);
  };

  useEffect(() => {
    setCurrentTabIndex(routeNames.indexOf(route.pathname) ?? 0);
  }, [route]);

  return (
    <>
      <AntTabs defaultValue={currentTabIndex} value={currentTabIndex} onChange={handleTabChange}>
        <AntTab
          label="Your Portfolio"
          icon={
            <Image
              alt="/assets/passive_invest/your_portfolio.png"
              src="/assets/passive_invest/your_portfolio.png"
              disabledEffect
            />
          }
        />
        {/* <AntTab
          label="Open Orders"
          icon={
            <Image
              alt="/assets/passive_invest/open_orders.png"
              src="/assets/passive_invest/open_orders.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        /> */}
        <AntTab
          label="Order History"
          icon={
            <Image
              alt="/assets/passive_invest/order_history.png"
              src="/assets/passive_invest/order_history.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        />
        <AntTab
          label="Deposit And Withdrawal"
          icon={
            <Image
              alt="/assets/passive_invest/order_history.png"
              src="/assets/passive_invest/order_history.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        />
        <AntTab
          label="Sync Your Account With Your CEX"
          icon={
            <Image
              alt="/assets/passive_invest/sync_your_account.png"
              src="/assets/passive_invest/sync_your_account.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        />
      </AntTabs>

      <Outlet />
    </>
  );
}

export default PassiveInvest;
