import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const FiveMinCard = styled(Card)(({ theme }) => ({
    padding: '1.875rem 2.5rem',
    display: 'flex',
    // gap: '4.5rem',
    background: 'transparent',
    borderRadius: '0.625rem',
    backgroundColor: '#252D4B',
    [theme.breakpoints.down('lg')]: {
      display: 'block',
    },
  }));

export default FiveMinCard;
