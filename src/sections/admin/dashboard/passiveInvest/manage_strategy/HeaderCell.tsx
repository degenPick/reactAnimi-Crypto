import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';

interface IHeaderCellProps {
  path: string;
  percent: number;
  title: string;
}
function HeaderCell({ path, percent, title }: IHeaderCellProps) {
  return (
    <Stack alignItems="center" justifyContent="center" gap={2}>
      <Stack direction="row" gap={1} alignItems="center">
        <Image src={path} />
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
      </Stack>

      <Stack
        sx={{
          p: 2,
          backgroundColor: '#141A36',
          border: 1,
          borderColor: 'black',
          borderRadius: 1,
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="subtitle2" fontWeight={700} color="#ffffffcc">
          {percent} %
        </Typography>
      </Stack>
    </Stack>
  );
}

export default HeaderCell;
