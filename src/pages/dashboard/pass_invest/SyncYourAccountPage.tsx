import React from 'react';
import { Helmet } from 'react-helmet-async';
import SyncYourAccount from 'src/sections/dashboard/passiveInvest/tabs/SyncYourAccount';

function SyncYourAccountPage() {
  return (
    <>
      <Helmet>
        <title> Quant Invest &gt; Sync Your Account | Scale-In </title>
      </Helmet>
      <SyncYourAccount />
    </>
  );
}

export default SyncYourAccountPage;
