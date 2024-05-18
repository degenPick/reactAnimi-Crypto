import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axiosInstance from 'src/utils/axios';
import { useI18nContext } from '../../../../../i18n/i18n-react';
import useResponsive from '../../../../../hooks/useResponsive';
import ActiveInvestIcon from '../../../assets/images/active-invest-color.png';
import PassiveInvestIcon from '../../../assets/images/passive-invest-color.png';
import AffiliateIcon from '../../../assets/images/affiliate-color.png';

interface IYourPortfolioHeader {
  invested: number;
  capital: number;
  withdrawal: number;
}

const YourPortfolioHeader = ({ invested, capital, withdrawal }: IYourPortfolioHeader) => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 2, width: '100%' }}
    >
      <Stack
        sx={{ borderRight: 1, borderColor: '#dbdaf41a' }}
        flex={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" ml={1} color="grey.600">
            You Invested
          </Typography>
        </Stack>

        <Typography variant="h6" color="#05BFFE" sx={{ mr: 4 }}>
          {invested} $
        </Typography>
      </Stack>
      <Stack
        flex={1}
        direction="row"
        justifyContent="space-between"
        sx={{ borderRight: 1, borderColor: '#dbdaf41a' }}
        alignItems="center"
      >
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" ml={4} color="grey.600">
            Your Capital is Now
          </Typography>
        </Stack>
        <Typography variant="h6" color="white" sx={{ mr: 4 }}>
          {capital.toFixed(2)} $
        </Typography>
      </Stack>
      <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" ml={4} color="grey.600">
            Profit & Loss
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
      </Stack>
    </Stack>
  );
};

export default YourPortfolioHeader;
