import { Typography, Stack, Box } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';

type Props = {
  image: string;
  title: string;
  content: string;
};

const ImpactCard = ({ image, title, content }: Props) => {
  const isDesktop = useResponsive('up', 'sm');

  return (
    <Stack
      alignItems="center"
      spacing={isDesktop ? 2 : 1}
      padding={isDesktop ? 6 : 2}
      sx={{ backgroundColor: '#111730', borderRadius: 2, textAlign: 'center' }}
    >
      <Box component="img" src={image} width="136px" height="136px" />
      <Typography variant="h3" fontWeight={500}>
        {title}
      </Typography>
      <Typography variant="body2">{content}</Typography>
    </Stack>
  );
};

export default ImpactCard;
