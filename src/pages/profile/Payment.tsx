import { Helmet } from 'react-helmet-async';
import Payment from 'src/sections/profile/tabs/Payment';

import TwoFactor from 'src/sections/profile/tabs/TwoFactor';
// sections

// ----------------------------------------------------------------------

export default function PaymentPage() {
  return (
    <>
      <Helmet>
        <title> Settings &gt; Payments | Scale-In </title>
      </Helmet>
      <Payment />
    </>
  );
}
