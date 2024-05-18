import { Input, Stack, Switch, TableCell, TextField, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const AntSwitch = styled(Switch)({
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#412F3F',
  },
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '&+.MuiSwitch-track': {
        backgroundColor: '#141A36',
      },
    },
  },
  '& .MuiSwitch-colorPrimary': {
    '&.Mui-checked': {
      // thumb - checked
      '& .MuiSwitch-thumb': {
        backgroundColor: '#1AC26D ',
      },
    },
  },

  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    backgroundColor: '#DD303C',
  },
});
interface IBuyingPriceBodyCellProps {
  borderColor?: string;
  checked: boolean;
  canEdit: boolean;
  setChecked: (value: boolean) => void;
  price?: string;
}
function BuyingPriceBodyCell({
  borderColor = '#dbdaf41a',
  checked,
  setChecked,
  price = 'X',
  canEdit,
}: IBuyingPriceBodyCellProps) {
  return (
    <TableCell sx={{ borderLeft: 1, borderRight: 1, borderColor }} align="center">
      <Stack alignItems="center" justifyContent="center" gap={1}>
        <Stack
          sx={{
            px: price !== 'X' ? 1 : 2,
            py: 2,
            backgroundColor: '#2A3D4E',
            border: 1,
            borderColor: 'black',
            borderRadius: 1,
          }}
          alignItems="center"
          justifyContent="center"
        >
          {price !== 'X' && (
            <>
              {canEdit && <Input value={price} />}
              {!canEdit && (
                <Typography variant="subtitle2" color="#ffffffcc">
                  {price} $
                </Typography>
              )}
            </>
          )}

          {price === 'X' && (
            <Typography variant="subtitle2" color="#ffffffcc">
              {price} $
            </Typography>
          )}
        </Stack>

        <AntSwitch
          checked={checked}
          disabled={!canEdit}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
      </Stack>
    </TableCell>
  );
}

export default BuyingPriceBodyCell;
