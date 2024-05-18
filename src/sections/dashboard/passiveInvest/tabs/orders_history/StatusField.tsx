import { Stack, Typography } from '@mui/material';
import React from 'react';
import Label from 'src/components/label';

interface IStatusFieldProps {
  status: number;
}

function StatusField({ status }: IStatusFieldProps) {
  if (status === 1)
    return (
      <Label sx={{ fontSize: 16, p: 2, backgroundColor: '#199b5933' }}>
        <Typography variant="subtitle2" sx={{ color: '#1AC26D' }}>
          BUY
        </Typography>
      </Label>
    );

  return (
    <Label sx={{ fontSize: 16, p: 2, backgroundColor: '#ee404c33' }}>
      <Typography variant="subtitle2" sx={{ color: '#EE404C' }}>
        SELL
      </Typography>
    </Label>
  );
}

export default StatusField;
