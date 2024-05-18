// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_ADMIN_DASHBOARD = '/admin';
const ROOTS_PROFILE = '/account';
const ROOTS_ADMIN_PROFILE = '/admin/account';
const ROOTS_HOME = '/';
const TERMS_AND_CONDITIONS = '/terms-and-conditions';
const AFFILIATE = 'elevate';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  sendEmail: path(ROOTS_AUTH, '/send-email'),
  sendPhone: path(ROOTS_AUTH, '/send-phone'),
  verifyEmail: path(ROOTS_AUTH, '/verify-email'),
  verifyPhone: path(ROOTS_AUTH, '/verify-phone'),
  verifyMfa: path(ROOTS_AUTH, '/verify-mfa'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  permissionDenied: '/permission-denied',
  activeInvest: '/active-invest',
  passiveInvest: '/passive-invest/portfolio',
  affiliate: '/affiliate',
  letsTalk: '/lets-talk',
  documentation: '/documentation',
  customerSupport: '/customer-support',
  // user: {
  //   root: path(ROOTS_DASHBOARD, '/user'),
  //   new: path(ROOTS_DASHBOARD, '/user/new'),
  //   list: path(ROOTS_DASHBOARD, '/user/list'),
  //   demoView: path(ROOTS_DASHBOARD, '/user/account'),
  //   edit: (id: string) => path(ROOTS_DASHBOARD, `/user/${id}/edit`),
  //   view: (id: string) => path(ROOTS_DASHBOARD, `/user/${id}/view`),
  //   resetPassword: (id: string) => path(ROOTS_DASHBOARD, `/user/${id}/reset-password`),
  //   demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  // },
};

export const PATH_ADMIN_DASHBOARD = {
  root: ROOTS_ADMIN_DASHBOARD,
  dashboard: path(ROOTS_ADMIN_DASHBOARD, '/dashboard'),
  activeInvest: path(ROOTS_ADMIN_DASHBOARD, '/active-invest/analytics'),
  passiveInvest: path(ROOTS_ADMIN_DASHBOARD, '/passive-invest/analytics'),
  affiliate: path(ROOTS_ADMIN_DASHBOARD, '/affiliate'),
  clients: path(ROOTS_ADMIN_DASHBOARD, '/clients'),
  payments: path(ROOTS_ADMIN_DASHBOARD, '/payments'),
  // user: {
  //   root: path(ROOTS_DASHBOARD, '/user'),
  //   new: path(ROOTS_DASHBOARD, '/user/new'),
  //   list: path(ROOTS_DASHBOARD, '/user/list'),
  //   demoView: path(ROOTS_DASHBOARD, '/user/account'),
  //   edit: (id: string) => path(ROOTS_DASHBOARD, `/user/${id}/edit`),
  //   view: (id: string) => path(ROOTS_DASHBOARD, `/user/${id}/view`),
  //   resetPassword: (id: string) => path(ROOTS_DASHBOARD, `/user/${id}/reset-password`),
  //   demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  // },
};

export const PATH_PROFILE = {
  root: ROOTS_PROFILE,
  settings: path(ROOTS_PROFILE, '/settings/profile'),
  mySubscriptions: path(ROOTS_PROFILE, '/subscriptions'),
};

export const ADMIN_PATH_PROFILE = {
  root: ROOTS_ADMIN_PROFILE,
  settings: path(ROOTS_ADMIN_PROFILE, '/settings/profile'),
};

export const PATH_HOME = {
  root: ROOTS_HOME,
  termsAndConditions: TERMS_AND_CONDITIONS,
  affiliate: AFFILIATE,
};
