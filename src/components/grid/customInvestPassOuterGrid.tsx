import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CustomInvestPassOuterGrid = styled(Grid)(({ theme }) => ({
    justifyContent: 'center',
    display: 'flex',
    padding: '3.125rem 4rem',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    borderRadius: '2.5rem',
    backgroundColor: 'black',
  }));

export default CustomInvestPassOuterGrid;
