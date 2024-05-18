import { Helmet } from 'react-helmet-async';
import MySocials from 'src/sections/profile/tabs/MySocials';
import Payment from 'src/sections/profile/tabs/Payment';

import TwoFactor from 'src/sections/profile/tabs/TwoFactor';
// sections

// ----------------------------------------------------------------------

export default function MySocialsPage() {
  return (
    <>
      <Helmet>
        <title> Settings &gt; My Socials | Scale-In </title>
      </Helmet>
      <MySocials />
    </>
  );
}
