import {
  Box,
  Checkbox,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar/Scrollbar';
import Image from 'src/components/image';
import {
  TableEmptyRows,
  TableHeadCustom,
  TablePaginationCustom,
  TableSelectedAction,
  emptyRows,
  getComparator,
  useTable,
} from 'src/components/table';
import { fDate } from 'src/utils/formatTime';
import SvgColor from 'src/components/svg-color/SvgColor';
import StatusField from './StatusField';

type RowDataType = {
  offer: number;
  status: number;
  date: Date;
  amount: number;
  method: number;
};

function createData(offer: number, status: number, date: Date, amount: number, method: number) {
  return { offer, status, date, amount, method };
}

const TABLE_DATA = [
  createData(0, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 1, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
  createData(1, 0, new Date(), 200, 1),
];

const TABLE_HEAD = [
  { id: 'offer', label: 'Offer', align: 'left', minWidth: 500 },
  { id: 'status', label: 'Status', align: 'center' },
  { id: 'date', label: 'Date', align: 'center' },
  { id: 'amount', label: 'Amount', align: 'center' },
  { id: 'method', label: 'Payment Method', align: 'center' },
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

function PaymentHistoryTable() {
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

  const [tableData, setTableData] = useState<RowDataType[]>([]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTableData(TABLE_DATA);
  }, []);

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
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="left">
                      {row.offer === 0 ? 'ActIvest' : 'PassIvest'}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      <StatusField status={row.status} />
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {fDate(row.date)}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {row.amount}$
                    </TableCell>

                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      <Stack alignItems="center" justifyContent="center">
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            backgroundColor: '#141A36',
                            borderRadius: 1,
                            width: 60,
                            height: 44,
                          }}
                        >
                          <Image
                            src="/assets/icons/mastercard.svg"
                            width={34}
                            height={26}
                            sx={{ width: 34, height: 26 }}
                          />
                        </Stack>
                      </Stack>
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

export default PaymentHistoryTable;

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
