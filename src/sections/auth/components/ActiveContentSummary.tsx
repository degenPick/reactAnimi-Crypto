import { Stack, Typography } from '@mui/material';
import { useSelector } from 'src/redux/store';
import { selectors } from 'src/redux/user/user.slice';

import GradientTypography from '../../home/components/GrandientTypography';
import SubscribeText from '../../home/components/SubscribeText';
import BlueCheck from '../../../assets/images/grey-check.png';
import { useI18nContext } from '../../../i18n/i18n-react';

const ActiveContentSummary = () => {
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
          {LL.active_invest_full()}
        </GradientTypography>

        <Stack direction="row">
          <Typography
            sx={{
              fontSize: 24,
              color: 'white',
              fontWeight: 700,
            }}
          >
            ${subscription.isMonthly ? '185' : '2000'}
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              mt: 1,
            }}
            color="grey.400"
          >
            {subscription.isMonthly ? '/month' : '/year'}
          </Typography>
        </Stack>

        {/* <GradientTypography
          fontSize={24}
          startColor="#4481EB"
          lastColor="#04BEFE"
          sx={{ fontWeight: 700 }}
        >
          {subscription.isMonthly ? '185$/month' : '2000$/year'}
        </GradientTypography> */}
      </Stack>
      <Stack my={2}>
        <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text1()} />
        <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text2()} />
        <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text3()} />
        <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text4()} />
        <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text5()} />
        <SubscribeText icon={BlueCheck} text={LL.act_subscribe_text6()} />
      </Stack>
    </Stack>
  );
};

export default ActiveContentSummary;
