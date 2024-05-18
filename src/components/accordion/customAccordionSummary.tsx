import { styled } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: '18px 48px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '100px',
      margin: '18px 0px',
    },
  }));

export default CustomAccordionSummary;
