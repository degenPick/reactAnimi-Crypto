import { Button, Divider, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
import Iconify from 'src/components/iconify';
import { truncateString } from 'src/utils/common';

export interface ITwoTextItemProps {
  first: string;
  second?: string;
  showCopyBtn?: boolean;
}
function TwoTextItem({ first, second, showCopyBtn = false }: ITwoTextItemProps) {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(second ?? '')
      .then(() => {
        enqueueSnackbar('Link copied to clipboard');
      })
      .catch((error: any) => {
        console.log('Failed to copy text: ', error);
      });
  };

  return (
    <Stack
      sx={{
        color: 'grey.200',
        backgroundColor: '#0F1531',
        borderRadius: 1,
        p: 2,
        m: 1,
        height: 160,
        justifyContent: 'space-around',
      }}
      direction="column"
    >
      <Stack alignItems="center" justifyContent="center">
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {first}
        </Typography>
      </Stack>

      {second && (
        <>
          <Divider />
          <Stack alignItems="center" justifyContent="center" gap={2} direction="row">
            <Typography variant="h6" color="grey.600">
              {truncateString(second, 52)}
            </Typography>
            {showCopyBtn && (
              <Button onClick={() => handleCopy()}>
                <Iconify icon="ph:copy" sx={{ color: 'white' }} />
              </Button>
            )}
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default TwoTextItem;
