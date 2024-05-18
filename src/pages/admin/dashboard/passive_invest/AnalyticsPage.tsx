import { Box, Grid, MenuItem, Select, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Image from 'src/components/image';
import BarChart from 'src/sections/admin/components/BarChart';
import LineChart from 'src/sections/admin/components/LineChart';
import TextItem from './analytics/TextItem';
import RadialBarItem from './analytics/RadialBarItem';

const CustomSelect = styled(Select)(({ theme }) => ({
  color: '#FFFFFF',
}));

const subjectList = ['2020', '2021', '2022', '2023', '2024'];

function AnalyticsPage() {
  const [totalRevenueYear, setTotalRevenueYear] = useState<string>('2023');
  const [totalClientYear, setTotalClientYear] = useState<string>('2023');

  const [totalCapitalYear, setTotalCapitalYear] = useState<string>('2023');
  const [totalClientsPerLevelYear, setTotalClientsPerLevelYear] = useState<string>('2023');

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
      <Box sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2, mb: 2 }}>
        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              padding: 1,
            }}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              spacing={2}
              sx={{
                color: 'grey.200',
                backgroundColor: '#141A36',
                borderRadius: 1,
                p: 2,
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
                bgColor="#202540"
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
                  options: {
                    fill: {
                      type: 'gradient',
                      gradient: {
                        type: 'vertical',
                        colorStops: [
                          {
                            offset: 0,
                            color: '#FF1BCA',
                            opacity: 1,
                          },
                          {
                            offset: 100,
                            color: '#C0037B',
                            opacity: 1,
                          },
                        ],
                      },
                    },
                    stroke: {
                      colors: ['transparent'],
                    },
                  },
                }}
              />
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              padding: 1,
            }}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              spacing={2}
              sx={{
                color: 'grey.200',
                backgroundColor: '#141A36',
                borderRadius: 1,
                p: 2,
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
                bgColor="#202540"
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
                  colors: ['#8F2085'],
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            sx={{
              padding: 1,
            }}
          >
            <TextItem title="Total USDT invested by clients" detail="10,000,000 $" />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            sx={{
              padding: 1,
            }}
          >
            <TextItem title="% of capital invested" detail="34%" />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            sx={{
              padding: 1,
            }}
          >
            <TextItem title="Total P&L" detail="+ 1,000,000 $" color="#10CB6C" showBottom />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            sx={{
              padding: 1,
            }}
          >
            <TextItem title="Total capital of clients" detail="11,000,000 $" color="#10CB6C" />
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            sx={{
              padding: 1,
            }}
          >
            <RadialBarItem title="% Fee Collected This Month" detail="5%" />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            sx={{
              padding: 1,
            }}
          >
            <RadialBarItem title="Cash collected this month" detail="50,000$" />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            sx={{
              padding: 1,
            }}
          >
            <RadialBarItem title="Average Deposit Upon Register" detail="6,800 $" />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            sx={{
              padding: 1,
            }}
          >
            <RadialBarItem title="Average New Deposits After Register" detail="2,400 $" />
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              padding: 1,
            }}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              spacing={2}
              sx={{
                color: 'grey.200',
                backgroundColor: '#141A36',
                borderRadius: 1,
                p: 2,
              }}
            >
              <Stack justifyContent="space-between" alignItems="center" direction="row">
                <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                  Total Capital Per Exchange
                </Typography>

                <CustomSelect
                  value={totalCapitalYear}
                  onChange={(e) => setTotalCapitalYear(e.target.value as string)}
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
                bgColor="#202540"
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
                  options: {
                    fill: {
                      type: 'gradient',
                      gradient: {
                        type: 'vertical',
                        colorStops: [
                          {
                            offset: 0,
                            color: '#FF1BCA',
                            opacity: 1,
                          },
                          {
                            offset: 100,
                            color: '#C0037B',
                            opacity: 1,
                          },
                        ],
                      },
                    },
                    stroke: {
                      colors: ['transparent'],
                    },
                  },
                }}
              />
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              padding: 1,
            }}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              spacing={2}
              sx={{
                color: 'grey.200',
                backgroundColor: '#141A36',
                borderRadius: 1,
                p: 2,
              }}
            >
              <Stack justifyContent="space-between" alignItems="center" direction="row">
                <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                  Total Clients
                </Typography>
                <CustomSelect
                  value={totalClientsPerLevelYear}
                  onChange={(e) => setTotalClientsPerLevelYear(e.target.value as string)}
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
                bgColor="#202540"
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
                  options: {
                    fill: {
                      type: 'gradient',
                      gradient: {
                        type: 'vertical',
                        colorStops: [
                          {
                            offset: 0,
                            color: '#FF1BCA',
                            opacity: 1,
                          },
                          {
                            offset: 100,
                            color: '#C0037B',
                            opacity: 1,
                          },
                        ],
                      },
                    },
                    stroke: {
                      colors: ['transparent'],
                    },
                  },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AnalyticsPage;
