import { Box, Button, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CustomTextField } from 'src/components/custom-input';
import { useDateRangePicker } from 'src/components/date-range-picker';
import DateRangePicker from 'src/components/date-range-picker/DateRangePicker';
import Iconify from 'src/components/iconify';
import axiosInstance from 'src/utils/axios';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import Block from 'src/components/settings/drawer/Block';
import { fDate } from 'src/utils/formatTime';
import OrdersHistoryTable, { RowDataType } from './orders_history/OrdersHistoryTable';

/**
 * 
 * @returns 
 * type RowDataType = {
  exchange: number;
  date: Date;
  symbol: string;
  type: string;
  status: number;
  price: number;
  quantity: number;
  pl: number;
};
 */
function OrdersHistory() {
  const now = new Date();

  const pickerInput = useDateRangePicker(new Date(now.getFullYear(), now.getMonth(), 1), now);
  const [tableData, setTableData] = useState<RowDataType[]>([]);
  const [allHistory, setAllHistory] = useState<any[]>([]);

  useLegacyEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.post('api/v1/users/order-history');
        const data = response.data;

        const orders = data.orders;

        const history = orders.map((order: any) => ({
          exchange: order.cexType,
          date: order.date,
          symbol: order.bitcoinType,
          type: 'Market Order',
          status: order.status === 'buy' ? 1 : 0,
          price:
            order.status === 'buy'
              ? parseFloat(order.buyPrice.toFixed(2))
              : parseFloat(order.sellPrice.toFixed(2)),
          quantity: parseFloat(order.amount.toFixed(6)),
          pl: parseFloat(order.pl.toFixed(6)),
        }));

        setAllHistory(history);

        // const endDate = new Date();
        // const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1);

        // const filteredData = history.filter((item: any) => {
        //   const itemDate = new Date(item.date);
        //   return itemDate >= startDate && itemDate <= endDate;
        // });
        setTableData(history);
      } catch (error) {
        console.log('error ==> ', error);
      }
    };

    fetch();
  }, []);

  const updateTableData = () => {
    const endDate = pickerInput.endDate ?? new Date();
    const startDate = pickerInput.startDate ?? new Date();

    const filteredData = allHistory.filter((item: any) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
    setTableData(filteredData);
  };

  return (
    <Box
      sx={{
        color: 'grey.200',
        backgroundColor: '#202540',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        p: 2,
        mb: 2,
      }}
    >
      <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 2, mb: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h6"> Orders History</Typography>
            <Typography variant="subtitle2" sx={{ color: 'grey.600' }}>
              ({tableData.length})
            </Typography>
          </Stack>

          <Stack direction="row" gap={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#202540',
                borderRadius: 1,
                p: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={pickerInput.onOpen}
            >
              <Typography variant="subtitle2">
                {fDate(pickerInput.startDate)} - {fDate(pickerInput.endDate)}
              </Typography>
            </Button>
            <DateRangePicker
              open={pickerInput.open}
              startDate={pickerInput.startDate}
              endDate={pickerInput.endDate}
              onChangeStartDate={pickerInput.onChangeStartDate}
              onChangeEndDate={pickerInput.onChangeEndDate}
              onUpdate={() => {
                pickerInput.onClose();
                updateTableData();
              }}
              onClose={pickerInput.onClose}
              isError={pickerInput.isError}
            />

            <CustomTextField
              width={220}
              placeholder="Search..."
              sx={{ backgroundColor: '#202540', color: 'grey.200' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>

        <Divider sx={{ mt: 2, mb: 2 }} />
        <OrdersHistoryTable tableData={tableData} />
      </Box>
    </Box>
  );
}

export default OrdersHistory;
