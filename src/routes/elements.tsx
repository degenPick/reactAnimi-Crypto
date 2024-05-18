import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')));
export const GithubCallbackPage = Loadable(lazy(() => import('../pages/auth/GithubCallbackPage')));
export const RegisterPage = Loadable(lazy(() => import('../pages/auth/RegisterPage')));
export const SendEmailPage = Loadable(lazy(() => import('../pages/auth/SendEmailPage')));
export const SendPhonePage = Loadable(lazy(() => import('../pages/auth/SendPhonePage')));
export const VerifyEmailPage = Loadable(lazy(() => import('../pages/auth/VerifyEmailPage')));
export const VerifyPhonePage = Loadable(lazy(() => import('../pages/auth/VerifyPhonePage')));
export const NewPasswordPage = Loadable(lazy(() => import('../pages/auth/NewPasswordPage')));
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPasswordPage')));
export const VerifyMfaPage = Loadable(lazy(() => import('../pages/auth/VerifyMfaPage')));

// DASHBOARD: USER
export const ActiveInvestPage = Loadable(lazy(() => import('../pages/dashboard/ActiveInvestPage')));
export const PassiveInvestPage = Loadable(
  lazy(() => import('../pages/dashboard/PassiveInvestPage'))
);
export const PassiveInvestYourPortfolioPage = Loadable(
  lazy(() => import('../pages/dashboard/pass_invest/YourPortfolioPage'))
);
export const PassiveInvestOpenOrdersPage = Loadable(
  lazy(() => import('../pages/dashboard/pass_invest/OpenOrdersPage'))
);
export const PassiveInvestOrderHistoryPage = Loadable(
  lazy(() => import('../pages/dashboard/pass_invest/OrderHistoryPage'))
);
export const DepositAndWithdrawalPage = Loadable(
  lazy(() => import('../pages/dashboard/pass_invest/DepositAndWithdrawalPage'))
);
export const PassiveInvestSyncYourAccountPage = Loadable(
  lazy(() => import('../pages/dashboard/pass_invest/SyncYourAccountPage'))
);

export const AffiliateDashboardPage = Loadable(
  lazy(() => import('../pages/dashboard/AffiliatePage'))
);
export const LetsTalkPage = Loadable(lazy(() => import('../pages/dashboard/LetsTalkPage')));
export const DocumentationPage = Loadable(
  lazy(() => import('../pages/dashboard/DocumentationPage'))
);
export const CustomerSupportPage = Loadable(
  lazy(() => import('../pages/dashboard/CustomerSupportPage'))
);

// USER PROFILE
export const ProfileSettingsPage = Loadable(lazy(() => import('../pages/profile/Settings')));
export const AdminProfileSettingsPage = Loadable(
  lazy(() => import('../pages/profile/AdminSettings'))
);
export const MyProfilePage = Loadable(lazy(() => import('../pages/profile/MyProfile')));
export const PasswordPage = Loadable(lazy(() => import('../pages/profile/Password')));
export const MFASecurityPage = Loadable(lazy(() => import('../pages/profile/MFASecurity')));
export const PaymentPage = Loadable(lazy(() => import('../pages/profile/Payment')));
export const MySocialsPage = Loadable(lazy(() => import('../pages/profile/MySocials')));
export const MySubscriptionsPage = Loadable(lazy(() => import('../pages/profile/MySubscriptions')));

// DASHBOARD: ADMIN
export const AdminDashboardPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/DashboardPage'))
);
export const AdminActiveInvestPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/ActiveInvestPage'))
);
export const AdminActiveInvestAnalyticsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/active_invest/AnalyticsPage'))
);
export const AdminActiveInvestClientsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/active_invest/ClientsPage'))
);
export const AdminActiveInvestCanceledClientsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/active_invest/CanceledClientsPage'))
);
export const AdminActiveInvestProductSettingsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/active_invest/ProductSettingsPage'))
);

export const AdminPassiveInvestPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/PassiveInvestPage'))
);
// Quant Invest Pages
export const AdminPassiveInvestAnalyticsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/passive_invest/AnalyticsPage'))
);
export const AdminPassiveInvestClientsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/passive_invest/ClientsPage'))
);
export const AdminPassiveInvestCanceledClientsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/passive_invest/CanceledClientsPage'))
);
export const AdminPassiveInvestProductSettingsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/passive_invest/ProductSettingsPage'))
);
export const AdminPassiveInvestManageStrategyPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/passive_invest/ManageStrategyPage'))
);
export const AdminPassiveInvestOpenOrdersPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/passive_invest/OpenOrdersPage'))
);
export const AdminPassiveInvestOrderHistoryPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/passive_invest/OrderHistoryPage'))
);
//
export const AdminAffiliateDashboardPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/AffiliatePage'))
);
export const AdminClientsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/ClientsPage'))
);
export const AdminPaymentsPage = Loadable(
  lazy(() => import('../pages/admin/dashboard/PaymentsPage'))
);
// HOME
export const HomePage = Loadable(lazy(() => import('../pages/home/HomePage')));
export const TermsAndConditionsPage = Loadable(
  lazy(() => import('../pages/home/TermsAndConditionsPage'))
);
export const AffiliatePage = Loadable(lazy(() => import('../pages/home/AffiliatePage')));

// MAIN
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
