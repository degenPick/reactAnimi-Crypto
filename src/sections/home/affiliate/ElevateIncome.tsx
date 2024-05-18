import { Box, Button, Stack, Typography } from '@mui/material';
import { useI18nContext } from '../../../i18n/i18n-react';
import Affiliate from '../../../assets/images/affiliate.png';
import useResponsive from '../../../hooks/useResponsive';

const ElevateIncome = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');
  return (
    <Box color="white" mt={isDesktop ? 8 : 2}>
      <Stack
        direction={isDesktop ? 'row' : 'column'}
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack width={isDesktop ? '40%' : '80%'}>
          <Typography variant="h2" fontWeight={700}>
            {LL.elevate_income_title()}
          </Typography>
          <Typography variant="h6" fontWeight={400} my={2}>
            {LL.elevate_income_text()}
          </Typography>
          <Stack my={2}>
            <Button
              sx={{
                background: 'linear-gradient(to right, #4481EB, #04BEFE)',
                py: 1,
                px: 3,
                color: '#fff',
                maxWidth: 320,
              }}
              onClick={() => {
                // window.open('https://re7fz.app.link/hEbxUJ0VTIb');
              }}
            >
              {LL.create_refer_link()}
            </Button>
          </Stack>
        </Stack>
        <Stack width={isDesktop ? '40%' : '80%'}>
          <Box component="img" src={Affiliate} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ElevateIncome;
