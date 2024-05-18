import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CustomActInvestTitleBgFontGrid = styled(Grid)(({ theme }) => ({
  background: '-webkit-linear-gradient(0deg, #00C2FF 0%, #00D1E4 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Poppins',
  opacity: 0.2,
  fontSize: '96px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '152px',
  transform: 'rotate(270deg)',
  marginLeft: '-14.063rem',
  // marginTop: '3rem',
}));

export default CustomActInvestTitleBgFontGrid;
