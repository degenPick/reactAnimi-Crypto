import { Helmet } from 'react-helmet-async';
// sections
import TermsAndConditions from '../../sections/home/TermsAndConditions';

// ----------------------------------------------------------------------

export default function TermsAndConditionsPage() {
  return (
    <>
      <Helmet>
        <title> Leggal Notice | Scale-In </title>
      </Helmet>

      <TermsAndConditions />
    </>
  );
}
