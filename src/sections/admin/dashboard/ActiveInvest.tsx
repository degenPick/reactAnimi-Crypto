import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router';
import Image from 'src/components/image';
import EarningDisplayTotal from './EarningDisplayTotal';

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
  '/admin/active-invest/analytics',
  '/admin/active-invest/clients',
  '/admin/active-invest/canceled_clients',
  '/admin/active-invest/product_settings',
];

export default function ActiveInvest() {
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
      <EarningDisplayTotal />
      <AntTabs
        defaultValue={currentTabIndex}
        value={currentTabIndex}
        onChange={handleTabChange}
        sx={{ mt: 2 }}
      >
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
              alt="/assets/passive_invest/open_orders.png"
              src="/assets/passive_invest/open_orders.png"
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
      </AntTabs>

      <Outlet />
    </>
  );
}
