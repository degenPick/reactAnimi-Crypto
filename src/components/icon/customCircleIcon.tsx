import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

const CustomCircleIcon = styled(CircleIcon)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
      width: '0.313rem',
      height: '100%',
      alignItems: 'start',
      marginTop: '4%',
      paddingRight: '0.688rem',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '3.5%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '4.5%',
    },
  }));

export default CustomCircleIcon;
