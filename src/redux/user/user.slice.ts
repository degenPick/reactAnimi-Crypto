import { createSlice } from '@reduxjs/toolkit';
import { IAffiliationStatus, ISubscriptionStatus, IUser, IUserDetails } from './user.type';
import { initialState } from './user.defaults';
// import { setUser } from "@src/redux/user/user.reducers";
import {
  setBcConnectType,
  setUserDetails,
  setSubscriptionStatus,
  setAffiliationWalletAddress,
  setAffiliationStatus,
  setAffiliationLink,
} from './user.reducers';

export const userSliceName = 'user';

export const userSlice = createSlice({
  name: userSliceName,
  initialState,
  reducers: {
    setBcConnectType,
    setUserDetails,
    setSubscriptionStatus,
    setAffiliationWalletAddress,
    setAffiliationStatus,
    setAffiliationLink,
  },
});

type State<IPrice> = Record<typeof userSliceName, IPrice>;

export const { reducer, actions } = userSlice;
export const selectors = {
  bcConnectType: (state: State<IUser>): string => state[userSliceName].bcConnectType,
  user: (state: State<IUser>): IUserDetails => state[userSliceName].user,
  subscription: (state: State<IUser>): ISubscriptionStatus => state[userSliceName].subscription,
  affiliation: (state: State<IUser>): IAffiliationStatus => state[userSliceName].affiliation,
};
