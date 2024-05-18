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
import React, { useCallback, useEffect, useState } from 'react';
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
import { actions, selectors } from 'src/redux/price/price.slice';
import { useSelector } from 'src/redux/store';
import ManageStrategyTableHeader from './ManageStrategyTableHeader';
import FristBodyCell from './FristBodyCell';
import BuyingPriceBodyCell from './BuyingPriceBodyCell';
import ToBuyBodySell from './ToBuyBodySell';
import ActionBodySell from './ActionBodySell';

type RowDataType = {
  exchange: number;
  date: Date;
  symbol: string;
  type: string;
  status: number;
  price: number;
  quantity: number;
  pl: number;
};

function createData(
  exchange: number,
  date: Date,
  symbol: string,
  type: string,
  status: number,
  price: number,
  quantity: number,
  pl: number
) {
  return { exchange, date, symbol, type, status, price, quantity, pl };
}

const TABLE_DATA = [
  createData(1, new Date(), 'BTC/USDT', 'Take Profit', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 2, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
  createData(1, new Date(), 'BTC/USDT', 'Market Order', 1, 21000, 0.01, 200),
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

interface IManageStretegyTableProps {
  buttonStatus: { [key: string]: { [key: string]: boolean } };
  setButtonStatus: (value: { [key: string]: { [key: string]: boolean } }) => void;
  canEdit: boolean;
}

function ManageStrategyTable({
  buttonStatus,
  setButtonStatus,
  canEdit,
}: IManageStretegyTableProps) {
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

  const BTC = useSelector(selectors.BTC);
  const ETH = useSelector(selectors.ETH);
  const AVAX = useSelector(selectors.AVAX);
  const SOL = useSelector(selectors.SOL);

  const realPrice = useSelector(selectors.realPrice);
  const referencePrice = useSelector(selectors.referencePrice);

  const HIGH = useSelector(selectors.HIGH);

  const [tableData, setTableData] = useState<RowDataType[]>([]);

  const [mounted, setMounted] = useState(false);

  const mvrvzscore = useSelector(selectors.mvrvzscore);
  const buyingPrice = useSelector(selectors.buyingPrice);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTableData(TABLE_DATA);
  }, []);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
  });

  const getAllDisableCheckStatus = (key: string) => {
    if (
      buttonStatus[key].first === false &&
      buttonStatus[key].second === false &&
      buttonStatus[key].third === false
    )
      return false;
    return true;
  };

  const getAllEnableCheckStatus = (key: string) => {
    if (buttonStatus[key].first && buttonStatus[key].second && buttonStatus[key].third)
      return false;
    return true;
  };

  const updateAllCheckStatus = (key: string, status: boolean) => {
    if (buttonStatus)
      setButtonStatus({
        ...buttonStatus,
        [key]: {
          first: status,
          second: status,
          third: status,
        },
      });
    else
      setButtonStatus({
        [key]: {
          first: status,
          second: status,
          third: status,
        },
      });
  };

  const updateCheckStatus = (key: string, subKey: string, status: boolean) => {
    if (buttonStatus)
      setButtonStatus({
        ...buttonStatus,
        [key]: {
          ...buttonStatus[key],
          [subKey]: status,
        },
      });
    else {
      console.log('set button status ==> ', status);
      setButtonStatus({
        [key]: {
          [subKey]: status,
        },
      });
    }
  };

  return (
    <div>
      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <Scrollbar>
          <AntTable
            size={dense ? 'small' : 'medium'}
            sx={{
              '& .MuiTableCell-head': {
                backgroundColor: '#202640',
                color: 'white',
                '& .Mui-active': {
                  color: 'white',
                },
              },
            }}
          >
            <ManageStrategyTableHeader type="buying" />
            <TableBody>
              <TableRow sx={{ border: 1, borderColor: '#dbdaf41a', backgroundColor: '#141A36' }}>
                <FristBodyCell maxWidth={150}>
                  {referencePrice.buying.updatedDate === 'X' ? (
                    'X'
                  ) : (
                    <>
                      <Typography variant="subtitle2" color="grey.600">
                        Reference Date
                      </Typography>
                      <Typography variant="subtitle2" color="white">
                        {fDateTime(referencePrice.buying.updatedDate, 'dd MMM yyyy hh:mm:ss')}
                      </Typography>
                    </>
                  )}
                </FristBodyCell>
                <FristBodyCell>{referencePrice.buying.BTC} $</FristBodyCell>
                <FristBodyCell>{referencePrice.buying.ETH} $</FristBodyCell>
                <FristBodyCell>{referencePrice.buying.AVAX} $</FristBodyCell>
                <FristBodyCell>{referencePrice.buying.SOL} $</FristBodyCell>
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#dbdaf41a', backgroundColor: '#141A36' }}>
                <FristBodyCell maxWidth={150}>Price</FristBodyCell>
                <FristBodyCell>{realPrice.BTC} $</FristBodyCell>
                <FristBodyCell>{realPrice.ETH} $</FristBodyCell>
                <FristBodyCell>{realPrice.AVAX} $</FristBodyCell>
                <FristBodyCell>{realPrice.SOL} $</FristBodyCell>
              </TableRow>
              {/* <TableRow sx={{ border: 1, borderColor: '#dbdaf41a', backgroundColor: '#141A36' }}>
                <FristBodyCell maxWidth={150}>Latest Highest Price In Last 90 days</FristBodyCell>
                <FristBodyCell>{HIGH.BTC.toFixed(2)} $</FristBodyCell>
                <FristBodyCell>{HIGH.ETH.toFixed(2)} $</FristBodyCell>
                <FristBodyCell>{HIGH.AVAX.toFixed(2)} $</FristBodyCell>
                <FristBodyCell>{HIGH.SOL.toFixed(2)} $</FristBodyCell>
              </TableRow> */}
              <TableRow sx={{ border: 1, borderColor: '#dbdaf41a', backgroundColor: '#141A36' }}>
                <FristBodyCell maxWidth={150}>Total Invested In All Prices</FristBodyCell>
                <FristBodyCell>X $</FristBodyCell>
                <FristBodyCell>X $</FristBodyCell>
                <FristBodyCell>X $</FristBodyCell>
                <FristBodyCell>X $</FristBodyCell>
              </TableRow>
              <TableRow sx={{ borderColor: '#dbdaf41a', backgroundColor: '#141A36' }}>
                <FristBodyCell maxWidth={150}>Average Buying Price</FristBodyCell>
                <FristBodyCell>X $</FristBodyCell>
                <FristBodyCell>X $</FristBodyCell>
                <FristBodyCell>X $</FristBodyCell>
                <FristBodyCell>X $</FristBodyCell>
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#1AC16D', backgroundColor: '#152A3C' }}>
                <FristBodyCell maxWidth={150} borderColor="#1AC16D">
                  1st Buying Price
                </FristBodyCell>
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.BTC && buttonStatus.BTC.first) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('BTC', 'first', value);
                  }}
                  borderColor="#1AC16D"
                  price={buyingPrice.BTC.first}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.ETH && buttonStatus.ETH.first) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('ETH', 'first', value);
                  }}
                  borderColor="#1AC16D"
                  price={buyingPrice.ETH.first}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.AVAX && buttonStatus.AVAX.first) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('AVAX', 'first', value);
                  }}
                  borderColor="#1AC16D"
                  price={buyingPrice.AVAX.first}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.SOL && buttonStatus.SOL.first) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('SOL', 'first', value);
                  }}
                  borderColor="#1AC16D"
                  price={buyingPrice.SOL.first}
                  // price={mvrvzscore < -0.1 ? (Math.floor(SOL * (100 - 10)) / 100).toString() : 'X'}
                />
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#1AC16D', backgroundColor: '#152A3C' }}>
                <FristBodyCell maxWidth={150} borderColor="#1AC16D">
                  % To Buy
                </FristBodyCell>
                <ToBuyBodySell borderColor="#1AC16D" value={34} />
                <ToBuyBodySell borderColor="#1AC16D" value={34} />
                <ToBuyBodySell borderColor="#1AC16D" value={34} />
                <ToBuyBodySell borderColor="#1AC16D" value={34} />
              </TableRow>
              <TableRow sx={{ borderColor: '#1AC16D', backgroundColor: '#152A3C' }}>
                <FristBodyCell maxWidth={150} borderColor="#1AC16D">
                  Total Bought
                </FristBodyCell>
                <FristBodyCell borderColor="#1AC16D">X $</FristBodyCell>
                <FristBodyCell borderColor="#1AC16D">X $</FristBodyCell>
                <FristBodyCell borderColor="#1AC16D">X $</FristBodyCell>
                <FristBodyCell borderColor="#1AC16D">X $</FristBodyCell>
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#ED8A4C', backgroundColor: '#2A2539' }}>
                <FristBodyCell maxWidth={150} borderColor="#ED8A4C">
                  2nd Buying Price
                </FristBodyCell>
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.BTC && buttonStatus.BTC.second) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('BTC', 'second', value);
                  }}
                  borderColor="#ED8A4C"
                  // price={mvrvzscore < -0.1 ? (Math.floor(BTC * (100 - 15)) / 100).toString() : 'X'}
                  price={buyingPrice.BTC.second}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.ETH && buttonStatus.ETH.second) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('ETH', 'second', value);
                  }}
                  borderColor="#ED8A4C"
                  // price={mvrvzscore < -0.1 ? (Math.floor(ETH * (100 - 15)) / 100).toString() : 'X'}
                  price={buyingPrice.ETH.second}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.AVAX && buttonStatus.AVAX.second) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('AVAX', 'second', value);
                  }}
                  borderColor="#ED8A4C"
                  // price={mvrvzscore < -0.1 ? (Math.floor(AVAX * (100 - 20)) / 100).toString() : 'X'}
                  price={buyingPrice.AVAX.second}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.SOL && buttonStatus.SOL.second) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('SOL', 'second', value);
                  }}
                  borderColor="#ED8A4C"
                  // price={mvrvzscore < -0.1 ? (Math.floor(SOL * (100 - 20)) / 100).toString() : 'X'}
                  price={buyingPrice.SOL.second}
                />
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#ED8A4C', backgroundColor: '#2A2539' }}>
                <FristBodyCell maxWidth={150} borderColor="#ED8A4C">
                  % To Buy
                </FristBodyCell>
                <ToBuyBodySell borderColor="#ED8A4C" />
                <ToBuyBodySell borderColor="#ED8A4C" />
                <ToBuyBodySell borderColor="#ED8A4C" />
                <ToBuyBodySell borderColor="#ED8A4C" />
              </TableRow>

              <TableRow sx={{ borderColor: '#ED8A4C', backgroundColor: '#2A2539' }}>
                <FristBodyCell maxWidth={150} borderColor="#ED8A4C">
                  Total Bought
                </FristBodyCell>
                <FristBodyCell borderColor="#ED8A4C">X $</FristBodyCell>
                <FristBodyCell borderColor="#ED8A4C">X $</FristBodyCell>
                <FristBodyCell borderColor="#ED8A4C">X $</FristBodyCell>
                <FristBodyCell borderColor="#ED8A4C">X $</FristBodyCell>
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#EE404C', backgroundColor: '#2A1D39' }}>
                <FristBodyCell maxWidth={150} borderColor="#EE404C">
                  3rd Buying Price
                </FristBodyCell>
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.BTC && buttonStatus.BTC.third) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('BTC', 'third', value);
                  }}
                  borderColor="#EE404C"
                  // price={mvrvzscore < -0.1 ? (Math.floor(BTC * (100 - 20)) / 100).toString() : 'X'}
                  price={buyingPrice.BTC.third}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.ETH && buttonStatus.ETH.third) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('ETH', 'third', value);
                  }}
                  borderColor="#EE404C"
                  // price={mvrvzscore < -0.1 ? (Math.floor(ETH * (100 - 20)) / 100).toString() : 'X'}
                  price={buyingPrice.ETH.third}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.AVAX && buttonStatus.AVAX.third) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('AVAX', 'third', value);
                  }}
                  borderColor="#EE404C"
                  // price={mvrvzscore < -0.1 ? (Math.floor(AVAX * (100 - 30)) / 100).toString() : 'X'}
                  price={buyingPrice.AVAX.third}
                />
                <BuyingPriceBodyCell
                  canEdit={canEdit}
                  checked={(buttonStatus && buttonStatus.SOL && buttonStatus.SOL.third) ?? false}
                  setChecked={(value) => {
                    updateCheckStatus('SOL', 'third', value);
                  }}
                  borderColor="#EE404C"
                  // price={mvrvzscore < -0.1 ? (Math.floor(SOL * (100 - 30)) / 100).toString() : 'X'}
                  price={buyingPrice.SOL.third}
                />
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#EE404C', backgroundColor: '#2A1D39' }}>
                <FristBodyCell maxWidth={150} borderColor="#EE404C">
                  % To Buy
                </FristBodyCell>
                <ToBuyBodySell borderColor="#EE404C" />
                <ToBuyBodySell borderColor="#EE404C" />
                <ToBuyBodySell borderColor="#EE404C" />
                <ToBuyBodySell borderColor="#EE404C" />
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#EE404C', backgroundColor: '#2A1D39' }}>
                <FristBodyCell maxWidth={150} borderColor="#EE404C">
                  Total Bought
                </FristBodyCell>
                <FristBodyCell borderColor="#EE404C">X $</FristBodyCell>
                <FristBodyCell borderColor="#EE404C">X $</FristBodyCell>
                <FristBodyCell borderColor="#EE404C">X $</FristBodyCell>
                <FristBodyCell borderColor="#EE404C">X $</FristBodyCell>
              </TableRow>

              <TableRow sx={{ border: 1, borderColor: '#dbdaf41a', backgroundColor: '#141A36' }}>
                <FristBodyCell maxWidth={150}>Action</FristBodyCell>
                <ActionBodySell
                  canEdit={canEdit}
                  isAllDisable={getAllDisableCheckStatus('BTC')}
                  isAllEnable={getAllEnableCheckStatus('BTC')}
                  setAllEnable={(value) => {
                    updateAllCheckStatus('BTC', value);
                  }}
                />
                <ActionBodySell
                  canEdit={canEdit}
                  isAllDisable={getAllDisableCheckStatus('ETH')}
                  isAllEnable={getAllEnableCheckStatus('ETH')}
                  setAllEnable={(value) => {
                    updateAllCheckStatus('ETH', value);
                  }}
                />
                <ActionBodySell
                  canEdit={canEdit}
                  isAllDisable={getAllDisableCheckStatus('AVAX')}
                  isAllEnable={getAllEnableCheckStatus('AVAX')}
                  setAllEnable={(value) => {
                    updateAllCheckStatus('AVAX', value);
                  }}
                />
                <ActionBodySell
                  canEdit={canEdit}
                  isAllDisable={getAllDisableCheckStatus('SOL')}
                  isAllEnable={getAllEnableCheckStatus('SOL')}
                  setAllEnable={(value) => {
                    updateAllCheckStatus('SOL', value);
                  }}
                />
              </TableRow>
            </TableBody>
          </AntTable>
        </Scrollbar>
      </TableContainer>
    </div>
  );
}

export default ManageStrategyTable;

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
