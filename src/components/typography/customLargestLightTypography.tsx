import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomLargestLightTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontWeight: '100',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.875rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.188rem',
  },
  [theme.breakpoints.up('lg')]: {
    width: '27.813rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.5rem',
  },
  color: '#FFF',
  fontSize: '50px',
  lineHeight: 'normal',
}));

export default CustomLargestLightTypography;
