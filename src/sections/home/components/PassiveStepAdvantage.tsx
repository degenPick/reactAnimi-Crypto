import { Box, Stack, Typography } from '@mui/material';
import GradientTypography from './GrandientTypography';

interface PassiveStepAdvantageType {
  title: string;
  icon: string;
  text: string;
}

const PassiveStepAdvantage = ({ title, icon, text }: PassiveStepAdvantageType) => (
  <Stack
    direction={{ xs: 'column', md: 'row' }}
    alignItems="center"
    p={3}
    mb={2}
    spacing={2}
    sx={{
      borderRadius: '20px',
      backgroundColor: '#171F4499',
      border: '1px solid #141A36',
    }}
  >
    <Stack alignItems="center" minWidth={180} gap={2}>
      <GradientTypography
        fontSize={24}
        startColor="#C0037B"
        lastColor="#FF1BCA"
        fontFamily="Raleway"
        sx={{ fontWeight: 700 }}
      >
        {title}
      </GradientTypography>
      <Box component="img" width="64px" src={icon} />
    </Stack>
    <Typography fontFamily="Raleway" variant="body1" color="#AAB2CD">
      {text}
    </Typography>
  </Stack>
);

export default PassiveStepAdvantage;
