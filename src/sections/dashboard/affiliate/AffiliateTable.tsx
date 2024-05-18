import {
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
import TableDoubleHeadCustom from 'src/components/table/TableDoubleHeadCustom';

type RowDataType = {
  referralName: string;
  offerSubscribed: string;
  amountPaid: number;
  commissionRate: number;
  commissionAmout: number;
  commissionPaymentDate: Date;
  commissionPaid: string;
  txID: string;
};

function createData(
  referralName: string,
  offerSubscribed: string,
  amountPaid: number,
  commissionRate: number,
  commissionAmout: number,
  commissionPaymentDate: Date,
  commissionPaid: string,
  txID: string
) {
  return {
    referralName,
    offerSubscribed,
    amountPaid,
    commissionRate,
    commissionAmout,
    commissionPaymentDate,
    commissionPaid,
    txID,
  };
}

const TABLE_DATA = [
  createData('AAAA1', 'Private Club', 1000, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA2', 'Private Club', 1100, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
  createData('AAAA', 'Private Club', 1500, 15, 225, new Date(), 'NO', '#'),
];

const TABLE_HEAD_1 = [
  { id: 'referralName', label: 'Referral Name', align: 'center' },
  { id: 'offerSubscribed', label: 'Offer Subscribed', align: 'center' },
  { id: 'amountPaid', label: 'Amount Paid', align: 'center' },
];

const TABLE_HEAD_2 = [
  { id: 'commissionRate', label: 'Commission Rate', align: 'center' },
  { id: 'commissionAmout', label: 'Commission Amount', align: 'center' },
  { id: 'commissionPaymentDate', label: 'Commission Payment Date', align: 'center' },
  { id: 'commissionPaid', label: 'Commission Paid', align: 'center' },
  { id: 'txID', label: 'TXID', align: 'center' },
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

function AffiliateTable() {
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
          <Stack direction="row" gap={1}>
            <AntTable
              size={dense ? 'small' : 'medium'}
              sx={{
                flex: 2,
              }}
            >
              <TableDoubleHeadCustom
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD_1}
                rowCount={TABLE_HEAD_1.length}
                numSelected={selected.length}
                onSort={onSort}
                onSelectAllRows={(checked) => {}}
                topHeadLabel="Customers"
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
                        {row.referralName}
                      </TableCell>
                      <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                        {row.offerSubscribed}
                      </TableCell>
                      <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                        {row.amountPaid}$
                      </TableCell>
                    </TableRow>
                  ))}

                <TableEmptyRows
                  height={denseHeight}
                  emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                />
              </TableBody>
            </AntTable>

            <AntTable
              size={dense ? 'small' : 'medium'}
              sx={{
                flex: 3,
              }}
            >
              <TableDoubleHeadCustom
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD_2}
                rowCount={TABLE_HEAD_2.length}
                numSelected={selected.length}
                onSort={onSort}
                onSelectAllRows={(checked) => {}}
                showNo={false}
                topHeadLabel="You"
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
                      <TableCell
                        sx={{ borderLeft: 1, borderRight: 1, borderColor: '#dbdaf41a' }}
                        align="center"
                      >
                        {row.commissionRate}%
                      </TableCell>
                      <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                        {row.commissionAmout}$
                      </TableCell>
                      <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                        {fDate(row.commissionPaymentDate)}
                      </TableCell>
                      <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                        {row.commissionPaid}
                      </TableCell>
                      <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                        {row.txID}
                      </TableCell>
                    </TableRow>
                  ))}

                <TableEmptyRows
                  height={denseHeight}
                  emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                />
              </TableBody>
            </AntTable>
          </Stack>
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

export default AffiliateTable;

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
