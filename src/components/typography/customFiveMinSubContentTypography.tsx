import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomFiveMinSubContentTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontFamily: 'Poppins',
  fontWeight: '100',
  gap: '0.375rem',
  fontStyle: 'normal',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
    lineHeight: '35px',
    alignItem: 'start',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.125rem',
    lineHeight: '2.813rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.125rem',
  },
  color: '#FFF',
  fontSize: '50px',
  lineHeight: '70px',
  marginTop: '0.438rem',
}));

export default CustomFiveMinSubContentTypography;
