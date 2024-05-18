import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';

import GradientTypography from '../components/GrandientTypography';

function ActiveInvestHeader() {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'lg');
  return (
    <Stack
      mx={{ md: 8, sm: 4, xs: 2 }}
      mt={{ md: 8, sm: 4, xs: 2 }}
      px={{ md: 8, sm: 4, xs: 2 }}
      py={2}
      sx={{ backgroundColor: '#171F44', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
      id="actinvest"
    >
      <Stack direction={isDesktop ? 'row' : 'column'} justifyContent="left" alignItems="center">
        <Stack direction="row" justifyContent="center" sx={{ width: { xs: '90%', lg: '320px' } }}>
          <GradientTypography
            fontSize={40}
            startColor="#4481EB"
            lastColor="#04BEFE"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: 30,
                md: 40,
              },
            }}
          >
            {LL.active_invest_full()}
          </GradientTypography>
        </Stack>

        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: 16,
              md: 24,
            },
          }}
        >
          {LL.active_content_1()}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ActiveInvestHeader;
