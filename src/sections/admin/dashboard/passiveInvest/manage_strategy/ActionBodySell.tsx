import { Stack, Switch, TableCell, Typography } from '@mui/material';
import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';

interface IActionBodySellProps {
  borderColor?: string;
  isAllEnable: boolean;
  setAllEnable: (value: boolean) => void;
  isAllDisable: boolean;
  canEdit: boolean;
}
function ActionBodySell({
  borderColor = '#dbdaf41a',
  isAllEnable,
  isAllDisable,
  setAllEnable,
  canEdit,
}: IActionBodySellProps) {
  return (
    <TableCell sx={{ borderLeft: 1, borderRight: 1, borderColor }} align="center">
      <Stack alignItems="center" justifyContent="center" gap={2}>
        <Stack
          sx={{
            p: 1,
            backgroundColor: '#1E243C',
            borderRadius: 1,
          }}
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <LoadingButton
            fullWidth
            color="inherit"
            size="medium"
            type="submit"
            variant="contained"
            disabled={!isAllEnable || !canEdit}
            sx={{
              background: isAllEnable ? 'linear-gradient(to right, #08964E, #1AC26D)' : '#141A36',
              color: '#fff',
              padding: 2,
            }}
            onClick={() => setAllEnable(true)}
          >
            Enable All
          </LoadingButton>
          <LoadingButton
            fullWidth
            color="inherit"
            size="medium"
            type="submit"
            variant="contained"
            disabled={!isAllDisable || !canEdit}
            sx={{
              background: isAllDisable ? 'linear-gradient(to right, #C01722, #EE404C)' : '#141A36',
              color: '#fff',
              padding: 2,
            }}
            onClick={() => setAllEnable(false)}
          >
            Disable All
          </LoadingButton>
        </Stack>
      </Stack>
    </TableCell>
  );
}

export default ActionBodySell;
