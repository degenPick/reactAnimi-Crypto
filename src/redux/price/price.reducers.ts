import { PayloadAction } from '@reduxjs/toolkit';
import { ICoinPrice, IMainPrice, IPrice, IRealPrice, IReferencePrice } from './price.type';

export function setBTCPrice(state: IPrice, action: PayloadAction<number>) {
  state.BTC = action.payload;
}

export function setETHPrice(state: IPrice, action: PayloadAction<number>) {
  state.ETH = action.payload;
}

export function setAVAXPrice(state: IPrice, action: PayloadAction<number>) {
  state.AVAX = action.payload;
}

export function setSOLPrice(state: IPrice, action: PayloadAction<number>) {
  state.SOL = action.payload;
}

export function setMvrvzscore(state: IPrice, action: PayloadAction<number>) {
  state.mvrvzscore = action.payload;
}

export function setHighAndLowPrice(
  state: IPrice,
  action: PayloadAction<{
    high: IMainPrice;
    low: IMainPrice;
  }>
) {
  state.highAndLow = action.payload;
}

export function setBuyingPrice(state: IPrice, action: PayloadAction<ICoinPrice>) {
  state.buyingPrice = action.payload;
}

export function setSellingPrice(state: IPrice, action: PayloadAction<ICoinPrice>) {
  state.sellingPrice = action.payload;
}

export function setRealPrice(state: IPrice, action: PayloadAction<IRealPrice>) {
  state.realPrice = action.payload;
}

export function setReferencePrice(state: IPrice, action: PayloadAction<IReferencePrice>) {
  state.referencePrice = action.payload;
}
