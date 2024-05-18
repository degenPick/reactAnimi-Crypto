import { Box, Grid, Stack, Typography, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import BarChart from 'src/sections/admin/components/BarChart';
import LineChart from 'src/sections/admin/components/LineChart';
import PieChart from 'src/sections/admin/components/PieChart';
import PieChart2 from 'src/sections/admin/components/PieChart2';
import RadialBar from 'src/sections/admin/components/RadialBar';

const subjectList = ['2020', '2021', '2022', '2023', '2024'];

const CustomSelect = styled(Select)(({ theme }) => ({
  color: '#FFFFFF',
}));

function AnalyticsPage() {
  const [totalRevenueYear, setTotalRevenueYear] = useState<string>('2023');
  const [totalClientYear, setTotalClientYear] = useState<string>('2023');

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
                            color: '#13B0F9',
                            opacity: 1,
                          },
                          {
                            offset: 100,
                            color: '#13B0F9',
                            opacity: 1,
                          },
                        ],
                      },
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
                  colors: ['#0D6894'],
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} md={4} lg={4}>
            <Stack
              direction="column"
              justifyContent="space-between"
              spacing={2}
              sx={{
                color: 'grey.200',
                backgroundColor: '#141A36',
                borderRadius: 1,
                p: 2,
                ml: 1,
              }}
            >
              <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                Cash Collected this Month
              </Typography>
              <RadialBar
                title="6,750$"
                chart={{
                  series: [{ label: '', value: 100 }],
                  colors: ['#18AAF7'],
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Stack
              direction="column"
              justifyContent="space-between"
              spacing={2}
              sx={{
                color: 'grey.200',
                backgroundColor: '#141A36',
                borderRadius: 1,
                p: 2,
                ml: 1,
              }}
            >
              <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                Frequency Payment
              </Typography>
              <PieChart2
                title=""
                chart={{
                  series: [
                    { label: 'Monthly 80%', value: 80 },
                    { label: 'Yearly 20%', value: 20 },
                  ],
                }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Stack
              direction="column"
              justifyContent="space-between"
              spacing={2}
              sx={{
                color: 'grey.200',
                backgroundColor: '#141A36',
                borderRadius: 1,
                p: 2,
                ml: 1,
                mr: 1,
              }}
            >
              <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                Clients Connected to Discord
              </Typography>
              <RadialBar
                color="red"
                title="61/63"
                chart={{
                  series: [{ label: '', value: 100 }],
                  colors: ['#5865F2'],
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
