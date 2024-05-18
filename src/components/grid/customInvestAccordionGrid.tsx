import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CustomInvestAccordionGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      '&.MuiGrid-root': {
        width: 'calc(100% / 12 * 12)',
      },
    },
    [theme.breakpoints.down('lg')]: {
      '&.MuiGrid-root': {
        width: 'calc(100% / 12 * 12)',
      },
    },
    [theme.breakpoints.up('lg')]: {
      '&.MuiGrid-root': {
        width: 'calc(100% / 12 * 8)',
      },
    },
  }));

export default CustomInvestAccordionGrid;
