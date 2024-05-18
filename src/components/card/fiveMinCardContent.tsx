import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const FiveMinCardContent = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem!important',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem',
  },
  color: '#FFF',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.875rem',
}));

export default FiveMinCardContent;
