import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const CustomInvestUpperFontTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    left: '50%',
    marginTop: '-5rem',
    textAlign: 'center',
    WebkitTransform: 'translateX(-50%)',
    MsTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
    top: '-10px',
    fontSize: '50px',
    fontFamily: 'Poppins',
    fontWeight: 700,
    background: '-webkit-linear-gradient(#d047e4, #ff4e3d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: 0.08,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    position: 'relative',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '45px',
    marginTop: '-3.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '45px',
  },
}));

export default CustomInvestUpperFontTitle;
