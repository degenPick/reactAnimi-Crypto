import React from 'react';
import { Helmet } from 'react-helmet-async';
import YourPortfolio from 'src/sections/dashboard/passiveInvest/tabs/YourPortfolio';

function YourPortfolioPage() {
  return (
    <>
      <Helmet>
        <title> Quant Invest &gt; Your Portfolio | Scale-In </title>
      </Helmet>
      <YourPortfolio />
    </>
  );
}

export default YourPortfolioPage;
