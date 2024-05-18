import { Helmet } from 'react-helmet-async';

import Settings from 'src/sections/profile/Settings';
// sections

// ----------------------------------------------------------------------

export default function ProfileSettingsPage() {
  return (
    <>
      <Helmet>
        <title> Profile Settings | Scale-In </title>
      </Helmet>
      <Settings />
    </>
  );
}
