import { styled } from '@mui/material/styles';

const CustomAccordionImageBox = styled('img')(({ theme }) => ({
  width: '4rem',
  [theme.breakpoints.down('md')]: {
    width: '2.125rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '1.95rem',
  },
}));

export default CustomAccordionImageBox;
