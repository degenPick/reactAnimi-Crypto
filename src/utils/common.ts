export const priceForPassInvest = (invest: number) => {
  let percent = 0.85;
  if (invest <= 5000) percent = 0.85;
  else if (invest <= 10000) percent = 0.75;
  else if (invest <= 20000) percent = 0.65;
  else if (invest <= 50000) percent = 0.55;
  else if (invest <= 100000) percent = 0.45;
  else if (invest <= 200000) percent = 0.35;
  else if (invest <= 500000) percent = 0.25;

  return (invest * percent) / 100;
};

export const truncateString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }

  const startLength = Math.ceil((maxLength - 3) / 2);
  const endLength = Math.floor((maxLength - 3) / 2);

  return `${str.slice(0, startLength)}...${str.slice(str.length - endLength)}`;
};
