import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';

interface IWalletItemProps {
  image: string;
  title: string;
}

function WalletItem({ image, title }: IWalletItemProps) {
  return (
    <Stack
      alignItems="center"
      gap={1}
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: '#0F1532',
      }}
    >
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
      <Typography
        variant="subtitle2"
        color="grey.500"
        style={{
          fontSize: 12,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}

export default WalletItem;
