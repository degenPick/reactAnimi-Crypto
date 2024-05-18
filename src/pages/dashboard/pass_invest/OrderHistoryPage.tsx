import React from 'react';
import { Helmet } from 'react-helmet-async';
import OrdersHistory from 'src/sections/dashboard/passiveInvest/tabs/OrdersHistory';

function OrderHistoryPage() {
  return (
    <>
      <Helmet>
        <title> Quant Invest &gt; Order History | Scale-In </title>
      </Helmet>
      <OrdersHistory />
    </>
  );
}

export default OrderHistoryPage;
