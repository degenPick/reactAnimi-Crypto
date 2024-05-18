import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import ActiveInvest from 'src/sections/admin/dashboard/ActiveInvest';
// sections
// ----------------------------------------------------------------------

export default function ActiveInvestPage() {
  return (
    <>
      <Helmet>
        <title> Admin Private Club | Scale-In </title>
      </Helmet>

      <ActiveInvest />
    </>
  );
}
