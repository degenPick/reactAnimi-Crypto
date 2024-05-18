import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomLandingAccordionTitleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
  },
  color: '#FFF',
  fontFamily: 'Poppins',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '30px',
  margin: 'auto',
  marginLeft: '1.25rem',
}));

export default CustomLandingAccordionTitleTypography;
