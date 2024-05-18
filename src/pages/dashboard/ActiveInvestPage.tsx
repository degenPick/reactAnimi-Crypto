import { Helmet } from 'react-helmet-async';
// sections
import ActiveInvest from '../../sections/dashboard/ActiveInvest';
// ----------------------------------------------------------------------

export default function ActiveInvestPage() {
  return (
    <>
      <Helmet>
        <title> Private Club | Scale-In </title>
      </Helmet>
      <ActiveInvest />
    </>
  );
}
