import { Helmet } from 'react-helmet-async';
import MySubscriptions from 'src/sections/profile/tabs/MySubscriptions';

// sections

// ----------------------------------------------------------------------

export default function MySubscriptionsPage() {
  return (
    <>
      <Helmet>
        <title> My Subscriptions | Scale-In </title>
      </Helmet>
      <MySubscriptions />
    </>
  );
}
