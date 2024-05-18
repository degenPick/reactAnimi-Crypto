import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const CustomInvestContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
      height: '135vh',
    },
    mt: '8px',
    paddingBottom: '100px',
  }));

export default CustomInvestContainer;
