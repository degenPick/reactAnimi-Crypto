import { createSlice } from '@reduxjs/toolkit';
import { ICoinPrice, IMainPrice, IPrice, IRealPrice, IReferencePrice } from './price.type';
import { initialState } from './price.defaults';
// import { setUser } from "@src/redux/user/user.reducers";
import {
  setBTCPrice,
  setETHPrice,
  setAVAXPrice,
  setSOLPrice,
  setHighAndLowPrice,
  setMvrvzscore,
  setSellingPrice,
  setBuyingPrice,
  setRealPrice,
  setReferencePrice,
} from './price.reducers';

export const priceSliceName = 'price';

export const priceSlice = createSlice({
  name: priceSliceName,
  initialState,
  reducers: {
    setBTCPrice,
    setETHPrice,
    setAVAXPrice,
    setSOLPrice,
    setHighAndLowPrice,
    setMvrvzscore,
    setBuyingPrice,
    setSellingPrice,
    setRealPrice,
    setReferencePrice,
  },
});

type State<IPrice> = Record<typeof priceSliceName, IPrice>;

export const { reducer, actions } = priceSlice;
export const selectors = {
  BTC: (state: State<IPrice>): number => state[priceSliceName].BTC,
  ETH: (state: State<IPrice>): number => state[priceSliceName].ETH,
  AVAX: (state: State<IPrice>): number => state[priceSliceName].AVAX,
  SOL: (state: State<IPrice>): number => state[priceSliceName].SOL,
  LOW: (state: State<IPrice>): IMainPrice => state[priceSliceName].highAndLow.low,
  HIGH: (state: State<IPrice>): IMainPrice => state[priceSliceName].highAndLow.high,
  mvrvzscore: (state: State<IPrice>): number => state[priceSliceName].mvrvzscore,
  buyingPrice: (state: State<IPrice>): ICoinPrice => state[priceSliceName].buyingPrice,
  sellingPrice: (state: State<IPrice>): ICoinPrice => state[priceSliceName].sellingPrice,
  realPrice: (state: State<IPrice>): IRealPrice => state[priceSliceName].realPrice,
  referencePrice: (state: State<IPrice>): IReferencePrice => state[priceSliceName].referencePrice,
};
