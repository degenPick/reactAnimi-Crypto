import { Stack, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';
import { actions, selectors } from 'src/redux/price/price.slice';
import { useSelector } from 'src/redux/store';

import HeaderCell from './HeaderCell';

interface IManageStrategyTableHeaderProps {
  type?: string;
}

function ManageStrategyTableHeader({ type = 'selling' }: IManageStrategyTableHeaderProps) {
  const mvrvzscore = useSelector(selectors.mvrvzscore);

  const getHeaderColor = () => {
    if (type === 'buying') return mvrvzscore > -0.1 ? 'red' : 'green';
    return mvrvzscore < 6.9 ? 'red' : 'green';
  };
  return (
    <TableHead>
      <TableRow
        sx={{
          border: 1,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderColor: '#dbdaf41a',
        }}
      >
        <TableCell sx={{ borderLeft: 1, borderTopLeftRadius: 8, borderColor: '#dbdaf41a' }}>
          <Stack alignItems="center" justifyContent="center" gap={1}>
            <Typography variant="subtitle2" color="#ffffffcc">
              MVRV ZScore
            </Typography>
            <Typography variant="h5" fontWeight={700} color={getHeaderColor()}>
              {mvrvzscore}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell sx={{ borderLeft: 1, borderColor: '#dbdaf41a' }}>
          <HeaderCell title="BTC" path="/assets/icons/BTC.svg" percent={55} />
        </TableCell>
        <TableCell sx={{ borderLeft: 1, borderColor: '#dbdaf41a' }}>
          <HeaderCell title="ETH" path="/assets/icons/ETH.svg" percent={35} />
        </TableCell>
        <TableCell sx={{ borderLeft: 1, borderColor: '#dbdaf41a' }}>
          <HeaderCell title="AVAX" path="/assets/icons/AVAX.svg" percent={5} />
        </TableCell>
        <TableCell sx={{ borderLeft: 1, borderColor: '#dbdaf41a' }}>
          <HeaderCell title="SOL" path="/assets/icons/SOL.svg" percent={5} />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default ManageStrategyTableHeader;
