import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const FiveMinCardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '30px',
  background: 'linear-gradient(90deg, #ED8A4C 0%, #EA485C 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.up('lg')]: {
    width: '10.313rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem!important',
  },
}));

export default FiveMinCardTitle;
