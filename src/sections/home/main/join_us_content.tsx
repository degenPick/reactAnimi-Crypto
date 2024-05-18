import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Typography,
  Stack,
  ButtonGroup,
  Button,
  Slider,
  IconButton,
  TextField,
  InputAdornment,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridAddIcon, GridRemoveIcon } from '@mui/x-data-grid';
import { useDispatch } from 'src/redux/store';
import { priceForPassInvest } from 'src/utils/common';
import { actions } from 'src/redux/user/user.slice';
import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';
import Discount from '../../../assets/images/discount.png';
import RedCheck from '../../../assets/images/red-check.png';
import BlueCheck from '../../../assets/images/blue-check.png';
import GradientTypography from '../components/GrandientTypography';
import SubscribeText from '../components/SubscribeText';
import { PATH_AUTH } from '../../../routes/paths';

const StyledIconButton = styled(IconButton)({
  width: 20,
  height: 20,
  padding: 0,
  opacity: 0.48,
  border: '1px solid white',
  '&:hover': { opacity: 1 },
});

const JoinUsContent = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'lg');
  const [periodValue, setPeriodValue] = useState('yearly');
  const [investValue, setInvestValue] = useState<number>(500);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickMonthly = () => {
    setPeriodValue('monthly');
  };

  const onClickYearly = () => {
    setPeriodValue('yearly');
  };

  const handleSliderChange = (e: any, value: any) => {
    setInvestValue(value);
  };

  const onAdd = () => {
    const value = investValue.toString();
    const newValue = parseInt(value, 10) + 500;
    if (newValue <= 500000) setInvestValue(newValue);
  };

  const onSubtract = () => {
    if (investValue >= 1000) setInvestValue(investValue - 500);
  };

  const goToRegisterFromActInvest = () => {
    dispatch(
      actions.setSubscriptionStatus({
        actInvest: true,
        passInvest: false,
        isMonthly: periodValue === 'monthly',
        investAmount: 0,
      })
    );
    navigate(PATH_AUTH.register);
  };

  const goToRegisterFromPassInvest = () => {
    dispatch(
      actions.setSubscriptionStatus({
        actInvest: false,
        passInvest: true,
        isMonthly: false,
        investAmount: investValue,
      })
    );
    navigate(PATH_AUTH.register);
  };

  const goToRegisterFromBoth = () => {
    dispatch(
      actions.setSubscriptionStatus({
        actInvest: true,
        passInvest: true,
        isMonthly: periodValue === 'monthly',
        investAmount: investValue,
      })
    );
    navigate(PATH_AUTH.register);
  };

  const goToRegister = () => {
    navigate(PATH_AUTH.register);
  };

  return (
    <Box
      px={{ md: 8, sm: 4, xs: 2 }}
      pt={1}
      pb={4}
      mx={{ md: 8, sm: 4, xs: 2 }}
      sx={{ backgroundColor: '#171F44', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
      id="content-join-us"
    >
      {/* <Stack flexDirection={isDesktop ? 'row' : 'column'} justifyContent="left" alignItems="center">
        <Stack direction="row" justifyContent="center" sx={{ width: { xs: '90%', lg: '320px' } }}>
          <GradientTypography
            fontSize={48}
            startColor="#EA485C"
            lastColor="#ED8A4C"
            sx={{ fontWeight: 700 }}
          >
            {LL.join_us_lower_font()}
          </GradientTypography>
        </Stack>
        <Typography variant="h5" textAlign={isDesktop ? 'left' : 'center'}>
          {LL.join_us_subtitle()}
        </Typography>
      </Stack> */}
      <Stack direction="row" mt={8} alignItems="center">
        <Stack
          direction="row"
          width="320px"
          flexShrink={0}
          justifyContent="center"
          display={isDesktop ? 'flex' : 'none'}
        >
          <Typography
            fontSize="60px"
            color="#ED8A4C1A"
            fontWeight={700}
            sx={{
              textOrientation: 'sideways',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            {LL.join_us_lower_font()}
          </Typography>
        </Stack>
        <Stack borderRadius={2} sx={{ backgroundColor: '#FFFFFF0A' }} p={4} alignItems="center">
          <Stack
            flexDirection={isDesktop ? 'row' : 'column'}
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems={isDesktop ? '' : 'center'}
          >
            <Stack
              my={2}
              p={2}
              borderRadius={2}
              width={isDesktop ? '46%' : '92%'}
              alignItems="center"
              sx={{ backgroundColor: '#FFFFFF1A' }}
            >
              <GradientTypography
                fontSize={36}
                startColor="#4481EB"
                lastColor="#04BEFE"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Private Club
              </GradientTypography>
              <Typography variant="h5" textAlign="center">
                {LL.join_us_left_card_title()}
              </Typography>
              <ButtonGroup
                variant="contained"
                sx={{
                  width: '100%',
                  mt: 3,
                  mb: 3,
                  p: '4px',
                  borderRadius: 1,
                  border: '1px solid #FFFFFF1A',
                  position: 'relative',
                }}
              >
                <Button
                  onClick={onClickMonthly}
                  sx={{
                    width: '50%',
                    background:
                      periodValue === 'monthly'
                        ? 'linear-gradient(to right, #4481EB, #04BEFE)'
                        : 'transparent',
                  }}
                >
                  Monthly
                </Button>
                <Button
                  onClick={onClickYearly}
                  sx={{
                    width: '50%',
                    background:
                      periodValue === 'yearly'
                        ? 'linear-gradient(to right, #4481EB, #04BEFE)'
                        : 'transparent',
                  }}
                >
                  Yearly
                </Button>
                <Box
                  component="img"
                  src={Discount}
                  height="64px"
                  sx={{ position: 'absolute', right: { xs: -36, sm: -16 }, top: -10 }}
                />
              </ButtonGroup>
              <Typography>
                {periodValue === 'yearly' ? (
                  <>
                    <Box component="span" fontSize="24px">
                      Price:{' '}
                    </Box>
                    <Box component="span" fontSize="24px" fontWeight={700}>
                      2000
                    </Box>
                    <Box component="span" fontSize="24px">
                      $
                    </Box>
                    /year
                    <Box component="span" fontSize="24px">
                      &nbsp;&nbsp;OR&nbsp;&nbsp;
                    </Box>
                    <Box component="span" fontSize="24px" fontWeight={700}>
                      185
                    </Box>
                    <Box component="span" fontSize="24px">
                      $
                    </Box>
                    /month
                  </>
                ) : (
                  <>
                    <Box component="span" fontSize="24px">
                      Price:{' '}
                    </Box>
                    <Box component="span" fontSize="24px" fontWeight={700}>
                      185
                    </Box>
                    <Box component="span" fontSize="24px">
                      $
                    </Box>
                    /month
                    <Box component="span" fontSize="24px">
                      &nbsp;&nbsp;OR&nbsp;&nbsp;
                    </Box>
                    <Box component="span" fontSize="24px" fontWeight={700}>
                      2000
                    </Box>
                    <Box component="span" fontSize="24px">
                      $
                    </Box>
                    /year
                  </>
                )}
              </Typography>

              <Typography variant="body2" color="grey.400">
                depends on the choice above
              </Typography>
              <Stack mt={2}>
                <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text1()} />
                <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text2()} />
                <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text3()} />
                <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text4()} />
                <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text5()} />
                <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text6()} />
              </Stack>
              <Divider sx={{ width: '100%' }} />
              <Button
                sx={{
                  background: 'linear-gradient(to right, #4481EB, #04BEFE)',
                  my: 2,
                  py: 1,
                  px: 3,
                  color: '#fff',
                }}
                onClick={goToRegisterFromActInvest}
              >
                {LL.subscribe()}
              </Button>
            </Stack>
            <Stack
              my={2}
              p={2}
              borderRadius={2}
              width={isDesktop ? '46%' : '92%'}
              alignItems="center"
              sx={{ backgroundColor: '#FFFFFF1A' }}
            >
              <GradientTypography
                fontSize={36}
                startColor="#C0037B"
                lastColor="#FF1BCA"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Quant Invest
              </GradientTypography>
              <Typography variant="h5" textAlign="center">
                {LL.join_us_right_card_title()}
              </Typography>
              <Stack my={2} width="100%" alignItems="center">
                <Stack flexDirection="row" justifyContent="center" alignItems="center">
                  <StyledIconButton color="inherit" onClick={onSubtract}>
                    <GridRemoveIcon sx={{ fontSize: 18 }} />
                  </StyledIconButton>
                  <TextField
                    value={investValue}
                    onChange={(e: any) => {
                      if (e.target.value <= 500000) setInvestValue(e.target.value);
                    }}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      '&.MuiFormControl-root': {
                        my: 0,
                      },
                      m: 1,
                      width: '120px',
                      '& .MuiOutlinedInput-root': {
                        fontWeight: 700,
                        '& fieldset': {
                          opacity: 0.6,
                          borderColor: '#fff',
                        },
                        '&:hover fieldset': {
                          borderColor: '#fff',
                          opacity: 0.6,
                        },
                        '&:focus fieldset': {
                          borderColor: '#fff',
                          opacity: 0.6,
                        },
                        input: {
                          color: '#fff',
                          textAlign: 'center',
                        },
                      },
                    }}
                    InputProps={{
                      endAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                  />
                  <StyledIconButton color="inherit" onClick={onAdd}>
                    <GridAddIcon sx={{ fontSize: 18 }} />
                  </StyledIconButton>
                </Stack>

                <Slider
                  aria-label="Temperature"
                  min={500}
                  max={500000}
                  defaultValue={500}
                  value={parseInt(investValue.toString(), 10)}
                  step={500}
                  color="secondary"
                  onChange={handleSliderChange}
                  sx={{ width: '90%' }}
                />
              </Stack>
              <Box>
                <Typography sx={{ ml: 1 }}>
                  <Box component="span" fontSize="24px">
                    Price:
                  </Box>{' '}
                  <Box component="span" fontSize="24px" fontWeight={700}>
                    {`${priceForPassInvest(investValue).toFixed(2)}`}
                  </Box>
                  <Box component="span" fontSize="24px">
                    $
                  </Box>
                  /month
                </Typography>
              </Box>
              <Typography variant="body2" color="grey.400">
                depends of the invested amount
              </Typography>
              <Stack alignSelf="flex-start" mt={2}>
                <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text1()} />
                <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text2()} />
                <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text3()} />
                <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text4()} />
                <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text5()} />
                <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text6()} />
                <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text7()} />
              </Stack>
              <Divider sx={{ width: '100%' }} />
              <Button
                sx={{
                  background: 'linear-gradient(to right, #C0037B, #FF1BCA)',
                  my: 2,
                  py: 1,
                  px: 3,
                  color: '#fff',
                }}
                onClick={goToRegisterFromPassInvest}
              >
                {LL.subscribe()}
              </Button>
            </Stack>
          </Stack>
          <Button
            sx={{
              background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
              my: 4,
              py: 1,
              px: 3,
              color: '#fff',
              width: '240px',
            }}
            onClick={goToRegisterFromBoth}
          >
            {LL.subscribe_both()}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default JoinUsContent;
