import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomJoinUnCardTitleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Poppins',
  fontSize: '25px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
}));

export default CustomJoinUnCardTitleTypography;
