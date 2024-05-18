import { Box, Typography, Stack, Container } from '@mui/material';
import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';
import WhiteLogo from '../../../assets/images/white-logo.png';
import ImpactCard from '../../../components/card/impactCard';
import ImpactIcon1 from '../../../assets/images/impact-icon-1.png';
import ImpactIcon2 from '../../../assets/images/impact-icon-2.png';
import ImpactIcon3 from '../../../assets/images/impact-icon-3.png';

const ImpactContent = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');

  const impactContent = [
    {
      image: ImpactIcon1,
      title: LL.our_perspective_title(),
      content: LL.our_perspective_content(),
    },
    {
      image: ImpactIcon2,
      title: LL.our_goal_title(),
      content: LL.our_goal_content(),
    },
    {
      image: ImpactIcon3,
      title: LL.our_approach_title(),
      content: LL.our_approach_content(),
    },
  ];

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ backgroundColor: '#171F44' }}
      py={8}
      spacing={2}
    >
      <Container>
        <Stack
          direction={isDesktop ? 'row' : 'column'}
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Typography fontFamily="Raleway" fontWeight={700} fontSize="40px" lineHeight="46px">
            {LL.impact_lower_font()}
          </Typography>
          <Box component="img" src={WhiteLogo} />
        </Stack>
        <Stack direction={isDesktop ? 'row' : 'column'} spacing={4} mt={isDesktop ? 8 : 2}>
          {impactContent.map((data, index) => (
            <ImpactCard image={data.image} title={data.title} content={data.content} key={index} />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default ImpactContent;
