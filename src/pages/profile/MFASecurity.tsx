import { Helmet } from 'react-helmet-async';

import TwoFactor from 'src/sections/profile/tabs/TwoFactor';
// sections

// ----------------------------------------------------------------------

export default function MFASecurityPage() {
  return (
    <>
      <Helmet>
        <title> Settings &gt; 2FA Security | Scale-In </title>
      </Helmet>
      <TwoFactor />
    </>
  );
}
