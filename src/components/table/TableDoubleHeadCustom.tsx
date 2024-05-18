// @mui
import { Theme } from '@mui/material/styles';
import {
  Box,
  SxProps,
  Checkbox,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
} from '@mui/material';

// ----------------------------------------------------------------------

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
} as const;

// ----------------------------------------------------------------------

type Props = {
  order?: 'asc' | 'desc';
  orderBy?: string;
  headLabel: any[];
  rowCount?: number;
  numSelected?: number;
  onSort?: (id: string) => void;
  onSelectAllRows?: (checked: boolean) => void;
  sx?: SxProps<Theme>;
  showNo?: boolean;
  topHeadLabel?: string;
};

export default function TableDoubleHeadCustom({
  order,
  orderBy,
  rowCount = 0,
  headLabel,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx,
  showNo = true,
  topHeadLabel,
}: Props) {
  return (
    <TableHead sx={sx}>
      {topHeadLabel && (
        <TableRow
          sx={{
            borderRight: 1,
            borderLeft: 1,
            borderTop: 1,
            borderColor: '#dbdaf41a',
            borderRadius: 20,
          }}
        >
          <TableCell
            colSpan={showNo ? rowCount + 1 : rowCount}
            align="center"
            sx={{
              fontSize: 18,
              borderLeft: 1,
              borderColor: '#dbdaf41a',
            }}
          >
            {topHeadLabel}
          </TableCell>
        </TableRow>
      )}

      <TableRow
        sx={{
          borderRight: 1,
          borderLeft: 1,
          borderTop: 1,
          borderColor: '#dbdaf41a',
          borderRadius: 20,
          minHeight: 80,
          height: 80,
        }}
      >
        {/* {onSelectAllRows && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onSelectAllRows(event.target.checked)
              }
            />
          </TableCell>
        )} */}

        {showNo && <TableCell sx={{ borderLeft: 1, borderColor: '#dbdaf41a' }}>#</TableCell>}

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              width: headCell.width,
              minWidth: headCell.minWidth,
              fontSize: 16,
              borderLeft: 1,
              borderColor: '#dbdaf41a',
            }}
          >
            {onSort ? (
              <TableSortLabel
                hideSortIcon
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => onSort(headCell.id)}
                sx={{ textTransform: 'capitalize' }}
              >
                {headCell.label}

                {orderBy === headCell.id ? (
                  <Box sx={{ ...visuallyHidden }}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
