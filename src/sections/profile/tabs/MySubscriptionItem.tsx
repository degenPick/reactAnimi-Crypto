import { LoadingButton } from '@mui/lab';
import { alpha } from '@mui/material/styles';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import React, { useEffect, useState } from 'react';
import GradientTypography from 'src/sections/home/components/GrandientTypography';
import Image from 'src/components/image';
import { useSelector } from 'src/redux/store';
import { selectors } from 'src/redux/user/user.slice';
import { useDateRangePicker } from 'src/components/date-range-picker';
import DateRangePicker from 'src/components/date-range-picker/DateRangePicker';
import { fDate } from 'src/utils/formatTime';

export interface ICardMethod {
  type: string;
  brand: string;
  last4: string;
}

export interface IPaymentDetails {
  start: string;
  end: string;
  price: string;
  paid: string;
  amountDue: string;
  nextPaymentDue: string;
  interval: string;
}

interface IMySubscriptionItemProps {
  type?: number;
  isSubscribed: boolean;
  setSubscribed: (subscribed: boolean) => void;
  cardMethod: ICardMethod | undefined;
  details: IPaymentDetails | undefined;
  investAmount: number;
}

function MySubscriptionItem({
  type = 0,
  isSubscribed,
  setSubscribed,
  cardMethod,
  details,
  investAmount,
}: IMySubscriptionItemProps) {
  const pickerInput = useDateRangePicker(new Date(), new Date());
  const bcConnectType = useSelector(selectors.bcConnectType);

  const getCardIconName = (brandName: string) => {
    switch (brandName.toLowerCase()) {
      case 'visa':
        return '/assets/icons/visa.svg';
      case 'mastercard':
        return '/assets/icons/mastercard.svg';
      case 'american express':
        return '/assets/icons/amex.svg';
      case 'discover':
        return '/assets/icons/discover.svg';
      case 'jcb':
        return '/assets/icons/jcb.svg';
      default:
        return ''; // No matching icon found
    }
  };

  return (
    <>
      <Box
        sx={{
          color: 'grey.200',
          backgroundColor: '#0F1532',
          borderRadius: 1,
          p: 2,
          mb: 2,
          flex: 1,
          position: 'relative',
        }}
      >
        <Stack p={2} borderRadius={2} sx={{ backgroundColor: '#141A36' }}>
          <Stack alignItems="center" justifyContent="space-between" direction="row" sx={{ mt: 2 }}>
            <GradientTypography
              fontSize={36}
              startColor={type === 0 ? '#4481EB' : '#C0037B'}
              lastColor={type === 0 ? '#04BEFE' : '#FF1BCA'}
              sx={{ fontWeight: 700 }}
            >
              {type === 0 ? 'Private Club' : 'Quant Invest'}
            </GradientTypography>

            <LoadingButton
              color="inherit"
              size="medium"
              variant="contained"
              sx={{
                background:
                  type === 0
                    ? 'linear-gradient(to right, #4481EB, #04BEFE)'
                    : 'linear-gradient(to right, #C0037B, #FF1BCA)',
                color: '#fff',
              }}
            >
              Renew Subscription
            </LoadingButton>
          </Stack>

          {type === 1 && bcConnectType === '' && (
            <Stack alignItems="flex-start">
              <Stack
                sx={{ backgroundColor: '#5D2D44', p: 1, borderRadius: 1, mt: 2 }}
                direction="row"
                gap={1}
              >
                <WarningIcon color="error" />
                <Typography variant="subtitle2" sx={{ color: 'white' }}>
                  Your <b>CEX</b> Account is not connected to our platform.
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Go To Documentation
                </Typography>
              </Stack>
            </Stack>
          )}

          {type === 0 && (
            <Stack alignItems="flex-start">
              <Stack
                sx={{ backgroundColor: '#5D2D44', p: 1, borderRadius: 1, mt: 2 }}
                direction="row"
                gap={1}
              >
                <WarningIcon color="error" />
                <Typography variant="subtitle2" sx={{ color: 'white' }}>
                  Your <b>Discord</b> Account is not connected to our platform.
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Go To Documentation
                </Typography>
              </Stack>
            </Stack>
          )}
          <Stack sx={{ backgroundColor: '#202540', py: 2, px: 2, mt: 2, borderRadius: 1 }}>
            <Stack alignItems="center" justifyContent="space-between" direction="row">
              <Typography variant="h6" color="text.secondary">
                Payment Frequency:
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {details?.interval === 'year' ? 'Yearly' : 'Monthly'}
              </Typography>
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Stack alignItems="center" justifyContent="space-between" direction="row">
              <Typography variant="h6" color="text.secondary">
                Subscription Period:
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {details?.start &&
                  details?.start.split('T').length > 0 &&
                  details?.start.split('T')[0]}{' '}
                to{' '}
                {details?.end && details?.end.split('T').length > 0 && details?.end.split('T')[0]}
              </Typography>
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Stack alignItems="center" justifyContent="space-between" direction="row">
              <Typography variant="h6" color="text.secondary">
                Subscription Price:
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {details?.price}$
              </Typography>
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Stack alignItems="center" justifyContent="space-between" direction="row">
              <Typography variant="h6" color="text.secondary">
                Paid:
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {details?.paid}$
              </Typography>
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Stack alignItems="center" justifyContent="space-between" direction="row">
              <Typography variant="h6" color="text.secondary">
                {type === 0 ? 'Still to Pay:' : 'Total investment:'}
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {type === 0 ? `${details?.amountDue ?? 0}$` : `${investAmount} USDT`}
              </Typography>
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Stack alignItems="center" justifyContent="space-between" direction="row">
              <Typography variant="h6" color="text.secondary">
                Payment Method Used:
              </Typography>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 1,
                  width: 60,
                  height: 44,
                }}
              >
                <Image
                  src={getCardIconName(cardMethod?.brand ?? '')}
                  width={34}
                  height={26}
                  sx={{ width: 34, height: 26 }}
                />
              </Stack>
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Stack alignItems="center" justifyContent="space-between" direction="row">
              <Typography variant="h6" color="text.secondary">
                Next Payment Due:
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                ${details?.amountDue ?? 0} $ on{' '}
                {details?.end && details?.end.split('T').length > 0 && details?.end.split('T')[0]}
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Stack alignItems="center" justifyContent="space-between" direction="row">
            <LoadingButton
              color="inherit"
              size="large"
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #ee404c33, #ee404c33)',
                color: '#EE404C',
                '&:hover': {
                  background: 'linear-gradient(to right, #ee404c33, #ee404c33)',
                },
              }}
              onClick={() => {}}
            >
              Cancel Subscription
            </LoadingButton>
            <LoadingButton
              color="inherit"
              size="large"
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #199b5933, #199b5933)',
                color: '#1AC26D',
                '&:hover': {
                  background: 'linear-gradient(to right, #199b5933, #199b5933)',
                },
              }}
            >
              Give Feedback
            </LoadingButton>
          </Stack>
        </Stack>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Your Invoices
        </Typography>

        <Box
          sx={{
            color: 'grey.200',
            backgroundColor: 'transparent',
            borderRadius: 1,
            p: 2,
            mt: 2,
            border: '1px solid #242945',
          }}
        >
          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Please choose your invoice period
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }} />

          <Button
            fullWidth
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
            onClose={pickerInput.onClose}
            isError={pickerInput.isError}
          />
        </Box>

        <Stack alignItems="center">
          <LoadingButton
            color="inherit"
            size="large"
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
              color: '#FFFFFF',
              mt: 2,
            }}
          >
            Download Receipt
          </LoadingButton>
        </Stack>
        {!isSubscribed && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: alpha('#363A53', 0.95),
              borderRadius: 1,
            }}
          >
            <Stack
              sx={{
                backgroundColor: '#202540',
                px: 4,
                py: 4,
                borderRadius: 1,
              }}
              alignItems="center"
            >
              <Image
                src={
                  type === 0
                    ? '/assets/active_invest/active_invest.svg'
                    : '/assets/passive_invest/passive_invest.svg'
                }
                sx={{ width: 100, height: 100, mb: 4 }}
              />
              <Typography variant="h6">
                You didn’t subscribe to {type === 0 ? <b>Private Club</b> : <b>Quant Invest</b>}
              </Typography>

              <LoadingButton
                color="inherit"
                size="large"
                variant="contained"
                sx={{
                  background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
                  color: '#FFFFFF',
                  mt: 4,
                }}
                onClick={() => {}}
              >
                Subscribe
              </LoadingButton>
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}

export default MySubscriptionItem;
