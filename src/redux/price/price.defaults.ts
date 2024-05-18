import { IPrice } from './price.type';

export const initialState: IPrice = {
  BTC: 0,
  ETH: 0,
  AVAX: 0,
  SOL: 0,

  mvrvzscore: 0,

  highAndLow: {
    high: {
      BTC: 0,
      ETH: 0,
      AVAX: 0,
      SOL: 0,
    },
    low: {
      BTC: 0,
      ETH: 0,
      AVAX: 0,
      SOL: 0,
    },
  },
  buyingPrice: {
    BTC: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    ETH: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    AVAX: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    SOL: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
  },
  sellingPrice: {
    BTC: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    ETH: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    AVAX: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    SOL: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
  },
  realPrice: {
    BTC: '',
    ETH: '',
    AVAX: '',
    SOL: '',
  },
  referencePrice: {
    buying: {
      updatedDate: 'X',
      BTC: 'X',
      ETH: 'X',
      AVAX: 'X',
      SOL: 'X',
    },
    selling: {
      updatedDate: 'X',
      BTC: 'X',
      ETH: 'X',
      AVAX: 'X',
      SOL: 'X',
    },
  },
};
