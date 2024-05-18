import React, { useState, useEffect } from 'react';
import axiosInstance from 'src/utils/axios';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import { useDateRangePicker } from 'src/components/date-range-picker';
import DateRangePicker from 'src/components/date-range-picker/DateRangePicker';
import { fDate } from 'src/utils/formatTime';
import YourPortfolioHeader from './your_portfolio/YourPortfolioHeader';
import ActualPortfolio from './your_portfolio/ActualPortfolio';
import EvolutionPortfolio from './your_portfolio/EvolutionPortfolio';
import EarningDisplayTotal from '../../activeInvest/EarningDisplayTotal';

interface IAcutal {
  USDT: number;
  BTC: number;
  ETH: number;
  AVAX: number;
  SOL: number;
}

interface IEvolution {
  total: number;
  actual: {
    USDT: number;
    BTC: number;
    ETH: number;
    AVAX: number;
    SOL: number;
  };
  snapped_at: string;
}

function YourPortfolio() {
  const [isShowMore, setShowMore] = useState<boolean>(false);

  const now = new Date();

  const pickerInput = useDateRangePicker(
    new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
    now
  );

  const [invested, setInvested] = useState<number>(0);
  const [capital, setCapital] = useState<number>(0);
  const [withdrawal, setWithdrawal] = useState<number>(0);
  const [actual, setActual] = useState<IAcutal>({
    USDT: 0,
    BTC: 0,
    ETH: 0,
    AVAX: 0,
    SOL: 0,
  });
  const [evolutions, setEvolutions] = useState<IEvolution[]>([]);
  const [filteredEvolutions, setFilteredEvolutions] = useState<IEvolution[]>([]);

  useLegacyEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.post('api/v1/users/your-portfolio');

        const data = response.data;
        if (data) {
          const totalWidrawal = data.withdrawals
            .map((item: any) => item.amount)
            .reduce((total: number, currentAmount: number) => total + currentAmount, 0);

          setWithdrawal(totalWidrawal);
          setInvested(data.invested);
          setCapital(data.capital);
          setActual(data.actual);
          setEvolutions(data.evolutions);
        }
      } catch (error) {
        console.log('error ==> ', error);
      }
    };

    fetch();
  }, []);

  useLegacyEffect(() => {
    const current = new Date();
    const oneYearAgo = new Date(current.getFullYear() - 1, current.getMonth(), current.getDate());

    if (evolutions)
      setFilteredEvolutions(
        evolutions.filter((item) => {
          const snappedAtDate = new Date(item.snapped_at);
          return snappedAtDate >= oneYearAgo && snappedAtDate <= current;
        })
      );
  }, [evolutions]);

  const updateTableData = () => {
    const endDate = pickerInput.endDate ?? new Date();
    const startDate = pickerInput.startDate ?? new Date();

    if (evolutions)
      setFilteredEvolutions(
        evolutions.filter((item) => {
          const snappedAtDate = new Date(item.snapped_at);
          return snappedAtDate >= startDate && snappedAtDate <= endDate;
        })
      );
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="space-between"
        spacing={2}
        sx={{
          color: 'grey.200',
          backgroundColor: '#202540',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          p: 2,
          mb: 2,
        }}
      >
        <YourPortfolioHeader invested={invested} capital={capital} withdrawal={withdrawal} />

        <Grid container>
          <Grid item xs={12} md={8} lg={8}>
            <Stack
              direction="column"
              justifyContent="space-between"
              spacing={2}
              sx={{
                color: 'grey.200',
                backgroundColor: '#141A36',
                borderRadius: 1,
                p: 2,
                mr: 1,
              }}
            >
              <Stack justifyContent="space-between" alignItems="center" direction="row">
                <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                  Evolution of your overall portfolio
                </Typography>

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
              </Stack>
              <EvolutionPortfolio
                title=""
                subheader=""
                chart={{
                  categories:
                    filteredEvolutions?.map((item) => item.snapped_at.split('T')[0]) ?? [],
                  series: [
                    {
                      year: '2019',
                      data: [
                        {
                          name: 'Total',
                          data:
                            filteredEvolutions?.map((item) => parseFloat(item.total.toFixed(2))) ??
                            [],
                        },
                      ],
                    },
                  ],
                  colors: ['#4482EC'],
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
                Your actual portfolio by assets
              </Typography>
              <ActualPortfolio
                title="Your actual portfolio by assets"
                chart={{
                  series: [
                    { label: 'USDT', value: actual?.USDT ?? 0 },
                    { label: 'BTC', value: actual?.BTC ?? 0 },
                    { label: 'ETH', value: actual?.ETH ?? 0 },
                    { label: 'AVAX', value: actual?.AVAX ?? 0 },
                    { label: 'SOL', value: actual?.SOL ?? 0 },
                  ],
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Divider />
        <Stack mt={4} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <LoadingButton
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #4481EB, #04BEFE)',
              color: '#fff',
            }}
            onClick={() => {
              setShowMore(!isShowMore);
            }}
          >
            Load More
          </LoadingButton>
        </Stack>

        {isShowMore && (
          <Grid container columnSpacing={2} rowSpacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6} lg={6}>
              <Stack
                direction="column"
                justifyContent="space-between"
                spacing={2}
                sx={{
                  color: 'grey.200',
                  backgroundColor: '#141A36',
                  borderRadius: 1,
                  p: 2,
                  mr: 1,
                }}
              >
                <Stack justifyContent="space-between" alignItems="center" direction="row">
                  <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                    Evolution of your ETH portfolio
                  </Typography>
                  <Typography variant="subtitle2" sx={{ pt: 2, pb: 2 }}>
                    0 $ ( 0 $ )
                  </Typography>
                </Stack>
                <EvolutionPortfolio
                  title=""
                  subheader=""
                  bgColor="#202540"
                  chart={{
                    categories: evolutions?.map((item) => item.snapped_at.split('T')[0]) ?? [],
                    series: [
                      {
                        year: '2019',
                        data: [
                          {
                            name: 'ETH',
                            data:
                              evolutions?.map((item) => parseFloat(item.actual.ETH.toFixed(2))) ??
                              [],
                          },
                        ],
                      },
                    ],
                    colors: ['#00B8D9'],
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
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
                <Stack justifyContent="space-between" alignItems="center" direction="row">
                  <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                    Evolution of your BTC portfolio
                  </Typography>
                  <Typography variant="subtitle2" sx={{ pt: 2, pb: 2 }}>
                    0 $ ( 0 $ )
                  </Typography>
                </Stack>
                <EvolutionPortfolio
                  title=""
                  subheader=""
                  chart={{
                    categories: evolutions?.map((item) => item.snapped_at.split('T')[0]) ?? [],
                    series: [
                      {
                        year: '2019',
                        data: [
                          {
                            name: 'BTC',
                            data:
                              evolutions?.map((item) => parseFloat(item.actual.BTC.toFixed(2))) ??
                              [],
                          },
                        ],
                      },
                    ],
                    colors: ['#FFAB00'],
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
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
                <Stack justifyContent="space-between" alignItems="center" direction="row">
                  <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                    Evolution of your AVAX portfolio
                  </Typography>
                  <Typography variant="subtitle2" sx={{ pt: 2, pb: 2 }}>
                    0 $ ( 0 $ )
                  </Typography>
                </Stack>
                <EvolutionPortfolio
                  title=""
                  subheader=""
                  chart={{
                    categories: evolutions?.map((item) => item.snapped_at.split('T')[0]) ?? [],
                    series: [
                      {
                        year: '2019',
                        data: [
                          {
                            name: 'AVAX',
                            data:
                              evolutions?.map((item) => parseFloat(item.actual.AVAX.toFixed(2))) ??
                              [],
                          },
                        ],
                      },
                    ],
                    colors: ['#FF5630'],
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Stack
                direction="column"
                justifyContent="space-between"
                spacing={2}
                sx={{
                  color: 'grey.200',
                  backgroundColor: '#141A36',
                  borderRadius: 1,
                  p: 2,
                  mr: 1,
                }}
              >
                <Stack justifyContent="space-between" alignItems="center" direction="row">
                  <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
                    Evolution of your SOL portfolio
                  </Typography>
                  <Typography variant="subtitle2" sx={{ pt: 2, pb: 2 }}>
                    0 $ ( 0 $ )
                  </Typography>
                </Stack>
                <EvolutionPortfolio
                  title=""
                  subheader=""
                  chart={{
                    categories: evolutions?.map((item) => item.snapped_at.split('T')[0]) ?? [],
                    series: [
                      {
                        year: '2019',
                        data: [
                          {
                            name: 'SOL',
                            data:
                              evolutions?.map((item) => parseFloat(item.actual.SOL.toFixed(2))) ??
                              [],
                          },
                        ],
                      },
                    ],
                    colors: ['#36B37E'],
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        )}
      </Stack>

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
    </>
  );
}

export default YourPortfolio;
