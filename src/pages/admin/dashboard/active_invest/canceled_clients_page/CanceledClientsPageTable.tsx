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
import useLegacyEffect from 'src/hooks/useLegacyEffect';
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
import { IAdminCanceledClientRowDataType } from 'src/components/admin-canceled-clients/type';
import PaidField from 'src/components/admin-clients/PaidField';
import StillPaidField from 'src/components/admin-clients/StillPaidField';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'discordName', label: 'Discord Username', align: 'center' },
  { id: 'endDate', label: 'End Date', align: 'center' },
  { id: 'frequency', label: 'Frequency', align: 'center' },
  { id: 'paid', label: 'Paid', align: 'center' },
  { id: 'contact', label: 'Contact', align: 'center' },
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

interface ICanceledClientsPageTable {
  tableData: IAdminCanceledClientRowDataType[];
}

function CanceledClientsPageTable({ tableData }: ICanceledClientsPageTable) {
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
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {row.discordName}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {fDate(row.endDate)}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      {row.frequency}
                    </TableCell>
                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      <PaidField paid={row.paid} />
                    </TableCell>

                    <TableCell sx={{ borderRight: 1, borderColor: '#dbdaf41a' }} align="center">
                      <Stack
                        flexDirection="row"
                        gap={2}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <IconButton
                          sx={{
                            borderRadius: 1,
                            backgroundColor: 'white',
                            '&:hover': {
                              backgroundColor: '#ffffffcc',
                            },
                          }}
                        >
                          <Iconify
                            icon="lets-icons:message-alt-fill"
                            width={24}
                            sx={{
                              color: '#1F243D',
                            }}
                          />
                        </IconButton>
                        <IconButton
                          sx={{
                            borderRadius: 1,
                            backgroundColor: 'white',
                            '&:hover': {
                              backgroundColor: '#ffffffcc',
                            },
                          }}
                        >
                          <Iconify
                            icon="ic:baseline-discord"
                            width={24}
                            sx={{
                              color: '#1F243D',
                            }}
                          />
                        </IconButton>
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

export default CanceledClientsPageTable;

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  comparator,
}: {
  inputData: IAdminCanceledClientRowDataType[];
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
