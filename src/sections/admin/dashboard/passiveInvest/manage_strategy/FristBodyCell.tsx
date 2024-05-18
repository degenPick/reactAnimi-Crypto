import { TableCell, Typography } from '@mui/material';
import React from 'react';

interface IFristBodyCellProps {
  children: React.ReactNode;
  borderColor?: string;
  maxWidth?: number;
}
function FristBodyCell({ children, borderColor = '#dbdaf41a', maxWidth }: IFristBodyCellProps) {
  return (
    <TableCell
      sx={
        maxWidth
          ? { borderLeft: 1, borderRight: 1, borderColor, maxWidth, width: maxWidth }
          : { borderLeft: 1, borderRight: 1, borderColor }
      }
      align="center"
    >
      <Typography variant="subtitle2" color="white">
        {children}
      </Typography>
    </TableCell>
  );
}

export default FristBodyCell;
