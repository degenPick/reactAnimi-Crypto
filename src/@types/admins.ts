export type IAdminDetail = {
  _id: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  mfaMethod?: string;
  organization: IOrganizationDetail;
};

export type IOrganizationDetail = {
  _Id: string;
  organizationName: string;
  abn?: number;
  organizationType: string;
  organizationPhoneNumber?: string;
  organizationAddress?: string;
  organizationCountry: string;
  referenceId: string;
  numberOfUsers?: number;
  billingContactName?: string;
  billingEmail?: string;
  billingAddress?: string;
  billingPhone?: string;
};

export type IMyDetail = {
  _id: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  country?: string;
  role: string;
  mfaMethod: string;
  twofaEnabled?: boolean;
  organization: IOrganizationDetail;
  numberOfUsers?: number;
  isAdmin?: boolean;
  subscription?: {
    isMonthly: boolean;
    actInvest: boolean;
    passInvest: boolean;
    investAmount: number;
  };
};

export type IUserAccountChangePassword = {
  newPassword: string;
  confirmNewPassword: string;
};

export type IAdminsDialogState = {
  isLoading: boolean;
  error: Error | string | null;
  adminUsers: IAdminDetail[];
  newDialogOpen: boolean;
  editDialogOpen: boolean;
  deleteDialogOpen: boolean;
  selectedAdminUser: IAdminDetail | null;
};

export type ICreateAdmin = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  mfaMethod: string;
  organization: string;
};

export type IUpdateAdmin = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mfaMethod?: string;
};
