import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
    boxShadow: 'none',
    '.MuiAccordionDetails-root': {},
    '.MuiAccordionSummary-root': {},
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: '10px!important',
    borderTopRightRadius: '10px!important',
    borderBottomLeftRadius: '10px!important',
    borderBottomRightRadius: '10px!important',
    borderRadius: '10px',
    border: '1px solid #FFF',
    marginBottom: '0.625rem',
  }));

export default CustomAccordion;
