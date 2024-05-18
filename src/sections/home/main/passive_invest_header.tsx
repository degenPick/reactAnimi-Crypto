import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';

import GradientTypography from '../components/GrandientTypography';

interface IPassiveInvestHeader {
  setPassInvHeaderHeight: Function;
}
function PassiveInvestHeader({ setPassInvHeaderHeight }: IPassiveInvestHeader) {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'lg');
  const header = useRef<HTMLElement>();

  useEffect(() => {
    setTimeout(() => {
      setPassInvHeaderHeight(header.current?.getBoundingClientRect().height ?? 0);
    }, 200);
  }, [setPassInvHeaderHeight]);
  return (
    <Box
      mx={{ md: 8, sm: 4, xs: 2 }}
      mt={{ md: 8, sm: 4, xs: 2 }}
      px={{ md: 8, sm: 4, xs: 2 }}
      py={2}
      sx={{ backgroundColor: '#272E4F', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
      zIndex={2000}
      ref={header}
      id="passinvest"
    >
      <Stack direction={isDesktop ? 'row' : 'column'} justifyContent="left" alignItems="center">
        <Stack direction="row" justifyContent="center" sx={{ width: { xs: '90%', lg: '320px' } }}>
          <GradientTypography
            fontSize={40}
            startColor="#C0037B"
            lastColor="#FF1BCA"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: 30,
                md: 40,
              },
            }}
          >
            {LL.passive_invest_full()}
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
          {LL.pass_invest_subtitle()}
        </Typography>
      </Stack>
    </Box>
  );
}

export default PassiveInvestHeader;
