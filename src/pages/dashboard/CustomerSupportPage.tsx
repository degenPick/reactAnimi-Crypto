import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
// sections

// ----------------------------------------------------------------------

export default function CustomerSupportPage() {
  return (
    <>
      <Helmet>
        <title> Customer Support | Scale-In </title>
      </Helmet>
      <Typography variant="h6" color="#fff">
        Customer Support
      </Typography>
    </>
  );
}
