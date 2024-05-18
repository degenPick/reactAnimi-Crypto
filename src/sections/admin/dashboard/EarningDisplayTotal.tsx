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

  useLegacyEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.post('api/v1/users/your-portfolio');

        const data = response.data;
        setInvested(data.invested);
        setCapital(data.capital);
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
            Private Club Clients
          </Typography>
        </Stack>

        <Typography variant="h6" sx={{ mr: 4 }}>
          63
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
          <Box component="img" src={PassiveInvestIcon} sx={{ ml: 2 }} />
          <Typography variant="subtitle2" sx={{ ml: 4 }}>
            Quant Invest Clients
          </Typography>
        </Stack>
        <Typography variant="h6" sx={{ mr: 4 }}>
          1140
        </Typography>
      </Stack>
      <Stack flex={1} direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Box component="img" src={AffiliateIcon} sx={{ ml: 2 }} />
          <Typography variant="subtitle2" ml={4}>
            Total Referrals
          </Typography>
        </Stack>
        <Typography variant="h6" sx={{ mr: 4 }}>
          248
        </Typography>
      </Stack>
    </Stack>
  );
};

export default EarningDisplayTotal;
