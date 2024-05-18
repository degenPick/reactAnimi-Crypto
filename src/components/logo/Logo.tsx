import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = ({ sx }: { sx?: any }) => {
  const logo = (
    <Box
      component="img"
      src="/assets/logo_small.svg"
      sx={{ width: 80, height: 80, cursor: 'pointer', ...sx }}
    />
  );

  return (
    <Link component={RouterLink} to="/auth/login" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
};

export default Logo;
