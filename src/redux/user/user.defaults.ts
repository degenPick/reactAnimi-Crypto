import { IUser } from './user.type';

export const initialState: IUser = {
  bcConnectType: '',
  user: {
    email: '',
    firstName: '',
    lastName: '',
  },
  subscription: {
    actInvest: false,
    passInvest: false,
    isMonthly: false,
    investAmount: 0,
  },
  affiliation: {
    customers: [],
    link: '',
    totalClick: 0,
    wallet: '',
  },
};
