import { PayloadAction } from '@reduxjs/toolkit';
import { IAffiliationStatus, ISubscriptionStatus, IUser, IUserDetails } from './user.type';

export function setBcConnectType(state: IUser, action: PayloadAction<string>) {
  state.bcConnectType = action.payload;
}

export function setUserDetails(state: IUser, action: PayloadAction<IUserDetails>) {
  state.user = action.payload;
}

export function setSubscriptionStatus(state: IUser, action: PayloadAction<ISubscriptionStatus>) {
  state.subscription = action.payload;
}

export function setAffiliationWalletAddress(state: IUser, action: PayloadAction<string>) {
  state.affiliation.wallet = action.payload;
}
export function setAffiliationLink(state: IUser, action: PayloadAction<string>) {
  state.affiliation.link = action.payload;
}

export function setAffiliationStatus(state: IUser, action: PayloadAction<IAffiliationStatus>) {
  state.affiliation = action.payload;
}
