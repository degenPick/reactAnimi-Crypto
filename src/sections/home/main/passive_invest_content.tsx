import { Box, Typography, Stack, Grid, Button } from '@mui/material';

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
import TransparentIcon from '../../../assets/images/passive-icons-1.png';
import EffortlessIcon from '../../../assets/images/passive-icons-2.png';
import OptimizedIcon from '../../../assets/images/passive-icons-3.png';
import CapitalIcon from '../../../assets/images/passive-icons-4.png';
import VectorIcon from '../../../assets/images/passive-vector.png';
import Binance from '../../../assets/images/binance-logo.png';
import Bybit from '../../../assets/images/bybit-logo.png';
import Coinbase from '../../../assets/images/coinbase-logo.png';
import Kraken from '../../../assets/images/kraken-logo.png';
import Kucoin from '../../../assets/images/kucoin-logo.png';
import PassStepRoad from '../../../assets/images/pass-step-road.png';
import UserFriendly from '../../../assets/images/user_friendly_icon.png';
import Safeguard from '../../../assets/images/safeguard_icon.png';
import Transparency from '../../../assets/images/transparency_icon.png';
import PassiveStepAdvantage from '../components/PassiveStepAdvantage';
import GradientTypography from '../components/GrandientTypography';

const PassiveInvestContent = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'lg');

  const accordianData = [
    {
      icon: TransparentIcon,
      title: LL.pass_invest_first_accordion_title(),
      content: LL.pass_invest_second_accordion_content(),
    },
    {
      icon: EffortlessIcon,
      title: LL.pass_invest_second_accordion_title(),
      content: LL.pass_invest_second_accordion_content(),
    },
    {
      icon: OptimizedIcon,
      title: LL.pass_invest_third_accordion_title(),
      content: LL.pass_invest_third_accordion_content(),
    },
    {
      icon: CapitalIcon,
      title: LL.pass_invest_fourth_accordion_title(),
      content: LL.pass_invest_fourth_accordion_content(),
    },
  ];

  const stepAdvantageData = [
    {
      title: LL.pass_advantage_title_1(),
      icon: UserFriendly,
      text: LL.pass_advantage_text_1(),
    },
    {
      title: LL.pass_advantage_title_2(),
      icon: Safeguard,
      text: LL.pass_advantage_text_2(),
    },
    {
      title: LL.pass_advantage_title_3(),
      icon: Transparency,
      text: LL.pass_advantage_text_3(),
    },
  ];

  return (
    <Box
      px={{ md: 8, sm: 4, xs: 2 }}
      pb={4}
      pt={6}
      mx={{ md: 8, sm: 4, xs: 2 }}
      sx={{ backgroundColor: '#272E4F', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
      id="content-pass-invest"
    >
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
            color="#FF1BCA1A"
            fontWeight={700}
            sx={{
              textOrientation: 'sideways',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            {LL.passive_invest_full()}
          </Typography>
        </Stack>
        <Box>
          <Stack spacing={2}>
            <Box>
              <Typography variant="h6" fontWeight={700} component="span">
                {LL.passive_invests()}
              </Typography>
              <Typography variant="body2" component="span">
                {LL.pass_invest_main_content_one()}
              </Typography>
            </Box>
            <Typography variant="body2">{LL.pass_invest_main_content_two()}</Typography>
            <Typography variant="body2">{LL.pass_invest_main_content_three()}</Typography>
          </Stack>
          <Grid container spacing={2} my={4}>
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
          <Typography variant="body1">{LL.five_min_content()}</Typography>

          <Stack direction="row" justifyContent="space-around" flexWrap="wrap">
            <Box component="img" my={2} src={Binance} />
            <Box component="img" my={2} src={Coinbase} />
            <Box component="img" my={2} src={Kraken} />
            <Box component="img" my={2} src={Kucoin} />
            <Box component="img" my={2} src={Bybit} />
          </Stack>

          <Stack direction={isDesktop ? 'row' : 'column'} alignItems="center" spacing={2} my={8}>
            <Timeline
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.3,
                },
                p: 0,
              }}
            >
              <TimelineItem>
                <TimelineOppositeContent>{LL.step()} 1</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      borderColor: '#CA0788',
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      height: { xs: '60px', md: '100px', lg: '160px' },
                      backgroundColor: '#CA0788',
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
                      color="red"
                    />
                    <Typography variant="body2">{LL.pass_discord_step_1()}</Typography>
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
                      borderColor: '#CA0788',
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      height: { xs: '60px', md: '100px', lg: '160px' },
                      backgroundColor: '#CA0788',
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
                    <Typography variant="body2">{LL.pass_discord_step_2()}</Typography>
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
                      borderColor: '#CA0788',
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
                    <Typography variant="body2">{LL.pass_discord_step_3()}</Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <Stack width={isDesktop ? '56%' : '90%'}>
              {stepAdvantageData.map((data, index) => (
                <PassiveStepAdvantage
                  title={data.title}
                  icon={data.icon}
                  text={data.text}
                  key={index}
                />
              ))}
            </Stack>
          </Stack>

          <Typography>
            {LL.pass_invest_sub_content_normal1()}{' '}
            <Box component="span" fontWeight={700}>
              {LL.pass_invest_sub_content_bold1()}
            </Box>{' '}
            {LL.pass_invest_sub_content_normal2()}{' '}
            <Box component="span" fontWeight={700}>
              {LL.pass_invest_sub_content_bold2()}{' '}
            </Box>
            {LL.pass_invest_sub_content_normal3()}
            {'. '}
            {LL.pass_invest_sub_content_normal4()}{' '}
            <Box component="span" fontWeight={700}>
              {LL.pass_invest_sub_content_bold3()}
            </Box>
          </Typography>

          <Stack alignItems="center" width="100%" mt={4}>
            <Button
              sx={{
                background: 'linear-gradient(to right, #C0037B, #FF1BCA)',
                color: '#fff',
                px: 4,
                py: 1,
                width: '300px',
              }}
            >
              {LL.click_simulator()}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default PassiveInvestContent;
