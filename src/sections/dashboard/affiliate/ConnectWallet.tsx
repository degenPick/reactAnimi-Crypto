import { LoadingButton } from '@mui/lab';
import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Label from 'src/components/label';
import ConnectWalletDialog from './ConnectWalletDialog';

function ConnectWallet() {
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [showConnectWalletDlg, setShowConnectWalletDlg] = useState<boolean>(false);

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
          Congratulations on joining Scale-In! Your journey to affiliate success begins here. The
          more people you introduce to our exceptional services, the more you earn. Let&apos;s
          together transform your connections into a thriving source of income.
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
                from your referrals. They are directly sent in <b>USDC</b> to your wallet on the 1st
                of each month.
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
                onClick={() => setShowConnectWalletDlg(true)}
                sx={{
                  background: 'linear-gradient(to right, #4481EB , #04BEFE)',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                Connect a Wallet
              </LoadingButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <LoadingButton
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
              disabled
              sx={{
                background: 'linear-gradient(to right, #EA485C , #ED8A4C)',
                color: '#fff',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 2,

                opacity: 0.6,
                '&.MuiLoadingButton-root': {
                  '&.Mui-disabled': {
                    color: '#fff',
                  },
                },
              }}
            >
              Please connect your wallet first
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>

      <ConnectWalletDialog
        open={showConnectWalletDlg}
        onClose={() => setShowConnectWalletDlg(false)}
      />
    </Box>
  );
}

export default ConnectWallet;
