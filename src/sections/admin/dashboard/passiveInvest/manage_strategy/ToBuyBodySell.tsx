import { Stack, Switch, TableCell, Typography } from '@mui/material';
import React from 'react';

interface IToBuyBodySellProps {
  borderColor?: string;
  value?: number;
}
function ToBuyBodySell({ borderColor = '#dbdaf41a', value = 33 }: IToBuyBodySellProps) {
  return (
    <TableCell sx={{ borderLeft: 1, borderRight: 1, borderColor }} align="center">
      <Stack alignItems="center" justifyContent="center" gap={1}>
        <Stack
          sx={{
            p: 2,
            backgroundColor: '#2A3D4E',
            border: 1,
            borderColor: 'black',
            borderRadius: 1,
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="subtitle2" color="#ffffffcc">
            {value} %
          </Typography>
        </Stack>
      </Stack>
    </TableCell>
  );
}

export default ToBuyBodySell;
