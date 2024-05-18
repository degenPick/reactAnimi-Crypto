import { Box, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';

function ProductSettingsPage() {
  return (
    <Box
      sx={{
        color: 'grey.200',
        backgroundColor: '#202540',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        p: 2,
        mb: 2,
      }}
    >
      <Box sx={{ color: 'grey.200', backgroundColor: '#141A36', borderRadius: 1, p: 2, mb: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
          <Typography variant="h6"> Settings</Typography>

          <IconButton onClick={() => {}}>
            <Image src="/assets/icons/edit.svg" />
          </IconButton>
        </Stack>

        <Divider sx={{ mt: 2, mb: 2 }} />

        <Grid container>
          <Grid item xs={12} md={4}>
            <Stack gap={1} sx={{ m: 1 }}>
              <Typography variant="subtitle2" color="grey.600">
                Price Per Month
              </Typography>

              <Stack
                sx={{
                  backgroundColor: '#292F48',
                  borderRadius: 1,
                  height: 40,
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="subtitle2" color="grey.400">
                  135 $
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack gap={1} sx={{ m: 1 }}>
              <Typography variant="subtitle2" color="grey.600">
                Price Per Month
              </Typography>

              <Stack
                sx={{
                  backgroundColor: '#292F48',
                  borderRadius: 1,
                  height: 40,
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="subtitle2" color="grey.400">
                  1460 $
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack gap={1} sx={{ m: 1 }}>
              <Typography variant="subtitle2" color="grey.600">
                Number of Places
              </Typography>

              <Stack
                sx={{
                  backgroundColor: '#292F48',
                  borderRadius: 1,
                  height: 40,
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="subtitle2" color="grey.400">
                  100
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductSettingsPage;
