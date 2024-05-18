import { Helmet } from 'react-helmet-async';

import Settings from 'src/sections/profile/Settings';
import MyProfile from 'src/sections/profile/tabs/MyProfile';
// sections

// ----------------------------------------------------------------------

export default function MyProfilePage() {
  return (
    <>
      <Helmet>
        <title> Settings &gt; My Profile | Scale-In </title>
      </Helmet>
      <MyProfile />
    </>
  );
}
