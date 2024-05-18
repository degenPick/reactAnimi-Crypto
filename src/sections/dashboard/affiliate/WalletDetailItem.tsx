import { LoadingButton } from '@mui/lab';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';

interface IWalletDetailItemProps {
  image: string;
  title: string;
}

function WalletDetailItem({ image, title }: IWalletDetailItemProps) {
  return (
    <>
      <Stack alignItems="center" gap={1} flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" alignItems="center" gap={2}>
          <Image
            alt={image}
            src={image}
            sx={{
              width: 80,
              height: 80,
              borderRadius: 2,
            }}
            disabledEffect
          />
          <Typography variant="subtitle2">{title}</Typography>
        </Stack>
        <LoadingButton
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
            color: '#fff',
            '& .MuiLoadingButton-loadingIndicator': {
              color: 'red',
            },
          }}
        >
          Get
        </LoadingButton>
      </Stack>
      <Divider
        sx={{
          mt: 1,
          mb: 1,
        }}
      />
    </>
  );
}

export default WalletDetailItem;
