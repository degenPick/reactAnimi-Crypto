import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'src/redux/store';
import { selectors } from 'src/redux/user/user.slice';
import { priceForPassInvest } from 'src/utils/common';
import GradientTypography from '../../home/components/GrandientTypography';
import SubscribeText from '../../home/components/SubscribeText';
import { useI18nContext } from '../../../i18n/i18n-react';
import RedCheck from '../../../assets/images/grey-check.png';

const PassiveContentSummary = () => {
  const { LL } = useI18nContext();

  const subscription = useSelector(selectors.subscription);

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <GradientTypography
          fontSize={24}
          startColor="white"
          lastColor="white"
          sx={{ fontWeight: 700 }}
        >
          {LL.passive_invest_full()}
        </GradientTypography>
        <Stack direction="row">
          <Typography
            sx={{
              fontSize: 24,
              color: 'white',
              fontWeight: 700,
            }}
          >
            ${priceForPassInvest(subscription.investAmount)}
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              mt: 1,
            }}
            color="grey.400"
          >
            /month
          </Typography>
        </Stack>
        {/* <GradientTypography
          fontSize={24}
          startColor="#C0037B"
          lastColor="#FF1BCA"
          sx={{ fontWeight: 700 }}
        >
          {`${priceForPassInvest(subscription.investAmount)}$/month`}
        </GradientTypography> */}
      </Stack>
      <Stack my={2}>
        <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text1()} />
        <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text2()} />
        <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text3()} />
        <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text4()} />
        <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text5()} />
        <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text6()} />
        <SubscribeText icon={RedCheck} text={LL.pass_subscribe_text7()} />
      </Stack>
    </Stack>
  );
};

export default PassiveContentSummary;
