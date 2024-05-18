import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { SuccessIcon } from 'src/theme/overrides/CustomIcons';
import React, { useEffect, useState } from 'react';
import { actions, selectors } from 'src/redux/user/user.slice';
import { useDispatch, useSelector } from 'src/redux/store';
import axiosInstance from 'src/utils/axios';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import Label from 'src/components/label/Label';
import SvgColor from 'src/components/svg-color';
import InputApiKeyDialog from './InputApiKeyDialog';
import BinanceInputApiKeyDialog from './BinanceInputApiKeyDialog';

interface DataProps {
  width: number;
  height: number;
  path: string;
  color: string;
  type: string;
}

const datas: DataProps[] = [
  {
    width: 250,
    height: 30,
    color: '#404296',
    path: '/assets/kraken.svg',
    type: 'kraken',
  },
  {
    width: 170,
    height: 40,
    color: '#FFFFFF',
    path: '/assets/bybit.svg',
    type: 'bybit',
  },
  {
    width: 250,
    height: 40,
    color: '#F3BA2F',
    path: '/assets/binance.svg',
    type: 'binance',
  },
  {
    width: 250,
    height: 40,
    color: '#23AF91',
    path: '/assets/kucoin.svg',
    type: 'kucoin',
  },
  {
    width: 250,
    height: 40,
    color: '#0052FF',
    path: '/assets/coinbase.svg',
    type: 'coinbase',
  },
  {
    width: 250,
    height: 40,
    color: '#FFFFFF',
    path: '/assets/okx.svg',
    type: 'okx',
  },
];

function SyncYourAccount() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const [showInputDlg, setShowInputDlg] = useState<boolean>(false);
  const [showBinanceInputDlg, setShowBinanceInputDlg] = useState<boolean>(false);

  const bcConnectType = useSelector(selectors.bcConnectType);
  const dispatch = useDispatch();

  useLegacyEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.post('api/v1/users/bc-connect-type');

        const data = response.data;
        if (data.type !== '') dispatch(actions.setBcConnectType(data.type));
      } catch (error) {
        console.log('error ==> ', error);
      }
    };

    fetch();
  }, [dispatch]);

  useEffect(() => {
    if (bcConnectType === 'kucoin') setSelectedIndex(3);
    else if (bcConnectType === 'binance') setSelectedIndex(2);
    else setSelectedIndex(-1);
  }, [bcConnectType]);

  const supportsAPI = (item: DataProps) => {
    if (item.type === 'kucoin' || item.type === 'binance') return true;
    return false;
  };

  const unSyncKey = async () => {
    try {
      await axiosInstance.post('api/v1/users/unsync-key');
      dispatch(actions.setBcConnectType(''));
    } catch (error) {
      console.log('error ==> ', error);
    }
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
      {selectedIndex === -1 && (
        <Stack direction="row">
          <Typography variant="subtitle2">Click On The Exchange You Want to Sync</Typography>
          <Typography variant="subtitle2" sx={{ color: 'grey.600', ml: 1 }}>
            (Only One)
          </Typography>
        </Stack>
      )}

      {selectedIndex > -1 && (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="subtitle2">Your Account is synced to</Typography>
            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                backgroundColor: '#242944',
                border: 'solid',
                borderColor: '#1AC26D',
                borderWidth: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SvgColor
                src={datas[selectedIndex].path}
                sx={{ width: datas[selectedIndex].width, height: datas[selectedIndex].height }}
                color={datas[selectedIndex].color}
              />
            </Box>
            {/* <Stack
              sx={{ backgroundColor: '#5D2D44', p: 1, borderRadius: 1 }}
              direction="row"
              gap={1}
            >
              <WarningIcon color="error" />
              <Typography variant="subtitle2" sx={{ color: 'white' }}>
                API is Disconnected
              </Typography>
            </Stack> */}

            <Stack
              sx={{ background: 'rgba(26, 194, 109, 0.3)', p: 1, borderRadius: 1 }}
              direction="row"
              gap={1}
            >
              <SuccessIcon color="success" />
              <Typography variant="subtitle2" sx={{ color: 'white' }}>
                API is Connected
              </Typography>
            </Stack>
          </Stack>
          <Button variant="contained" color="error" onClick={() => unSyncKey()}>
            Unsync My Account
          </Button>
        </Stack>
      )}

      <Divider sx={{ mt: 2 }} />

      <>
        <Stack direction="row" sx={{ mt: 2 }} spacing={2}>
          {datas.map((item: DataProps, index: number) => (
            <Button
              sx={{
                borderRadius: 1,
                p: 2,
                backgroundColor: '#242944',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              disabled={bcConnectType !== '' || (item.type !== 'kucoin' && item.type !== 'binance')}
              onClick={() => {
                // setSelectedIndex(index)
                if (bcConnectType === '') {
                  if (item.type === 'kucoin') setShowInputDlg(true);
                  else if (item.type === 'binance') {
                    setShowBinanceInputDlg(true);
                  }
                }
              }}
            >
              <SvgColor
                src={item.path}
                sx={{
                  width: item.width,
                  height: item.height,
                  opacity: supportsAPI(item) ? 1.0 : 0.2,
                }}
                color={item.color}
              />

              {!supportsAPI(item) && (
                <Stack
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography color="yellow" variant="h4">
                    Coming Soon
                  </Typography>
                </Stack>
              )}
            </Button>
          ))}
        </Stack>
      </>

      <InputApiKeyDialog open={showInputDlg} onClose={() => setShowInputDlg(false)} />
      <BinanceInputApiKeyDialog
        open={showBinanceInputDlg}
        onClose={() => setShowBinanceInputDlg(false)}
      />
    </Box>
  );
}

export default SyncYourAccount;
