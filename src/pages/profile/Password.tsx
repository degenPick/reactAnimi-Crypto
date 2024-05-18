import { Helmet } from 'react-helmet-async';

import Password from 'src/sections/profile/tabs/Password';
// sections

// ----------------------------------------------------------------------

export default function PasswordPage() {
  return (
    <>
      <Helmet>
        <title> Settings &gt; Password | Scale-In </title>
      </Helmet>
      <Password />
    </>
  );
}
