import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router';
import Image from 'src/components/image';

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
  '/admin/passive-invest/analytics',
  '/admin/passive-invest/clients',
  '/admin/passive-invest/canceled_clients',
  '/admin/passive-invest/product_settings',
  '/admin/passive-invest/manage_strategy',
  // '/admin/passive-invest/open_orders',
  '/admin/passive-invest/order_history',
];

function PassiveInvest() {
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

  return (
    <>
      <AntTabs defaultValue={currentTabIndex} value={currentTabIndex} onChange={handleTabChange}>
        <AntTab
          label="Analytics"
          icon={
            <Image
              alt="/assets/passive_invest/your_portfolio.png"
              src="/assets/passive_invest/your_portfolio.png"
              disabledEffect
            />
          }
        />
        <AntTab
          label="Clients"
          icon={
            <Image
              alt="/assets/passive_invest/open_orders.png"
              src="/assets/passive_invest/open_orders.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        />
        <AntTab
          label="Canceled Clients"
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
          label="Product Settings"
          icon={
            <Image
              alt="/assets/passive_invest/sync_your_account.png"
              src="/assets/passive_invest/sync_your_account.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        />
        <AntTab
          label="Manage Strategy"
          icon={
            <Image
              alt="/assets/passive_invest/sync_your_account.png"
              src="/assets/passive_invest/sync_your_account.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        />
        {/* <AntTab
          label="Open Orders"
          icon={
            <Image
              alt="/assets/passive_invest/sync_your_account.png"
              src="/assets/passive_invest/sync_your_account.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        /> */}
        <AntTab
          label="Order History"
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
