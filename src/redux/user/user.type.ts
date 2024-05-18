export interface IUserDetails {
  email: string;
  firstName: string;
  lastName: string;
}

export interface ISubscriptionStatus {
  actInvest: boolean;
  passInvest: boolean;
  isMonthly: boolean;
  investAmount: number;
}

export interface IAffiliationStatus {
  customers: string[];
  link: string;
  totalClick: number;
  wallet: string;
}
export interface IUser {
  bcConnectType: string;
  user: IUserDetails;
  subscription: ISubscriptionStatus;
  affiliation: IAffiliationStatus;
}
