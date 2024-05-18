// @mui
import { styled, alpha } from '@mui/material/styles';
// utils
import { bgGradient } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(() => ({
  minHeight: '100%',
  background: '#141A36',
  display: 'flex',
  position: 'relative',
}));

export const StyledSection = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const StyledSectionBg = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
  }),
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transform: 'scaleX(-1)',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 600,
  borderRadius: 10,
  background: '#202540',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('md')]: {
    flexShrink: 0.5,
    padding: theme.spacing(3, 3, 3, 3),
    maxWidth: 600,
    minWidth: 600,
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: 480,
  },
  [theme.breakpoints.only('xs')]: {
    maxWidth: 320,
  },
}));
