import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axiosInstance from 'src/utils/axios';
import useLegacyEffect from 'src/hooks/useLegacyEffect';

import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';
import ActiveInvestIcon from '../../../assets/images/active-invest-color.png';
import PassiveInvestIcon from '../../../assets/images/passive-invest-color.png';
import AffiliateIcon from '../../../assets/images/affiliate-color.png';

const EarningDisplayTotal = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');
  const [invested, setInvested] = useState<number>(0);
  const [capital, setCapital] = useState<number>(0);
  const [withdrawal, setWithdrawal] = useState<number>(0);

  useLegacyEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.post('api/v1/users/your-portfolio');

        const data = response.data;
        setInvested(data.invested);
        setCapital(data.capital);

        const totalWidrawal = data.withdrawals
          .map((item: any) => item.amount)
          .reduce((total: number, currentAmount: number) => total + currentAmount, 0);

        setWithdrawal(totalWidrawal);
      } catch (error) {
        console.log('error ==> ', error);
      }
    };

    fetch();
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={2}
      sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2 }}
    >
      <Stack
        sx={{ borderRight: 1, borderColor: '#dbdaf41a' }}
        flex={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center">
          <Box component="img" src={ActiveInvestIcon} />
          <Typography variant="subtitle2" ml={2}>
            Private Club Place
          </Typography>
        </Stack>

        <Typography variant="h6">X/100</Typography>
        <Box />
      </Stack>
      <Stack
        flex={1}
        direction="row"
        justifyContent="space-between"
        sx={{ borderRight: 1, borderColor: '#dbdaf41a' }}
        alignItems="center"
      >
        <Box />
        <Stack direction="row" alignItems="center">
          <Box component="img" src={PassiveInvestIcon} />
          <Typography variant="subtitle2" ml={2}>
            Quant Invest P&L
          </Typography>
        </Stack>
        <Typography
          variant="h6"
          color={capital + withdrawal >= invested ? '#10CB6C' : 'red'}
          sx={{ mr: 4 }}
        >
          {capital + withdrawal >= invested ? '+' : '-'}
          {Math.abs(capital + withdrawal - invested).toFixed(2)} $
        </Typography>
        <Box />
      </Stack>
      <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center">
        <Box />
        <Stack direction="row" alignItems="center">
          <Box component="img" src={AffiliateIcon} />
          <Typography variant="subtitle2" ml={2}>
            Affiliate Earnings
          </Typography>
        </Stack>
        <Typography variant="h6">500 $</Typography>
        <Box />
      </Stack>
    </Stack>
  );
};

export default EarningDisplayTotal;
