export interface IMainPrice {
  BTC: number;
  ETH: number;
  AVAX: number;
  SOL: number;
}

export interface IRealPrice {
  BTC: string;
  ETH: string;
  AVAX: string;
  SOL: string;
}

export interface ICoinPrice {
  BTC: {
    first: string;
    second: string;
    third: string;
  };
  ETH: {
    first: string;
    second: string;
    third: string;
  };
  AVAX: {
    first: string;
    second: string;
    third: string;
  };
  SOL: {
    first: string;
    second: string;
    third: string;
  };
}

export interface IReferencePrice {
  buying: {
    updatedDate: string;
    BTC: string;
    ETH: string;
    AVAX: string;
    SOL: string;
  };
  selling: {
    updatedDate: string;
    BTC: string;
    ETH: string;
    AVAX: string;
    SOL: string;
  };
}

export interface IPrice {
  BTC: number;
  ETH: number;
  AVAX: number;
  SOL: number;

  mvrvzscore: number;

  highAndLow: {
    high: IMainPrice;
    low: IMainPrice;
  };
  buyingPrice: ICoinPrice;
  sellingPrice: ICoinPrice;
  realPrice: IRealPrice;
  referencePrice: IReferencePrice;
}
