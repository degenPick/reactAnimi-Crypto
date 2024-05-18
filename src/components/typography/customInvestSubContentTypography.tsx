import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomInvestSubContentTypography = styled(Typography)(({ theme }) => ({
  color: '#AAB2CD',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '30px',
  margin: '3rem auto',
  whiteSpace: 'pre-line',
}));

export default CustomInvestSubContentTypography;
