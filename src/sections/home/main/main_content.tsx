import { Box, Grid, Stack, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useI18nContext } from '../../../i18n/i18n-react';
import main_back from '../../../assets/images/main-bg.png';
import img_group from '../../../assets/images/img_group.png';
import img_contrast from '../../../assets/images/img_contrast.svg';
import img_group_1821 from '../../../assets/images/img_group_1821.svg';
import useResponsive from '../../../hooks/useResponsive';
import { PrimaryButton } from '../../../components/button/primary';
// import TriangleBack from '../../assets/images/triangle_back.png';

const MainContent = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');

  // const goToActiveInvest = () => {
  //   try {
  //     gsap.to(window, {
  //       duration: 1,
  //       scrollTo: {
  //         y: '#content-active-invest',
  //         offsetY: 180,
  //       },
  //     });
  //   } catch (error) {
  //     console.log('error');
  //   }
  // };

  // const goToPassiveInvest = () => {
  //   try {
  //     // const section = document.querySelector('#passinvest');

  //     // console.log('quant invest section ==> ', section);
  //     gsap.to(window, {
  //       duration: 1,
  //       scrollTo: {
  //         y: '#content-pass-invest',
  //         offsetY: 300,
  //       },
  //     });
  //     // smoother.scrollTo(section);
  //     // section!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   } catch (error) {
  //     console.log('error');
  //   }
  // };

  return (
    <div>
      {/* <Box color="white" mt={8} id="main">
        <Stack
          direction={isDesktop ? 'row' : 'column'}
          spacing={2}
          alignItems="center"
          justifyContent="space-around"
        >
          <Stack width={isDesktop ? '45%' : '80%'}>
            <Typography variant="h2" fontSize="48px">
              {LL.main_title()}
            </Typography>
            <Typography variant="h2">{LL.main_title_two()}</Typography>
            <Typography variant="h3" fontWeight={400}>
              {LL.main_content()}
            </Typography>
            <Stack
              direction={isDesktop ? 'row' : 'column'}
              spacing={2}
              alignItems={isDesktop ? 'start' : 'center'}
              my={2}
            >
              <PrimaryButton
                onClick={goToActiveInvest}
                text={LL.active_invest_full()}
                bgImage="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                width={isDesktop ? '40%' : '80%'}
                height="48px"
                boxShadow="0px 3px 32px 0px rgba(0, 231, 234, 0.54)"
              />
              <PrimaryButton
                onClick={goToPassiveInvest}
                text={LL.passive_invest_full()}
                bgImage="linear-gradient(90deg, #C0037B 0%, #FF1BCA 100%)"
                width={isDesktop ? '40%' : '80%'}
                height="48px"
                boxShadow="0px 3px 32px 0px rgba(236, 117, 81, 0.54)"
              />
            </Stack>
          </Stack>
          <Stack width={isDesktop ? '40%' : '80%'}>
            <Box component="img" src={main_back} />
          </Stack>
        </Stack>
      </Box> */}
      <Grid container id="main">
        <Grid container item>
          <Grid container spacing={5} paddingY={24}>
            <Grid item md={2} className="slide1_1">
              <Grid
                container
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '600px',
                  backgroundColor: 'rgba(34,41,69,255)',
                  borderTopRightRadius: '40px',
                  borderBottomRightRadius: '40px',
                }}
              >
                <Grid item>
                  <Typography
                    variant="h4"
                    sx={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      rotate: '180deg',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    Quant Invest
                  </Typography>
                </Grid>
                <Grid item>
                  <Stack spacing={4}>
                    {[...Array(4)].map((_, index) => (
                      <Box
                        key={index}
                        component="img"
                        sx={{
                          height: 60,
                          width: 60,
                          borderRadius: 47,
                          padding: '17px',
                          backgroundColor: '#141a36',
                        }}
                        alt="The house from the offer."
                        src={img_group}
                      />
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8} className="slide1_2">
              <Grid
                container
                sx={{
                  backgroundColor: 'rgba(34,41,69,255)',
                  borderRadius: '40px',
                  paddingX: '20px',
                  height: '600px',
                }}
              >
                <Grid
                  item
                  md={5}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      component="img"
                      sx={{
                        width: '82px',
                        height: '82px',
                      }}
                      alt="The house from the offer."
                      src={img_contrast}
                    />

                    <Typography
                      variant="h2"
                      sx={{ color: '#fff', fontWeight: '700', paddingBottom: '50px' }}
                      className="css-selector-demo"
                    >
                      Make Money
                    </Typography>

                    <Typography variant="h3" sx={{ color: '#fff' }}>
                      Join us to build your financial success story
                    </Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  md={7}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: '648px',
                      height: '410px',
                    }}
                    src={img_group_1821}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={2} className="slide1_3">
              <Grid
                container
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '600px',
                  backgroundColor: 'rgba(34,41,69,255)',
                  borderTopLeftRadius: '40px',
                  borderBottomLeftRadius: '40px',
                }}
              >
                <Grid item>
                  <Stack spacing={4}>
                    <Box
                      component="img"
                      sx={{
                        height: 60,
                        width: 60,
                        borderRadius: 47,
                        padding: '17px',
                        backgroundColor: '#141a36',
                      }}
                      alt="The house from the offer."
                      src={img_group}
                    />
                  </Stack>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h4"
                    sx={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      rotate: '180deg',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    Private Club
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;
