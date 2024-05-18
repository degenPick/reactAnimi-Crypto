import { Box, Typography, Stack, Button } from '@mui/material';
import { useI18nContext } from '../../../i18n/i18n-react';
import ScaleInUser from '../../../assets/images/scale-in-user.png';
import NonScaleInUser from '../../../assets/images/none-scale-in-user.png';
import ScaleInLogoSmall from '../../../assets/images/scale-in-logo-small.png';
import BlueCheck from '../../../assets/images/blue-check.png';
import useResponsive from '../../../hooks/useResponsive';

const CreateCustomer = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'md');

  return (
    <Stack m={{ md: 8, sm: 4, xs: 2 }} p={{ md: 8, sm: 4, xs: 2 }} justifyContent="center">
      <Typography variant="h4" textAlign="center">
        {LL.turn_connection()}
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        <Stack
          justifyContent="center"
          alignItems="left"
          my={3}
          mx={1}
          p={3}
          sx={{ backgroundColor: '#171F44', borderRadius: 1, width: isDesktop ? '45%' : '90%' }}
        >
          <Box component="img" width="56px" height="56px" src={ScaleInUser} />
          <Stack direction="row" alignItems="center" sx={{ mt: 1 }} flexWrap="wrap">
            <Typography variant="h4" ml={1} mb="3px">
              Scale in
            </Typography>
            <Typography variant="h4" fontWeight={400} ml={1} mb="3px">
              {LL.customers()}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="left" my={2}>
            <Box component="img" width="18px" height="18px" src={BlueCheck} />
            <Typography variant="body1" ml={2}>
              {LL.unlock()}
              <Box component="span" fontWeight={700}>
                {' '}
                15%{' '}
              </Box>
              {LL.commission()}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="left" mb={2}>
            <Box component="img" width="18px" height="18px" src={BlueCheck} />
            <Typography variant="body1" ml={2}>
              <Box component="span" fontWeight={700}>
                {LL.supercharge()}{' '}
              </Box>
              {LL.refer_over()}
              <Box component="span" fontWeight={700}>
                {' '}
                50{' '}
              </Box>
              {LL.active_member_watch()}
              <Box component="span" fontWeight={700}>
                {' '}
                20%
              </Box>
            </Typography>
          </Stack>
          <Button
            sx={{
              background: 'linear-gradient(to right, #4481EB, #04BEFE)',
              py: 1,
              px: 3,
              color: '#fff',
              maxWidth: 160,
            }}
          >
            {LL.create()}
          </Button>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="left"
          my={3}
          mx={1}
          p={3}
          sx={{ backgroundColor: '#171F44', borderRadius: 1, width: isDesktop ? '45%' : '90%' }}
        >
          <Box component="img" width="56px" height="56px" src={NonScaleInUser} />
          <Stack direction="row" alignItems="center" sx={{ mt: 1 }} flexWrap="wrap">
            <Typography variant="h4" mb="3px" fontWeight={400}>
              Non
            </Typography>
            <Typography variant="h4" mb="3px" ml={1}>
              Scale in
            </Typography>
            <Typography variant="h4" mb="3px" ml={1} fontWeight={400}>
              {LL.customers()}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="left" my={2}>
            <Box component="img" width="18px" height="18px" src={BlueCheck} />
            <Typography variant="body1" ml={2}>
              {LL.unlock()}
              <Box component="span" fontWeight={700}>
                {' '}
                10%{' '}
              </Box>
              {LL.commission()}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="left" mb={2}>
            <Box component="img" width="18px" height="18px" src={BlueCheck} />
            <Typography variant="body1" ml={2}>
              <Box component="span" fontWeight={700}>
                {LL.supercharge()}{' '}
              </Box>
              {LL.refer_over()}
              <Box component="span" fontWeight={700}>
                {' '}
                50{' '}
              </Box>
              {LL.active_member_watch()}
              <Box component="span" fontWeight={700}>
                {' '}
                15%
              </Box>
            </Typography>
          </Stack>
          <Button
            sx={{
              background: 'linear-gradient(to right, #4481EB, #04BEFE)',
              py: 1,
              px: 3,
              color: '#fff',
              maxWidth: 160,
            }}
          >
            {LL.create()}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CreateCustomer;
