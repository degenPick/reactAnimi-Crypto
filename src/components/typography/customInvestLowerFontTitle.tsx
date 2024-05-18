import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomInvestLowerFontTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '45px',
    margin: '1.875rem auto',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
  },
}));

export default CustomInvestLowerFontTitle;
