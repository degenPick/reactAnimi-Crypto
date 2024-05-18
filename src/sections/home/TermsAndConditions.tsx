import { Container } from '@mui/material';
import LegalNotice from './terms/LegalNotice';
import LegalAgreement from './terms/LegalAgreement';

export default function TermsAndConditions() {
  return (
    <Container>
      <LegalNotice />
      <LegalAgreement />
    </Container>
  );
}
