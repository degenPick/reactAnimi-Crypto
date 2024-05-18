import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const CustomJoinUsCard = styled(Card)(({ theme }) => ({
    border: '0.031rem solid #AAB2CD',
    borderRadius: '1.25rem',
    background: 'transparent',
    display: 'flex',
    padding: '2.5rem 1.25rem',
    flexDirection: 'column',
    alignItems: 'flexStart',
    gap: '2.5rem',
    flex: '1 0 0',
    alignSelf: 'stretch',
  }));

export default CustomJoinUsCard;
