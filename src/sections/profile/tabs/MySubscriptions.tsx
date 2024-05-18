import { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import axiosInstance from 'src/utils/axios';
import useLegacyEffect from 'src/hooks/useLegacyEffect';
import { useDispatch } from 'src/redux/store';
import { actions } from 'src/redux/user/user.slice';
import SubLoadingScreen from 'src/components/sub-loading-screen/SubLoadingScreen';
import MySubscriptionItem, { ICardMethod, IPaymentDetails } from './MySubscriptionItem';

function MySubscriptions() {
  const [isActiveSubscribed, setActiveSubscribed] = useState<boolean>(false);
  const [isPassiveSubscribed, setPassiveSubscribed] = useState<boolean>(false);

  const [activeDetails, setActiveDetails] = useState<IPaymentDetails>();
  const [passiveDetails, setPassiveDetails] = useState<IPaymentDetails>();
  const [passiveInvestAmount, setPassiveInvestAmount] = useState<number>(0);

  const [isLoading, setLoading] = useState<boolean>(true);

  const [cardMethod, setCardMethod] = useState<ICardMethod | undefined>();

  const dispatch = useDispatch();

  useLegacyEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const typeResponse = await axiosInstance.post('api/v1/users/bc-connect-type');

        const type = typeResponse.data;
        if (type.type !== '') dispatch(actions.setBcConnectType(type.type));

        const response = await axiosInstance.post('api/v1/users/subscription-status');
        const data = response.data;

        setActiveSubscribed(data.details.activeStatus);
        setPassiveSubscribed(data.details.passiveStatus);

        setActiveDetails(data.details.activeSubscriptionDetails);
        setPassiveDetails(data.details.passiveSubscriptionDetails);

        setCardMethod(data.details.method);

        setPassiveInvestAmount(data.status.investAmount);
      } catch (error) {
        console.log('error ==> ', error);
      }
      setLoading(false);
    };

    fetch();
  }, [dispatch]);

  if (isLoading) return <SubLoadingScreen />;

  return (
    <Box sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2, mb: 2 }}>
      <Stack direction="row" gap={2}>
        <MySubscriptionItem
          isSubscribed={isActiveSubscribed}
          setSubscribed={setActiveSubscribed}
          cardMethod={cardMethod}
          details={activeDetails}
          investAmount={passiveInvestAmount}
        />
        <MySubscriptionItem
          type={1}
          isSubscribed={isPassiveSubscribed}
          setSubscribed={setPassiveSubscribed}
          cardMethod={cardMethod}
          details={passiveDetails}
          investAmount={passiveInvestAmount}
        />
      </Stack>
    </Box>
  );
}

export default MySubscriptions;
