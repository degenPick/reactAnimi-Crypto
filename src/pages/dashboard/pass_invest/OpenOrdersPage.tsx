import React from 'react';
import { Helmet } from 'react-helmet-async';
import OpenOrders from 'src/sections/dashboard/passiveInvest/tabs/OpenOrders';

function OpenOrdersPage() {
  return (
    <>
      <Helmet>
        <title> Quant Invest &gt; Open Orders | Scale-In </title>
      </Helmet>
      <OpenOrders />
    </>
  );
}

export default OpenOrdersPage;
