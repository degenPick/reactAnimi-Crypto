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
import { useDispatch } from 'src/redux/store';
import { actions } from 'src/redux/user/user.slice';

export interface BinanceInputApiKeyDialogProps extends Omit<DialogProps, 'title'> {
  open: boolean;
  onClose: VoidFunction;
}

export interface IBinanceAPIKey {
  key: string;
  secret: string;
}

export default function BinanceInputApiKeyDialog({
  open,
  onClose,
  ...other
}: BinanceInputApiKeyDialogProps) {
  const [isLoading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const sendApiKey = async (data: IBinanceAPIKey) => {
    try {
      setLoading(true);

      await axiosInstance.post('/api/v1/users/update-binance-key', {
        key: data.key,
        secret: data.secret,
      });
      dispatch(actions.setBcConnectType('binance'));
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
      maxWidth="sm"
      open={open}
      onClose={onClose}
      {...other}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());

          sendApiKey({
            key: formJson.apiKey,
            secret: formJson.apiSecret,
          });
        },
        style: {
          background: '#202540',
          boxShadow: 'none',
          borderRadius: 16,
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
          <Image src="/assets/passive_invest/input_key.svg" sx={{ width: 310, height: 300 }} />
          <Stack
            alignSelf="flex-start"
            gap={1}
            sx={{
              background: '#141A36',
              p: 2,
              borderRadius: 1,
              width: '100%',
            }}
          >
            <Typography variant="h5">Sync Your Account</Typography>

            <Divider sx={{ mt: 1 }} />

            <Typography variant="subtitle2" color="grey.600">
              Check our documentation and enter your API key here
            </Typography>

            <TextField
              autoFocus
              required
              margin="dense"
              id="apiKey"
              name="apiKey"
              label="Key"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="apiSecret"
              name="apiSecret"
              label="Secret"
              fullWidth
              variant="standard"
            />
          </Stack>

          <Stack alignItems="center">
            <LoadingButton
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
              loading={isLoading}
              sx={{
                mt: 2,
                background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
                color: '#fff',
              }}
            >
              Sync Now
            </LoadingButton>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
