import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomLandingAccordionContentTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '15px',
    lineHeight: '25px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
    lineHeight: '30px',
  },
  color: '#FFF',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  margin: 'auto',
}));

export default CustomLandingAccordionContentTypography;
