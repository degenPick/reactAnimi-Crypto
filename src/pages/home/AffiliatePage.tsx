import { Helmet } from 'react-helmet-async';
// sections
import Affiliate from '../../sections/home/Affiliate';

// ----------------------------------------------------------------------

export default function AffiliatePage() {
  return (
    <>
      <Helmet>
        <title> Affiliate | Scale-In </title>
      </Helmet>

      <Affiliate />
    </>
  );
}
