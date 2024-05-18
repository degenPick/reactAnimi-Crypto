// @mui
import { Box, IconButton, IconButtonProps } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// config
import { NAV } from '../../../../config-global';
// components
import ToggleClose from '../../../../assets/images/toggle-button-close.png';
import ToggleOpen from '../../../../assets/images/toggle-button-open.png';
import Iconify from '../../../../components/iconify';
import { useSettingsContext } from '../../../../components/settings';

// ----------------------------------------------------------------------
export default function NavToggleButton({ sx, ...other }: IconButtonProps) {
  const { themeLayout, onToggleLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'lg');

  if (!isDesktop) {
    return null;
  }

  return (
    <IconButton
      size="small"
      disableRipple
      onClick={onToggleLayout}
      sx={{
        p: 0.5,
        top: 32,
        position: 'fixed',
        left: NAV.W_DASHBOARD - 36,
        zIndex: (theme) => theme.zIndex.appBar + 1,
        // border: (theme) => `dashed 1px ${theme.palette.divider}`,
        ...sx,
      }}
      {...other}
    >
      {themeLayout === 'vertical' ? (
        <Box component="img" src={ToggleClose} />
      ) : (
        <Box component="img" src={ToggleOpen} />
      )}
    </IconButton>
  );
}
