import React, { useState } from 'react';
import {
  Dialog,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  Box,
  DialogProps,
  Stack,
  Divider,
  TextField,
  IconButton,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { LoadingButton } from '@mui/lab';

import Image from 'src/components/image';
import axiosInstance from 'src/utils/axios';
import { useDispatch, useSelector } from 'src/redux/store';
import { actions, selectors } from 'src/redux/user/user.slice';
import WalletItem from './WalletItem';
import ConnectWalletDetailDialog from './ConnectWalletDetailDialog';

export interface ConnectWalletDialogProps extends Omit<DialogProps, 'title'> {
  open: boolean;
  onClose: VoidFunction;
}

export interface IConnectWalletProps {
  address: string;
}

export default function ConnectWalletDialog({ open, onClose, ...other }: ConnectWalletDialogProps) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showConnectWalletDetailDlg, setShowConnectWalletDetailDlg] = useState<boolean>(false);

  const dispatch = useDispatch();

  const affiliation = useSelector(selectors.affiliation);

  const sendWalletAddress = async (data: IConnectWalletProps) => {
    try {
      setLoading(true);

      await axiosInstance.post('/api/v1/users/update-wallet-address', {
        address: data.address,
      });
      dispatch(actions.setAffiliationWalletAddress(data.address));
      onClose();
    } catch (error) {
      console.log('error ==> ', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={open}
      onClose={onClose}
      {...other}
      PaperProps={{
        // component: 'form',
        // onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //   event.preventDefault();
        //   const formData = new FormData(event.currentTarget);
        //   const formJson = Object.fromEntries((formData as any).entries());

        //   sendWalletAddress({
        //     address: formJson.address,
        //   });
        // },
        style: {
          background: '#202540',
          boxShadow: 'none',
          borderRadius: 16,
          width: 1080,
        },
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        <Stack alignItems="center" gap={2}>
          <Stack
            alignItems="center"
            flexDirection="row"
            justifyContent="flex-end"
            sx={{ width: '100%' }}
          >
            <IconButton onClick={onClose}>
              <CancelIcon
                sx={{
                  color: 'rgba(255, 255, 255, 0.2)',
                }}
              />
            </IconButton>
          </Stack>
          <Stack
            alignSelf="flex-start"
            gap={1}
            sx={{
              background: '#141A36',
              p: 4,
              borderRadius: 1,
              width: '100%',
            }}
          >
            <Typography variant="h5">Connect a Wallet</Typography>

            <Divider sx={{ mt: 1 }} />
            <Stack flexDirection="row" gap={1} justifyContent="space-around" flexWrap="wrap">
              <WalletItem image="/assets/connect_wallet/rabby.png" title="Rabby" />
              <WalletItem image="/assets/connect_wallet/metamask.png" title="MetaMask" />
              <WalletItem image="/assets/connect_wallet/walletconnect.png" title="Wallet Connect" />
              <WalletItem image="/assets/connect_wallet/coinbase.png" title="Coinbase" />
              <WalletItem image="/assets/connect_wallet/okxwallet.png" title="OKX Wallet" />
              <WalletItem image="/assets/connect_wallet/trustwallet.png" title="Trust Wallet" />
              <WalletItem image="/assets/connect_wallet/ledgerlive.png" title="Ledger Live" />
            </Stack>

            <Typography
              variant="h5"
              sx={{
                mt: 1,
              }}
            >
              What is a wallet?
            </Typography>
            <Divider sx={{ mt: 1 }} />

            <Typography variant="subtitle2" color="grey.600">
              A wallet is used to send, receive, store, and display digital assets. It&apos;s also a
              new way to log in, without needing to create new accounts and passwords on every
              website.
            </Typography>
          </Stack>

          <Stack alignItems="center" flexDirection="row" gap={2}>
            <LoadingButton
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
              loading={isLoading}
              onClick={() => setShowConnectWalletDetailDlg(true)}
              sx={{
                mt: 2,
                background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
                color: '#fff',
                '& .MuiLoadingButton-loadingIndicator': {
                  color: 'red',
                },
              }}
            >
              Get a Wallet
            </LoadingButton>

            <LoadingButton
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
              loading={isLoading}
              sx={{
                mt: 2,
                background: 'linear-gradient(to right, #141A36, #141A36)',
                color: '#fff',
                '& .MuiLoadingButton-loadingIndicator': {
                  color: 'red',
                },
              }}
            >
              Learn More
            </LoadingButton>
          </Stack>
        </Stack>
      </DialogContent>

      <ConnectWalletDetailDialog
        open={showConnectWalletDetailDlg}
        onClose={() => setShowConnectWalletDetailDlg(false)}
      />
    </Dialog>
  );
}
