import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const CustomFiveMinContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
      height: '135vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '125vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
    maxWidth: 'lg',
    display: 'flex',
    mt: '8px',
    px: '-10px, auto',
    alignContent: 'center',
  }));

export default CustomFiveMinContainer;
