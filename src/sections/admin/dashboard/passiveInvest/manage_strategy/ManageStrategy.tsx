import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import {
  getPythClusterApiUrl,
  getPythProgramKeyForCluster,
  PythCluster,
  PriceStatus,
  PythConnection,
} from '@pythnetwork/client';
import { Connection } from '@solana/web3.js';
import io from 'socket.io-client';

import { useSettingsContext } from 'src/components/settings';
import { HOST_API_KEY } from 'src/config-global';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import axiosInstance from 'src/utils/axios';
import { useDispatch } from 'src/redux/store';
import { actions } from 'src/redux/price/price.slice';
import Image from 'src/components/image/Image';
import ManageStrategyTable from './ManageStrategyTable';
import ManageStrategySellingTable from './ManageStrategySellingTable';

const PYTHNET_CLUSTER_NAME: PythCluster = 'pythnet';
const connection = new Connection(getPythClusterApiUrl(PYTHNET_CLUSTER_NAME));
const pythPublicKey = getPythProgramKeyForCluster(PYTHNET_CLUSTER_NAME);
const pythConnection = new PythConnection(connection, pythPublicKey);

function compareObjects(
  obj1: {
    [key: string]: { [key: string]: boolean };
  },
  obj2: {
    [key: string]: { [key: string]: boolean };
  }
) {
  // Get the keys of the objects

  if (obj1.BTC.first !== obj2.BTC.first) return false;
  if (obj1.ETH.first !== obj2.ETH.first) return false;
  if (obj1.AVAX.first !== obj2.AVAX.first) return false;
  if (obj1.SOL.first !== obj2.SOL.first) return false;

  if (obj1.BTC.second !== obj2.BTC.second) return false;
  if (obj1.ETH.second !== obj2.ETH.second) return false;
  if (obj1.AVAX.second !== obj2.AVAX.second) return false;
  if (obj1.SOL.second !== obj2.SOL.second) return false;

  if (obj1.BTC.third !== obj2.BTC.third) return false;
  if (obj1.ETH.third !== obj2.ETH.third) return false;
  if (obj1.AVAX.third !== obj2.AVAX.third) return false;
  if (obj1.SOL.third !== obj2.SOL.third) return false;
  return true;
}

function ManageStrategy() {
  const { themeLayout, onCloseLayout } = useSettingsContext();
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [isModified, setModified] = useState<boolean>(false);

  const [mvrvValue, setMvrvValue] = useState<string>('');

  const [canEdit, setCanEdit] = useState<boolean>(false);

  const prevBuyingPriceStatusRef = useRef<{
    [key: string]: { [key: string]: string };
  }>({
    BTC: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    ETH: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    AVAX: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    SOL: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
  });

  const prevSellingPriceStatusRef = useRef<{
    [key: string]: { [key: string]: string };
  }>({
    BTC: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    ETH: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    AVAX: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    SOL: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
  });

  const [buyingPriceStatus, setBuyingPriceStatus] = useState<{
    [key: string]: { [key: string]: string };
  }>({
    BTC: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    ETH: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    AVAX: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    SOL: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
  });

  const [sellingPriceStatus, setSellingPriceStatus] = useState<{
    [key: string]: { [key: string]: string };
  }>({
    BTC: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    ETH: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    AVAX: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
    SOL: {
      first: 'X',
      second: 'X',
      third: 'X',
    },
  });

  const prevBuyingButtonStatusRef = useRef<{
    [key: string]: { [key: string]: boolean };
  }>({
    BTC: {
      first: false,
      second: false,
      third: false,
    },
    ETH: {
      first: false,
      second: false,
      third: false,
    },
    AVAX: {
      first: false,
      second: false,
      third: false,
    },
    SOL: {
      first: false,
      second: false,
      third: false,
    },
  });

  const prevSellingButtonStatusRef = useRef<{
    [key: string]: { [key: string]: boolean };
  }>({
    BTC: {
      first: false,
      second: false,
      third: false,
    },
    ETH: {
      first: false,
      second: false,
      third: false,
    },
    AVAX: {
      first: false,
      second: false,
      third: false,
    },
    SOL: {
      first: false,
      second: false,
      third: false,
    },
  });

  const [buyingButtonStatus, setBuyingButtonStatus] = useState<{
    [key: string]: { [key: string]: boolean };
  }>({
    BTC: {
      first: false,
      second: false,
      third: false,
    },
    ETH: {
      first: false,
      second: false,
      third: false,
    },
    AVAX: {
      first: false,
      second: false,
      third: false,
    },
    SOL: {
      first: false,
      second: false,
      third: false,
    },
  });

  const [sellingButtonStatus, setSellingButtonStatus] = useState<{
    [key: string]: { [key: string]: boolean };
  }>({
    BTC: {
      first: false,
      second: false,
      third: false,
    },
    ETH: {
      first: false,
      second: false,
      third: false,
    },
    AVAX: {
      first: false,
      second: false,
      third: false,
    },
    SOL: {
      first: false,
      second: false,
      third: false,
    },
  });

  useLegacyEffect(() => {
    const fetch = async () => {
      const response = await axiosInstance.get('/api/v1/admin/manage_strategy');
      const data = response.data.data;
      if (data.buying && Object.keys(data.buying).length > 0) {
        prevBuyingButtonStatusRef.current = data.buying;
        setBuyingButtonStatus(data.buying);
      }
      if (data.selling && Object.keys(data.selling).length > 0) {
        prevSellingButtonStatusRef.current = data.selling;
        setSellingButtonStatus(data.selling);
      }
    };
    fetch();
  }, []);

  useLegacyEffect(() => {
    const fetch = async () => {
      const response = await axiosInstance.get('/api/v1/admin/highLowPrices');
      const data = response.data;
      dispatch(actions.setHighAndLowPrice(data));
    };
    fetch();
  }, [dispatch]);

  useLegacyEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/admin/mvrvzscore');
        const data = response.data.data;
        dispatch(actions.setMvrvzscore(data.current_mvrvzscore));
      } catch (error) {
        console.log('error ==> ', error);
      }
    };
    fetch();
  }, [dispatch]);

  const changeMvrvZscore = async () => {
    try {
      const response = await axiosInstance.post('/api/v1/admin/set_mvrvzscore', {
        value: mvrvValue,
      });
    } catch (error) {
      console.log('error ==> ', error);
    }
  };

  const syncMvrvZscore = async () => {
    try {
      const response = await axiosInstance.post('/api/v1/admin/sync_mvrvzscore');
    } catch (error) {
      console.log('error ==> ', error);
    }
  };

  const updateData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/api/v1/admin/manage_strategy', {
        buying: buyingButtonStatus,
        selling: sellingButtonStatus,
      });
      prevBuyingButtonStatusRef.current = buyingButtonStatus;
      prevSellingButtonStatusRef.current = sellingButtonStatus;
      setModified(false);
    } catch (error) {
      console.log('error');
    } finally {
      setLoading(false);
      setCanEdit(false);
    }
  };

  // useLegacyEffect(() => {
  //   const fetch = async () => {
  //     const response = await axiosInstance.get('https://bitcoinition.com/current.json');
  //     // const price_data = response.data.data;

  //     // const mvrvZscore = price_data.current_mvrvzscore;
  //     // dispatch(actions.setMvrvzscore(mvrvZscore));
  //   };

  //   fetch();
  // }, [dispatch]);

  useLegacyEffect(() => {
    const socket = io(`${HOST_API_KEY}`);

    socket.on('mvrvZscore', (message) => {
      dispatch(actions.setMvrvzscore(message));
    });

    socket.on('buyingPrice', (message) => {
      const buyingPrice = JSON.parse(message);

      dispatch(actions.setBuyingPrice(buyingPrice));
    });

    socket.on('sellingPrice', (message) => {
      const sellingPrice = JSON.parse(message);

      dispatch(actions.setSellingPrice(sellingPrice));
    });

    socket.on('referencePrice', (message) => {
      const referencePrice = JSON.parse(message);

      console.log('referencePrice ==> ', referencePrice);
      dispatch(actions.setReferencePrice(referencePrice));
    });

    socket.on('realPrice', (message) => {
      const realPrice = JSON.parse(message);

      dispatch(actions.setRealPrice(realPrice));
    });

    // socket.on('ethStatus', (message) => {
    //   const ethStatus = JSON.parse(message);
    //   console.log('ethStatus', ethStatus);

    //   setBuyingButtonStatus((status) => ({
    //     ...status,
    //     ETH: ethStatus,
    //   }));
    // });

    // socket.on('avaxStatus', (message) => {
    //   const avaxStatus = JSON.parse(message);
    //   console.log('avaxStatus', avaxStatus);

    //   setBuyingButtonStatus((status) => ({
    //     ...status,
    //     AVAX: avaxStatus,
    //   }));
    // });

    // socket.on('solStatus', (message) => {
    //   const solStatus = JSON.parse(message);
    //   console.log('solStatus', solStatus);

    //   setBuyingButtonStatus((status) => ({
    //     ...status,
    //     SOL: solStatus,
    //   }));
    // });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  useLegacyEffect(() => {
    if (
      !compareObjects(buyingButtonStatus, prevBuyingButtonStatusRef.current) ||
      !compareObjects(sellingButtonStatus, prevSellingButtonStatusRef.current)
    ) {
      setModified(true);
    } else setModified(false);
  }, [buyingButtonStatus, sellingButtonStatus]);

  return (
    <Box sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2, mb: 2 }}>
      <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 2, mb: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
          <Typography variant="h6"> Orders Settings</Typography>

          <Box>
            <TextField
              label="mvrvZscore"
              value={mvrvValue}
              onChange={(e) => setMvrvValue(e.target.value)}
              sx={{ mr: 2 }}
            />
            <Button sx={{ mr: 2 }} variant="contained" onClick={() => changeMvrvZscore()}>
              Change
            </Button>
            <Button sx={{ mr: 2 }} variant="contained" onClick={() => syncMvrvZscore()}>
              Sync
            </Button>
            <IconButton
              onClick={() => {
                setCanEdit(!canEdit);
              }}
            >
              <Image src="/assets/icons/edit.svg" />
            </IconButton>
          </Box>
        </Stack>

        <Divider sx={{ mt: 2, mb: 2 }} />

        <Grid container>
          <Grid item xs={12} md={12} lg={6}>
            <Box
              sx={{
                color: 'grey.200',
                backgroundColor: '#152A3C',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                p: 4,
                mr: 1,
                position: 'relative',
              }}
            >
              <Stack justifyContent="space-between" alignItems="center">
                <Typography variant="h4" fontWeight={700} color="#1AC26D">
                  {' '}
                  Buying Orders
                </Typography>
                <Stack
                  sx={{ position: 'absolute', right: '20px', top: 0, height: '100%' }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <IconButton>
                    <Box sx={{ backgroundColor: 'white', p: 1, borderRadius: '4px' }}>
                      <Image src="/assets/icons/alarm.svg" />
                    </Box>
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ backgroundColor: '#202640', mr: 1 }}>
              <Box sx={{ p: 2 }}>
                <ManageStrategyTable
                  canEdit={canEdit}
                  buttonStatus={buyingButtonStatus}
                  setButtonStatus={setBuyingButtonStatus}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Box
              sx={{
                color: 'grey.200',
                backgroundColor: '#ee404c1a',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                p: 4,
                ml: 1,
                position: 'relative',
              }}
            >
              <Stack justifyContent="space-between" alignItems="center">
                <Typography variant="h4" fontWeight={700} color="#EE404C">
                  {' '}
                  Selling Orders
                </Typography>
                <Stack
                  sx={{ position: 'absolute', right: '20px', top: 0, height: '100%' }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <IconButton>
                    <Box sx={{ backgroundColor: 'white', p: 1, borderRadius: '4px' }}>
                      <Image src="/assets/icons/alarm.svg" />
                    </Box>
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ backgroundColor: '#202640', ml: 1 }}>
              <Box sx={{ p: 2 }}>
                <ManageStrategySellingTable
                  canEdit={canEdit}
                  buttonStatus={sellingButtonStatus}
                  setButtonStatus={setSellingButtonStatus}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 2, mb: 4 }} />
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={{ flex: 1 }} />
          <LoadingButton
            size="medium"
            type="submit"
            variant="contained"
            loading={isLoading}
            disabled={!isModified}
            sx={{
              background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
              color: '#fff',
              px: 3,
              py: 1,
              opacity: isModified ? 1.0 : 0.6,
              '&.MuiLoadingButton-root': {
                '&.Mui-disabled': {
                  color: !isLoading ? '#fff' : 'transparent',
                },
              },
              '& .MuiLoadingButton-loadingIndicator': {
                color: 'red',
              },
            }}
            onClick={() => updateData()}
          >
            {isModified ? 'UPDATE' : 'SAVE'}
          </LoadingButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default ManageStrategy;
