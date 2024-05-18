import { Navigate } from 'react-router-dom';
// routes
import { PATH_ADMIN_DASHBOARD, PATH_DASHBOARD } from '../routes/paths';
// components
import LoadingScreen from '../components/loading-screen';
//
import { useAuthContext } from './useAuthContext';

// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated, isInitialized, user } = useAuthContext();

  // if (isAuthenticated) {
  //   return (
  //     <Navigate to={user?.isAdmin ? PATH_ADMIN_DASHBOARD.dashboard : PATH_DASHBOARD.activeInvest} />
  //   );
  // }

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <> {children} </>;
}
