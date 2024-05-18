import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';

import GradientTypography from '../components/GrandientTypography';

interface IPassiveInvestHeader {
  setJoinUsHeaderHeight: Function;
}
function JoinUsHeader({ setJoinUsHeaderHeight }: IPassiveInvestHeader) {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'lg');
  const header = useRef<HTMLElement>();

  useEffect(() => {
    setTimeout(() => {
      setJoinUsHeaderHeight(header.current?.getBoundingClientRect().height ?? 0);
    }, 200);
  }, [setJoinUsHeaderHeight]);
  return (
    <Box
      mx={{ md: 8, sm: 4, xs: 2 }}
      mt={{ md: 8, sm: 4, xs: 2 }}
      px={{ md: 8, sm: 4, xs: 2 }}
      py={2}
      sx={{ backgroundColor: '#171F44', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
      ref={header}
      id="joinus"
    >
      <Stack direction={isDesktop ? 'row' : 'column'} justifyContent="left" alignItems="center">
        <Stack direction="row" justifyContent="center" sx={{ width: { xs: '90%', lg: '320px' } }}>
          <GradientTypography
            fontSize={40}
            startColor="#EA485C"
            lastColor="#ED8A4C"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: 30,
                md: 40,
              },
            }}
          >
            {LL.join_us_lower_font()}
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
          {LL.join_us_subtitle()}
        </Typography>
      </Stack>
    </Box>
  );
}

export default JoinUsHeader;
