import { Helmet } from 'react-helmet-async';
import AdminSettings from 'src/sections/profile/AdminSettings';

// sections

// ----------------------------------------------------------------------

export default function AdminProfileSettingsPage() {
  return (
    <>
      <Helmet>
        <title> Admin Profile Settings | Scale-In </title>
      </Helmet>
      <AdminSettings />
    </>
  );
}
