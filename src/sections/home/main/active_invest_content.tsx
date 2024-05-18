import { Box, Typography, Stack, Grid, Divider } from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';
import InvestContentAccordion from '../../../components/accordion/investContentAccordion';
import UnlockIcon from '../../../assets/images/active-icons-1.png';
import DiversifyIcon from '../../../assets/images/active-icons-2.png';
import TopTierIcon from '../../../assets/images/active-icons-3.png';
import NavigatingIcon from '../../../assets/images/active-icons-4.png';
import VectorIcon from '../../../assets/images/active-vector.png';
import DiscordServerImage from '../../../assets/images/discord-server.png';
import StepRoad from '../../../assets/images/step-road.png';
import GradientTypography from '../components/GrandientTypography';

const ActiveInvestContent = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'lg');

  const accordianData = [
    {
      icon: UnlockIcon,
      title: LL.act_invest_first_accordion_title(),
      content: LL.act_invest_second_accordion_content(),
    },
    {
      icon: DiversifyIcon,
      title: LL.act_invest_second_accordion_title(),
      content: LL.act_invest_second_accordion_content(),
    },
    {
      icon: TopTierIcon,
      title: LL.act_invest_third_accordion_title(),
      content: LL.act_invest_third_accordion_content(),
    },
    {
      icon: NavigatingIcon,
      title: LL.act_invest_fourth_accordion_title(),
      content: LL.act_invest_fourth_accordion_content(),
    },
  ];

  return (
    <Box
      px={{ md: 8, sm: 4, xs: 2 }}
      mx={{ md: 8, sm: 4, xs: 2 }}
      pb={{ md: 4, sm: 4, xs: 2 }}
      sx={{ backgroundColor: '#171F44', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
      id="content-active-invest"
    >
      {/* <Stack direction={isDesktop ? 'row' : 'column'} justifyContent="left" alignItems="center">
        <Stack direction="row" justifyContent="center" sx={{ width: { xs: '90%', lg: '320px' } }}>
          <GradientTypography
            fontSize={48}
            startColor="#4481EB"
            lastColor="#04BEFE"
            sx={{ fontWeight: 700 }}
          >
            {LL.active_invest_full()}
          </GradientTypography>
        </Stack>
        <Typography variant="h5" textAlign="center">
          {LL.active_content_1()}
        </Typography>
      </Stack> */}
      <Stack direction="row" alignItems="center">
        <Stack
          direction="row"
          width="320px"
          flexShrink={0}
          justifyContent="center"
          display={isDesktop ? 'flex' : 'none'}
        >
          <Typography
            fontSize="60px"
            color="#04BEFE1A"
            fontWeight={700}
            sx={{
              textOrientation: 'sideways',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            {LL.active_invest_full()}
          </Typography>
        </Stack>
        <Box>
          <Typography variant="h6" fontWeight={700} component="span">
            {LL.active_invests()}
          </Typography>
          <Typography variant="body2" component="span">
            {LL.act_invest_main_content()}
          </Typography>
          <Grid container spacing={2} mt={4}>
            {accordianData.map((data, index) => (
              <Grid item xs={12} md={6} key={index}>
                <InvestContentAccordion
                  icon={data.icon}
                  title={data.title}
                  content={data.content}
                  vectorIcon={VectorIcon}
                />
              </Grid>
            ))}
          </Grid>
          <Stack
            direction={isDesktop ? 'row' : 'column'}
            spacing={2}
            alignItems="center"
            mt={4}
            mb={4}
          >
            <Box component="img" src={DiscordServerImage} width={isDesktop ? '46%' : '80%'} />
            {/* <Stack display="flex" flexDirection="row" height={240} py={isDesktop ? 0 : 4}>
              <Stack width="50px" flexShrink={0} justifyContent="space-between">
                <Typography variant="body2">{LL.step()} 1</Typography>
                <Typography variant="body2">{LL.step()} 2</Typography>
                <Typography variant="body2">{LL.step()} 3</Typography>
              </Stack>
              <Box component="img" src={StepRoad} sx={{ mx: 2 }} />
              <Stack justifyContent="space-between">
                <Typography variant="body2">{LL.discord_step_1()}</Typography>
                <Typography variant="body2">{LL.discord_step_2()}</Typography>
                <Typography variant="body2">{LL.discord_step_3()}</Typography>
              </Stack>
            </Stack> */}
            <Timeline
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.3,
                },
                p: 0,
              }}
            >
              <TimelineItem
                sx={{
                  marginTop: '12.5px',
                }}
              >
                <TimelineOppositeContent>{LL.step()} 1</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      borderColor: '#05BCFD',
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      height: { xs: '60px', md: '100px', lg: '120px' },
                      backgroundColor: '#05BCFD',
                      marginTop: '-11.5px',
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack direction="row" gap={1}>
                    <TimelineConnector
                      sx={{
                        height: '2px',
                        width: { xs: '20px', md: '30px' },
                        minWidth: { xs: '20px', md: '30px' },
                        maxWidth: { xs: '20px', md: '30px' },
                        marginTop: '10px',
                      }}
                    />
                    <Typography variant="body2">{LL.discord_step_1()}</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  marginTop: '-11.5px',
                }}
              >
                <TimelineOppositeContent>{LL.step()} 2</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      borderColor: '#05BCFD',
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      height: { xs: '60px', md: '100px', lg: '120px' },
                      backgroundColor: '#05BCFD',
                      marginTop: '-11.5px',
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack direction="row" gap={1}>
                    <TimelineConnector
                      sx={{
                        height: '2px',
                        width: { xs: '20px', md: '30px' },
                        minWidth: { xs: '20px', md: '30px' },
                        maxWidth: { xs: '20px', md: '30px' },
                        marginTop: '10px',
                      }}
                    />
                    <Typography variant="body2">{LL.discord_step_2()}</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  marginTop: '-11.5px',
                }}
              >
                <TimelineOppositeContent>{LL.step()} 3</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      borderColor: '#05BCFD',
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack direction="row" gap={1}>
                    <TimelineConnector
                      sx={{
                        height: '2px',
                        width: { xs: '20px', md: '30px' },
                        minWidth: { xs: '20px', md: '30px' },
                        maxWidth: { xs: '20px', md: '30px' },
                        marginTop: '10px',
                      }}
                      color="red"
                    />
                    <Typography variant="body2">{LL.discord_step_3()}</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Stack>
          <Typography>
            {LL.act_invest_sub_content_normal1()}{' '}
            <Box component="span" fontWeight={700}>
              {LL.act_invest_sub_content_bold1()}
            </Box>
            {LL.act_invest_sub_content_normal2()}{' '}
            <Box component="span" fontWeight={700}>
              {LL.act_invest_sub_content_bold2()}{' '}
            </Box>
            {LL.act_invest_sub_content_normal3()}{' '}
            <Box component="span" fontWeight={700}>
              {LL.act_invest_sub_content_bold3()}
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ActiveInvestContent;
