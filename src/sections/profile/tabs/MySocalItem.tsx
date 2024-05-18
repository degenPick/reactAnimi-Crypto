import { LoadingButton } from '@mui/lab';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';

export interface IMySocialItemProps {
  type: string;
  icon: string;
}

function MySocalItem({ type, icon }: IMySocialItemProps) {
  return (
    <Stack direction="column" sx={{ mb: 2, mr: 2 }}>
      <Typography variant="subtitle2" color="text.secondary">
        {type}
      </Typography>
      <Stack direction="row" gap={1} sx={{ mt: 1 }}>
        <LoadingButton
          fullWidth
          color="inherit"
          size="medium"
          type="submit"
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
            color: '#fff',
          }}
        >
          Associate My Account
        </LoadingButton>
        <Stack
          sx={{ backgroundColor: 'white', px: 2, py: 1, borderRadius: 1 }}
          alignItems="center"
          justifyContent="center"
        >
          <Image src={icon} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MySocalItem;
