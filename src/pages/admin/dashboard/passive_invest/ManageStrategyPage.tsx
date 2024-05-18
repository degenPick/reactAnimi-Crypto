import { Helmet } from 'react-helmet-async';
import React from 'react';
import ManageStrategy from 'src/sections/admin/dashboard/passiveInvest/manage_strategy/ManageStrategy';

function ManageStrategyPage() {
  return (
    <>
      <Helmet>
        <title> Manage Strategy | Scale-In </title>
      </Helmet>
      <ManageStrategy />
    </>
  );
}

export default ManageStrategyPage;
