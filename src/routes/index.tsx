import { useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { useDispatch } from 'src/redux/store';
import ProfileLayout from 'src/layouts/dashboard/ProfileLayout';
import AuthAdminGuard from 'src/auth/AuthAdminGuard';
import { useAuthContext } from 'src/auth/useAuthContext';
import AdminDashboardLayout from 'src/layouts/admin/dashboard/AdminDashboardLayout';
import { actions } from 'src/redux/price/price.slice';

// auth
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
// layouts
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
import HomeLayout from '../layouts/home';
// config
import { PATH_AFTER_ADMIN_LOGIN, PATH_AFTER_LOGIN, HOST_API_KEY } from '../config-global';
//
import {
  // Auth
  LoginPage,
  RegisterPage,
  SendEmailPage,
  VerifyEmailPage,
  SendPhonePage,
  VerifyPhonePage,
  NewPasswordPage,
  ResetPasswordPage,
  VerifyMfaPage,
  // Home
  HomePage,
  TermsAndConditionsPage,
  AffiliatePage,
  // Dashboard
  ActiveInvestPage,
  PassiveInvestPage,
  AffiliateDashboardPage,
  LetsTalkPage,
  DocumentationPage,
  CustomerSupportPage,
  ProfileSettingsPage,
  // UserListPage,
  // UserEditPage,
  // UserCreatePage,
  // UserAccountPage,
  // UserResetPasswordPage,
  // // Dashboard: Alert
  // AlertListPage,
  // AlertEditPage,
  // AlertAccountPage,
  // // Dashboard: Admin
  // AdminListPage,
  // AdminEditPage,
  // AdminCreatePage,
  // AdminViewPage,
  // AdminUserResetPasswordPage,
  // //
  // BlankPage,
  // PermissionDeniedPage,
  //
  Page500,
  Page404,
  MySubscriptionsPage,
  MyProfilePage,
  PasswordPage,
  MFASecurityPage,
  PaymentPage,
  MySocialsPage,
  AdminActiveInvestPage,
  AdminPassiveInvestPage,
  AdminAffiliateDashboardPage,
  AdminDashboardPage,
  AdminClientsPage,
  AdminPaymentsPage,
  AdminPassiveInvestAnalyticsPage,
  AdminPassiveInvestClientsPage,
  AdminPassiveInvestCanceledClientsPage,
  AdminPassiveInvestProductSettingsPage,
  AdminPassiveInvestManageStrategyPage,
  AdminPassiveInvestOpenOrdersPage,
  AdminPassiveInvestOrderHistoryPage,
  AdminProfileSettingsPage,
  PassiveInvestYourPortfolioPage,
  PassiveInvestOpenOrdersPage,
  PassiveInvestOrderHistoryPage,
  PassiveInvestSyncYourAccountPage,
  GithubCallbackPage,
  DepositAndWithdrawalPage,
  AdminActiveInvestAnalyticsPage,
  AdminActiveInvestClientsPage,
  AdminActiveInvestProductSettingsPage,
  AdminActiveInvestCanceledClientsPage,
  // HomePage,
  // ConfigurationPage,
  // UserManagementPage,
  // MyDetailsViewPage,
  // MyOrganizationDetailsViewPage,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  const { user } = useAuthContext();

  const dispatch = useDispatch();

  return useRoutes([
    // Auth
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: 'github',
          element: (
            <GuestGuard>
              <GithubCallbackPage />
            </GuestGuard>
          ),
        },
        {
          path: 'reset-password',
          element: (
            <GuestGuard>
              <ResetPasswordPage />
            </GuestGuard>
          ),
        },
        {
          element: <HomeLayout showFooter={false} showHeader={false} />,
          children: [
            {
              path: 'register',
              element: (
                <GuestGuard>
                  <RegisterPage />
                </GuestGuard>
              ),
            },
          ],
        },
        { path: 'login-unprotected', element: <LoginPage /> },
        { path: 'register-unprotected', element: <RegisterPage /> },
        {
          element: <CompactLayout />,
          children: [
            // { path: 'reset-password', element: <ResetPasswordPage /> },
            { path: 'new-password', element: <NewPasswordPage /> },
            { path: 'send-email', element: <SendEmailPage /> },
            { path: 'send-phone', element: <SendPhonePage /> },
            { path: 'verify-email', element: <VerifyEmailPage /> },
            { path: 'verify-phone', element: <VerifyPhonePage /> },
            { path: 'verify-mfa', element: <VerifyMfaPage /> },
          ],
        },
      ],
    },
    // HOME
    {
      path: '',
      element: (
        <GuestGuard>
          <HomeLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: '/terms-and-conditions',
          element: <TermsAndConditionsPage />,
        },
        {
          path: '/elevate',
          element: <AffiliatePage />,
        },
      ],
    },

    // Dashboard
    {
      path: '',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: 'active-invest', element: <ActiveInvestPage /> },
        {
          path: 'passive-invest',
          element: <PassiveInvestPage />,
          children: [
            { path: 'portfolio', element: <PassiveInvestYourPortfolioPage /> },
            // { path: 'open-orders', element: <PassiveInvestOpenOrdersPage /> },
            { path: 'order-history', element: <PassiveInvestOrderHistoryPage /> },
            { path: 'deposit-and-withdrawal', element: <DepositAndWithdrawalPage /> },
            { path: 'sync-cex', element: <PassiveInvestSyncYourAccountPage /> },
          ],
        },
        { path: 'affiliate', element: <AffiliateDashboardPage /> },
        { path: 'lets-talk', element: <LetsTalkPage /> },
        { path: 'documentation', element: <DocumentationPage /> },
        { path: 'customer-support', element: <CustomerSupportPage /> },
        // {
        //   path: 'user',
        //   children: [
        //     { element: <Navigate to="/dashboard/user/list" replace />, index: true },
        //     { path: 'list', element: <UserListPage /> },
        //     { path: 'new', element: <UserCreatePage /> },
        //     { path: ':_id/edit', element: <UserEditPage /> },
        //     { path: ':_id/view', element: <UserAccountPage /> },
        //     { path: ':_id/reset-password', element: <UserResetPasswordPage /> },
        //   ],
        // },
        // { path: 'home', element: <Navigate to="/dashboard/user" replace /> },
        // { path: 'home', element: <HomePage /> },
      ],
    },
    {
      path: 'admin',
      element: (
        <AuthAdminGuard>
          <AdminDashboardLayout />
        </AuthAdminGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_ADMIN_LOGIN} replace />, index: true },
        { path: 'dashboard', element: <AdminDashboardPage /> },
        { path: 'active-invest', element: <AdminActiveInvestPage /> },
        {
          path: 'passive-invest',
          element: <AdminPassiveInvestPage />,
          children: [
            { path: 'analytics', element: <AdminPassiveInvestAnalyticsPage /> },
            { path: 'clients', element: <AdminPassiveInvestClientsPage /> },
            { path: 'canceled_clients', element: <AdminPassiveInvestCanceledClientsPage /> },
            { path: 'product_settings', element: <AdminPassiveInvestProductSettingsPage /> },
            { path: 'manage_strategy', element: <AdminPassiveInvestManageStrategyPage /> },
            { path: 'open_orders', element: <AdminPassiveInvestOpenOrdersPage /> },
            { path: 'order_history', element: <AdminPassiveInvestOrderHistoryPage /> },
          ],
        },
        {
          path: 'active-invest',
          element: <AdminActiveInvestPage />,
          children: [
            { path: 'analytics', element: <AdminActiveInvestAnalyticsPage /> },
            { path: 'clients', element: <AdminActiveInvestClientsPage /> },
            { path: 'canceled_clients', element: <AdminActiveInvestCanceledClientsPage /> },
            { path: 'product_settings', element: <AdminActiveInvestProductSettingsPage /> },
          ],
        },
        { path: 'affiliate', element: <AdminAffiliateDashboardPage /> },
        { path: 'clients', element: <AdminClientsPage /> },
        { path: 'payments', element: <AdminPaymentsPage /> },
        // {
        //   path: 'user',
        //   children: [
        //     { element: <Navigate to="/dashboard/user/list" replace />, index: true },
        //     { path: 'list', element: <UserListPage /> },
        //     { path: 'new', element: <UserCreatePage /> },
        //     { path: ':_id/edit', element: <UserEditPage /> },
        //     { path: ':_id/view', element: <UserAccountPage /> },
        //     { path: ':_id/reset-password', element: <UserResetPasswordPage /> },
        //   ],
        // },
        // { path: 'home', element: <Navigate to="/dashboard/user" replace /> },
        // { path: 'home', element: <HomePage /> },
      ],
    },
    {
      path: '/admin/account',
      element: (
        <AuthGuard>
          <AdminDashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_ADMIN_LOGIN} replace />, index: true },
        {
          path: 'settings',
          element: <AdminProfileSettingsPage />,
          children: [
            { path: 'profile', element: <MyProfilePage /> },
            { path: 'password', element: <PasswordPage /> },
            { path: '2fa_security', element: <MFASecurityPage /> },
            { path: 'payment', element: <PaymentPage /> },
            { path: 'my_socials', element: <MySocialsPage /> },
          ],
        },
        { path: 'subscriptions', element: <MySubscriptionsPage /> },
      ],
    },
    {
      path: 'account',
      element: (
        <AuthGuard>
          <ProfileLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'settings',
          element: <ProfileSettingsPage />,
          children: [
            { path: 'profile', element: <MyProfilePage /> },
            { path: 'password', element: <PasswordPage /> },
            { path: '2fa_security', element: <MFASecurityPage /> },
            { path: 'payment', element: <PaymentPage /> },
            { path: 'my_socials', element: <MySocialsPage /> },
          ],
        },
        { path: 'subscriptions', element: <MySubscriptionsPage /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '/', element: <Navigate to="/" replace /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
