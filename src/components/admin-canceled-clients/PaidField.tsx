import { Stack, Typography } from '@mui/material';
import React from 'react';
import Label from 'src/components/label';

interface IPaidFieldProps {
  paid: number;
}

function PaidField({ paid }: IPaidFieldProps) {
  return (
    <Label sx={{ fontSize: 16, p: 2, backgroundColor: '#199b5933' }}>
      <Typography variant="subtitle2" sx={{ color: '#1AC26D' }}>
        {paid} $
      </Typography>
    </Label>
  );
}

export default PaidField;
