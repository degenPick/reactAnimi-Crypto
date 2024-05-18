import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'src/components/image';
import YourPortfolio from './tabs/YourPortfolio';
import OpenOrders from './tabs/OpenOrders';
import OrdersHistory from './tabs/OrdersHistory';
import SyncYourAccount from './tabs/SyncYourAccount';

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

function Content() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e: any, tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  };
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
        <AntTab
          label="Open Orders"
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

      {currentTabIndex === 0 && <YourPortfolio />}
      {currentTabIndex === 1 && <OpenOrders />}
      {currentTabIndex === 2 && <OrdersHistory />}
      {currentTabIndex === 3 && <SyncYourAccount />}
    </>
  );
}

export default Content;
