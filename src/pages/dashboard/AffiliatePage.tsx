import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import Affiliate from 'src/sections/dashboard/Affiliate';
// sections

// ----------------------------------------------------------------------

export default function AffiliatePage() {
  return (
    <>
      <Helmet>
        <title> Affiliate | Scale-In </title>
      </Helmet>
      <Affiliate />
    </>
  );
}
