import { Box, Stack, Typography } from '@mui/material';

interface SubscribeTextType {
  icon: string;
  text: string;
}

const SubscribeText = ({ icon, text }: SubscribeTextType) => (
  <Stack direction="row" alignItems="center" mb={2}>
    <Box component="img" width="18px" height="18px" src={icon} />
    <Typography variant="body1" ml={2}>
      {text}
    </Typography>
  </Stack>
);

export default SubscribeText;
