import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';
import RadialBar from 'src/sections/admin/components/RadialBar';

interface IRadialBarItemProps {
  title: string;
  detail: string;
}

function RadialBarItem({ title, detail }: IRadialBarItemProps) {
  return (
    <Stack
      sx={{
        backgroundColor: '#141A36',
        p: 2,
        borderRadius: 1,
        gap: 2,
      }}
    >
      <Typography variant="subtitle1" sx={{ ml: 2 }}>
        {title}
      </Typography>

      <RadialBar
        title={detail}
        sx={{
          mx: 2,
        }}
        chart={{
          series: [{ label: '', value: 100 }],
          colors: ['#CA0787'],
        }}
      />
    </Stack>
  );
}

export default RadialBarItem;
