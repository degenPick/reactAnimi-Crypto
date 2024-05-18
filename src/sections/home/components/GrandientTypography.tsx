import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface GradientTypographyType {
  startColor: string;
  lastColor: string;
  fontSize: number;
}

const GradientTypography = styled(Typography)(
  ({ startColor, lastColor, fontSize }: GradientTypographyType) => ({
    fontSize,
    background: `-webkit-linear-gradient(45deg, ${startColor} 0%, ${lastColor} 100%)`,
    fontFamily: 'Poppins',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  })
);

export default GradientTypography;
