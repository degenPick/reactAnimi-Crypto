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
import Iconify from 'src/components/iconify';
import { useDispatch, useSelector } from 'src/redux/store';
import { actions, selectors } from 'src/redux/user/user.slice';
import WalletItem from './WalletItem';
import WalletDetailItem from './WalletDetailItem';

export interface ConnectWalletDetailDialogProps extends Omit<DialogProps, 'title'> {
  open: boolean;
  onClose: VoidFunction;
}

export interface IConnectWalletProps {
  address: string;
}

export default function ConnectWalletDetailDialog({
  open,
  onClose,
  ...other
}: ConnectWalletDetailDialogProps) {
  const [isLoading, setLoading] = useState<boolean>(false);

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
      maxWidth="md"
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
          width: 520,
        },
      }}
    >
      <DialogContent sx={{ p: 2 }}>
        <Stack alignItems="center" gap={2}>
          <Stack
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 0, px: 2, mt: { md: 0, xs: 2 } }}
              gap={1}
            >
              <IconButton
                sx={{
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#ffffffD9',
                  },
                }}
                onClick={() => onClose()}
              >
                <Iconify
                  icon="fluent:arrow-left-12-filled"
                  width={16}
                  sx={{
                    color: 'black',
                  }}
                />
              </IconButton>

              <Typography variant="subtitle2">Back</Typography>
            </Stack>

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
            <Stack gap={1}>
              <WalletDetailItem image="/assets/connect_wallet/rabby.png" title="Rabby" />
              <WalletDetailItem image="/assets/connect_wallet/metamask.png" title="MetaMask" />
              <WalletDetailItem
                image="/assets/connect_wallet/walletconnect.png"
                title="Wallet Connect"
              />
              <WalletDetailItem image="/assets/connect_wallet/coinbase.png" title="Coinbase" />
              <WalletDetailItem image="/assets/connect_wallet/okxwallet.png" title="OKX Wallet" />
              <WalletDetailItem
                image="/assets/connect_wallet/trustwallet.png"
                title="Trust Wallet"
              />
              <WalletDetailItem image="/assets/connect_wallet/ledgerlive.png" title="Ledger Live" />
            </Stack>

            <Typography
              variant="h5"
              sx={{
                mt: 1,
              }}
            >
              Not what you&apos;re looking for?
            </Typography>
            <Divider sx={{ mt: 1 }} />

            <Typography variant="subtitle2" color="grey.600">
              Select a wallet on the main screen to get started with a different wallet provider.
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
