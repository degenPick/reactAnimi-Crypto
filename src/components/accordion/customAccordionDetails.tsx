import { styled } from '@mui/material/styles';
import AccordionDetails from '@mui/material/AccordionDetails';

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    margin: '0px 48px 20px 48px',
    marginRight: '1.5rem',
    marginBottom: '0.625rem',
  }));

export default CustomAccordionDetails;
