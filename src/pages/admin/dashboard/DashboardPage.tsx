import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import Dashboard from 'src/sections/admin/dashboard/dashboard';
// sections

// ----------------------------------------------------------------------

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title> Admin Dashboard | Scale-In </title>
      </Helmet>

      <Dashboard />
    </>
  );
}
