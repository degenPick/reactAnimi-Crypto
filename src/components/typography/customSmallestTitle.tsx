import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomSmallestTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('lg')]: {
      display: 'block',
      color: '#545C79',
      fontFamily: "Raleway",
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '20px',
      letterSpacing: '1.2px',
    },
  }));

export default CustomSmallestTitle;
