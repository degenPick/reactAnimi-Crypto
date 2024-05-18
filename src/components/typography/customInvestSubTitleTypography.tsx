import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomInvestSubTitleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
  color: '#FFF',
  fontFamily: 'Poppins',
  fontSize: '1.563rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
}));

export default CustomInvestSubTitleTypography;
