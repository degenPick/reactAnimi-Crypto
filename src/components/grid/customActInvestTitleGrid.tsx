import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CustomActInvestTitleGrid = styled(Grid)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '3rem',
  fontStyle: 'normal',
  fontWeight: '900',
  lineHeight: 'normal',
  background: '-webkit-linear-gradient(0deg, #00C2FF 0%, #00D1E4 100%)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
}));

export default CustomActInvestTitleGrid;
