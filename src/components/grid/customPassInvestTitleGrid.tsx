import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CustomPassInvestTitleGrid = styled(Grid)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '3rem',
  fontStyle: 'normal',
  fontWeight: '900',
  lineHeight: 'normal',
  background: 'linear-gradient(90deg, #ED8A4C 0%, #EA485C 100%)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
}));

export default CustomPassInvestTitleGrid;
