import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  containerWrapper: {
    padding: '0 58px',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 3),
    },
  },
  formCardContainer: {
    flexWrap: 'nowrap',
    height: '100%',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      gap: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(6),
      top: -55,
    },
  },
}));
