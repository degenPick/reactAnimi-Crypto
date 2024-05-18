import React from 'react';
import { Helmet } from 'react-helmet-async';
import DepoistAndWithdrawal from 'src/sections/dashboard/passiveInvest/tabs/DepoistAndWithdrawal';

function DepositAndWithdrawalPage() {
  return (
    <>
      <Helmet>
        <title> Quant Invest &gt; Deposit And Withdrawal | Scale-In </title>
      </Helmet>
      <DepoistAndWithdrawal />
    </>
  );
}

export default DepositAndWithdrawalPage;
