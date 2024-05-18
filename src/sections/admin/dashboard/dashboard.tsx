import { Grid, Stack, Typography, MenuItem, Select, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useDateRangePicker } from 'src/components/date-range-picker';
import DateRangePicker from 'src/components/date-range-picker/DateRangePicker';
import { fDate } from 'src/utils/formatTime';

import EarningDisplayTotal from './EarningDisplayTotal';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';

const subjectList = ['2020', '2021', '2022', '2023', '2024'];
const CustomSelect = styled(Select)(({ theme }) => ({
  color: '#FFFFFF',
}));
function Dashboard() {
  const [totalRevenueYear, setTotalRevenueYear] = useState<string>('2023');
  const [totalClientYear, setTotalClientYear] = useState<string>('2023');

  const now = new Date();

  const pickerInput = useDateRangePicker(
    new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
    now
  );

  return (
    <>
      <EarningDisplayTotal />

      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={2}
            sx={{
              color: 'grey.200',
              backgroundColor: '#202540',
              borderRadius: 1,
              p: 2,
              mr: 1,
            }}
          >
            <Stack justifyContent="space-between" alignItems="center" direction="row">
              <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                Total Revenue
              </Typography>

              <CustomSelect
                value={totalRevenueYear}
                onChange={(e) => setTotalRevenueYear(e.target.value as string)}
              >
                {subjectList.map((subject) => (
                  <MenuItem key={subject} value={subject}>
                    {subject}
                  </MenuItem>
                ))}
              </CustomSelect>
            </Stack>

            <BarChart
              title=""
              subheader=""
              bgColor="#141A36"
              chart={{
                categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                series: [
                  {
                    year: '2019',
                    data: [
                      {
                        name: 'Total',
                        data: [420, 220, 200, 190, 180, 150, 180, 200, 180, 120, 160, 300],
                      },
                    ],
                  },
                ],
                colors: ['#4482EC'],
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={12} lg={12} sx={{ mt: 2 }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={2}
            sx={{
              color: 'grey.200',
              backgroundColor: '#202540',
              borderRadius: 1,
              p: 2,
              mr: 1,
            }}
          >
            <Stack justifyContent="space-between" alignItems="center" direction="row">
              <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                Total Clients
              </Typography>
              <CustomSelect
                value={totalClientYear}
                onChange={(e) => setTotalClientYear(e.target.value as string)}
              >
                {subjectList.map((subject) => (
                  <MenuItem key={subject} value={subject}>
                    {subject}
                  </MenuItem>
                ))}
              </CustomSelect>
            </Stack>

            <LineChart
              title=""
              subheader=""
              bgColor="#141A36"
              chart={{
                categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                series: [
                  {
                    year: '2019',
                    data: [
                      {
                        name: 'Total',
                        data: [420, 220, 200, 190, 180, 150, 180, 200, 180, 120, 160, 300],
                      },
                    ],
                  },
                ],
                colors: ['#0D6894'],
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={12} lg={12} sx={{ mt: 2 }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={2}
            sx={{
              color: 'grey.200',
              backgroundColor: '#202540',
              borderRadius: 1,
              p: 2,
              mr: 1,
            }}
          >
            <Stack justifyContent="space-between" alignItems="center" direction="row">
              <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                Website Traffic
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#141A36',
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
            </Stack>

            <LineChart
              title=""
              subheader=""
              bgColor="#141A36"
              chart={{
                categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                series: [
                  {
                    year: '2019',
                    data: [
                      {
                        name: 'Total',
                        data: [420, 220, 200, 190, 180, 150, 180, 200, 180, 120, 160, 300],
                      },
                    ],
                  },
                ],
                colors: ['#22386A'],
              }}
            />
          </Stack>
        </Grid>
      </Grid>
      <DateRangePicker
        open={pickerInput.open}
        startDate={pickerInput.startDate}
        endDate={pickerInput.endDate}
        onChangeStartDate={pickerInput.onChangeStartDate}
        onChangeEndDate={pickerInput.onChangeEndDate}
        onUpdate={() => {
          pickerInput.onClose();
          // updateTableData();
        }}
        onClose={pickerInput.onClose}
        isError={pickerInput.isError}
      />
    </>
  );
}

export default Dashboard;
