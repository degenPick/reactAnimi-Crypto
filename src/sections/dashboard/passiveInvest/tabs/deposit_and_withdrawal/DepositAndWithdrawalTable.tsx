import {
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar/Scrollbar';
import {
  TableEmptyRows,
  TableHeadCustom,
  TablePaginationCustom,
  TableSelectedAction,
  emptyRows,
  getComparator,
  useTable,
} from 'src/components/table';
import { fDate, fDateTime } from 'src/utils/formatTime';
import SvgColor from 'src/components/svg-color/SvgColor';
import useLegacyEffect from 'src/hooks/useLegacyEffect';

export interface RowDataType {
  id: string;
  exchange: string;
  network: string;
  date: Date;
  quantity: number;
  type: string;
}

const TABLE_HEAD = [
  { id: 'exchange', label: 'CEX', align: 'center' },
  { id: 'date', label: 'Date & Time', align: 'center' },
  { id: 'type', label: 'Type', align: 'center' },
  { id: 'quantity', label: 'Quantity', align: 'center' },
  { id: 'id', label: 'TXID', align: 'center' },
  { id: 'network', label: 'Network', align: 'center' },
];

const AntTable = styled(Table)({
  '& .MuiTable-container': {
    backgroundColor: 'transparent',
  },
  '& .MuiTableCell-head': {
    backgroundColor: '#0F1532',
    color: 'white',
    '& .Mui-active': {
      color: 'white',
    },
  },
  '& .MuiTableCell-head:active': {
    backgroundColor: '#0F1532',
    color: 'white',
  },
  '& .MuiTableCell-body': {
    color: '#ffffff80',
  },
});

const AntTablePaginationCustom = styled(TablePaginationCustom)({
  '& .MuiTablePagination-root': {
    color: 'white',
  },
});

interface IDepositAndWithdrawalTable {
  tableData: RowDataType[];
}

function DepositAndWithdrawalTable({ tableData }: IDepositAndWithdrawalTable) {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    //
    selected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({
    defaultOrderBy: 'calories',
  });

  const [mounted, setMounted] = useState(false);

  useLegacyEffect(() => setMounted(true), []);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
  });

  const denseHeight = dense ? 34 : 54;

  return (
    <div>
      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <Scrollbar>
          <AntTable size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={tableData.length}
              numSelected={selected.length}
              onSort={onSort}
              onSelectAllRows={(checked) => {}}
            />

            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    onClick={() => {}}
                    selected={false}
                    sx={{ borderBottom: 1, borderColor: '#dbdaf41a', backgroundColor: '#202540' }}
                  >
                    <TableCell sx={{ borderLeft: 1, borderRight: 1, borderColor: '#dbdaf41a' }}>
                      {index + 1}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {row.exchange === 'kucoin' && (
                        <SvgColor src="/assets/kucoin.svg" sx={{ width: 100 }} color="#23AF91" />
                      )}
                      {row.exchange === 'binance' && (
                        <SvgColor src="/assets/binance.svg" sx={{ width: 100 }} color="#f3ba2f" />
                      )}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {fDateTime(row.date, 'dd MMM yyyy hh:mm:ss')}
                    </TableCell>

                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {row.type}
                    </TableCell>

                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {row.quantity}
                    </TableCell>

                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {row.id}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {row.network}
                    </TableCell>
                  </TableRow>
                ))}

              <TableEmptyRows
                height={denseHeight}
                emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
              />
            </TableBody>
          </AntTable>
        </Scrollbar>
      </TableContainer>

      {mounted && (
        <AntTablePaginationCustom
          count={dataFiltered.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
          //
          dense={dense}
          onChangeDense={onChangeDense}
        />
      )}
    </div>
  );
}

export default DepositAndWithdrawalTable;

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  comparator,
}: {
  inputData: RowDataType[];
  comparator: (a: any, b: any) => number;
}) {
  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);

    if (order !== 0) return order;

    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  return inputData;
}
