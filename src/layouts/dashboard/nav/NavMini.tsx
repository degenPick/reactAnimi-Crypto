// @mui
import { Stack, Box, Typography, Drawer } from '@mui/material';
// config
import { NAV } from '../../../config-global';
// utils
import { hideScrollbarX } from '../../../utils/cssStyles';
// components
import { NavSectionMini } from '../../../components/nav-section';
//
import navConfig from './config-navigation';
import NavToggleButton from './NavToggleButton';
import ScaleInNano from "../../../assets/images/scale-in-nano.png";
import Scrollbar from "../../../components/scrollbar/Scrollbar";

// ----------------------------------------------------------------------

export default function NavMini() {

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        backgroundColor: '#252D4B',
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack>
        <NavToggleButton
          sx={{
            position: 'static',
            my: 5,
            mx: 3,
            width: '36px',
          }}
        />
        <Stack
          sx={{
            height: 1,
            width: NAV.W_DASHBOARD_MINI,
            ...hideScrollbarX,
          }}
        >
          <NavSectionMini data={navConfig} />
        </Stack>
      </Stack>
      <Box sx={{ flexGrow: 1 }} />
      <Stack my={2}>
        <Stack flexDirection="row" alignItems="center" justifyContent="center" flexWrap="wrap" my={1}>
          <Typography fontSize={12} mx={1} mt={1} sx={{ color: 'grey.500', fontWeight: 700 }}>© 2015-2024</Typography>
          <Box component="img" src={ScaleInNano} m={1} />
        </Stack>
      </Stack>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            zIndex: 0,
            width: NAV.W_DASHBOARD_MINI,
            bgcolor: 'transparent',
            borderRightStyle: 'dashed',
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
