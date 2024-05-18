import { LoadingButton } from '@mui/lab';
import { Box, Button, Divider, Grid, InputAdornment, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Label from 'src/components/label';
import SvgColor from 'src/components/svg-color';
import DateRangePicker, { useDateRangePicker } from 'src/components/date-range-picker';
import { fDate } from 'src/utils/formatTime';
import { CustomTextField } from 'src/components/custom-input';
import Iconify from 'src/components/iconify';
import SubLoadingScreen from 'src/components/sub-loading-screen/SubLoadingScreen';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import axiosInstance from 'src/utils/axios';
import { useDispatch, useSelector } from 'src/redux/store';
import { actions, selectors } from 'src/redux/user/user.slice';
import { truncateString } from 'src/utils/common';
import TwoTextItem from './TwoTextItem';
import AffiliateTable from './AffiliateTable';
import ConnectWallet from './ConnectWallet';
import GenerateAffiliateLink from './GenerateAffiliateLink';
import ConnectWalletDialog from './ConnectWalletDialog';

interface IAffiliationProps {
  customers: string[];
  link: string;
  totalClick: number;
  wallet: string;
}

function Content() {
  const pickerInput = useDateRangePicker(new Date(), new Date());
  const [isLoading, setLoading] = useState<boolean>(true);
  const [showConnectWalletDlg, setShowConnectWalletDlg] = useState<boolean>(false);

  const affiliation = useSelector(selectors.affiliation);
  const dispatch = useDispatch();

  useLegacyEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.post('api/v1/users/affiliation');

        const data = response.data;
        if (data) {
          const affiliationData = data.affiliation;

          dispatch(actions.setAffiliationStatus(affiliationData));
        }
      } catch (error) {
        console.log('error ==> ', error);
      }
      setLoading(false);
    };

    fetch();
  }, [dispatch]);

  if (isLoading) return <SubLoadingScreen />;

  if (affiliation.wallet === '') return <ConnectWallet />;
  if (affiliation.link === '') return <GenerateAffiliateLink />;

  return (
    <Box mt={4} sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2 }}>
      <Stack
        sx={{
          color: 'grey.200',
          backgroundColor: '#0F1531',
          borderRadius: 1,
          px: 4,
          py: 2,
          gap: 2,
        }}
      >
        <Typography variant="subtitle2">
          Dear Chris, congratulations on joining Scale-In! Your journey to affiliate success begins
          here. The more people you introduce to our exceptional services, the more you earn.
          Let&apos;s together transform your connections into a thriving source of income.
        </Typography>
      </Stack>

      <Box
        mt={2}
        sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, px: 4, py: 2 }}
      >
        <Grid container>
          <Grid item xs={12} md={10} lg={10}>
            <Stack direction="column" gap={2}>
              <Typography variant="subtitle2">
                Your affiliate commissions are calculated based on the payments we have received
                from your referrals. They are directly sent in USDC to your wallet on the 1st of
                each month.
              </Typography>
              <div>
                <Label sx={{ backgroundColor: '#202540', color: 'white' }}>
                  The blockchain used is Binance Smart Chain (BEP20 Network).
                </Label>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <Stack direction="column" gap={1}>
              <LoadingButton
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  background: 'linear-gradient(to right, #4481EB , #04BEFE)',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
                onClick={() => setShowConnectWalletDlg(true)}
              >
                <SvgColor src="/assets/binance-smart-chain.svg" color="#F0B90B" />
                {truncateString(affiliation.wallet, 18)}
                <Box sx={{ width: 10, height: 10, borderRadius: 20, backgroundColor: '#199B59' }} />
              </LoadingButton>
              <Stack alignItems="center" justifyContent="center">
                <Button onClick={() => setShowConnectWalletDlg(true)}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'grey.600', textDecoration: 'underline' }}
                  >
                    Update my wallet address
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }} alignItems="stretch">
          <Grid item xs={12} md={6} lg={6}>
            <TwoTextItem first="Total click on your affiliate link" second="40" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TwoTextItem first="Your affiliation link is" second={affiliation.link} showCopyBtn />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <TwoTextItem first="Total Sales" second="500$" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <TwoTextItem first="Active Referrals" second="400" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <TwoTextItem first="Affiliate 50 more customers to earn 5% commission more!" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <TwoTextItem first="Total Commission Earned" second="1000$" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <TwoTextItem first="Next Commission You will Earn" second="400$" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <TwoTextItem first="Next Commission Payment Date" second="01/04/2024" />
          </Grid>
        </Grid>
      </Box>
      <Box
        mt={2}
        sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, px: 4, py: 2 }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box />
          <Stack direction="row" gap={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#202540',
                borderRadius: 1,
                p: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={pickerInput.onOpen}
            >
              <Typography variant="subtitle2">
                {fDate(pickerInput.startDate)} - {fDate(pickerInput.endDate)}
              </Typography>
            </Button>
            <DateRangePicker
              open={pickerInput.open}
              startDate={pickerInput.startDate}
              endDate={pickerInput.endDate}
              onChangeStartDate={pickerInput.onChangeStartDate}
              onChangeEndDate={pickerInput.onChangeEndDate}
              onClose={pickerInput.onClose}
              isError={pickerInput.isError}
            />

            <CustomTextField
              width={220}
              placeholder="Search..."
              sx={{ backgroundColor: '#202540', color: 'grey.200' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <AffiliateTable />
      </Box>
      <ConnectWalletDialog
        open={showConnectWalletDlg}
        onClose={() => setShowConnectWalletDlg(false)}
      />
    </Box>
  );
}

export default Content;
