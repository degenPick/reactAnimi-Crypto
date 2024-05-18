import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CustomInvestOuterGrid = styled(Grid)(({ theme }) => ({
    justifyContent: 'center',
    display: 'flex',
    padding: '3.125rem 4rem',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    borderRadius: '2.5rem',
    backgroundColor: '#272E4F',
    // maxWidth: 'md',
    // margin: 'auto 50px auto 50px',
  }));

export default CustomInvestOuterGrid;
