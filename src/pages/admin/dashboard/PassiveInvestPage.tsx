import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import PassiveInvest from 'src/sections/admin/dashboard/PassiveInvest';
// sections

// ----------------------------------------------------------------------

export default function PassiveInvestPage() {
  return (
    <>
      <Helmet>
        <title> Admin Quant Invest | Scale-In </title>
      </Helmet>
      <PassiveInvest />
    </>
  );
}
