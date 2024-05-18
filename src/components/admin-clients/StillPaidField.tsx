import { Stack, Typography } from '@mui/material';
import React from 'react';
import Label from 'src/components/label';

interface IStillPaidFieldProps {
  stillToBePaid: number;
}

function StillPaidField({ stillToBePaid }: IStillPaidFieldProps) {
  if (stillToBePaid === 0)
    return (
      <Label sx={{ fontSize: 16, p: 2, backgroundColor: '#363B53' }}>
        <Typography variant="subtitle2" sx={{ color: '#868998' }}>
          {stillToBePaid} $
        </Typography>
      </Label>
    );
  return (
    <Label sx={{ fontSize: 16, p: 2, backgroundColor: '#ee404c33' }}>
      <Typography variant="subtitle2" sx={{ color: '#EE404C' }}>
        {stillToBePaid} $
      </Typography>
    </Label>
  );
}

export default StillPaidField;
