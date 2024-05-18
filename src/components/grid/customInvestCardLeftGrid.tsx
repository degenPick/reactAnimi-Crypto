import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CustomInvestCardLeftGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  }));

export default CustomInvestCardLeftGrid;
