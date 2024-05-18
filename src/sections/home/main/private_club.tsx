import React from 'react';
import { Box, Button, FormControl, Grid, OutlinedInput, Stack, Typography } from '@mui/material';

// import { gsap } from 'gsap';
import { useI18nContext } from '../../../i18n/i18n-react';
// import main_back from '../../../assets/images/main-bg.png';
// import img_group from '../../../assets/images/img_group.png';
// import img_contrast from '../../../assets/images/img_contrast.svg';
// import img_group_1821 from '../../../assets/images/img_group_1821.svg';
// import useResponsive from '../../../hooks/useResponsive';
// import { PrimaryButton } from '../../../components/button/primary';
// import { from } from 'stylis';

import bitcoin from '../../../assets/images/bitcoin.png';
import img_contrast from '../../../assets/images/img_contrast.svg';
// import TriangleBack from '../../assets/images/triangle_back.png';

const PrivateClub = () => {
  const { LL } = useI18nContext();

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
      <Grid container id="content-private-club">
        <Stack spacing={2} sx={{ padding: '80px 120px', backgroundColor: '#1C223C' }}>
          <Grid
            container
            sx={{
              backgroundColor: '#141a36',
              border: '2px solid grey',
              color: '#fff',
              borderRadius: '20px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#fff',
              backgroundImage: 'linear-gradient(180deg, #ffffff4c, #ffffff00)',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingY: '10px',
            }}
          >
            <Box display="flex" alignItems="center" p={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#141a36',
                  fontSize: '32px',
                  fontWeight: '700',
                  paddingX: '50px',
                  paddingY: '10px',
                  borderRadius: '16px',
                  textTransform: 'capitalize',
                }}
              >
                private club
              </Button>
            </Box>
            <Box
              component="img"
              sx={{
                padding: '16px',
              }}
              alt="The house from the offer."
              src={img_contrast}
            />
          </Grid>

          <Grid container display="flex" justifyContent="center" textAlign="center">
            <Typography color="#fff" fontSize="28px" fontWeight="700">
              Team up with us to shape your financial prosperity
            </Typography>
            <Typography color="#a2a5b8" lineHeight="29px">
              Our exclusive private club has been operating since 2017. It offers a thrilling
              experience for finance 2.0 enthusiasts. By joining us, you participate in a dynamic
              investor community for discussions, insights, and web3 collaborations. You also
              benefit from early investment opportunities, engaging in various fundraising
              campaigns, including ICOs, IDOs, Seed and Private rounds.
            </Typography>
          </Grid>

          <Grid container>
            <Stack spacing={2}>
              <Grid container item>
                <Grid container spacing={2}>
                  <Grid item md={8.5} position="relative">
                    <Stack sx={{ backgroundColor: '#141a36' }}>
                      <Box>
                        <Typography
                          variant="h5"
                          color="#fff"
                          fontSize="24px"
                          textTransform="capitalize"
                          fontWeight="700"
                          letterSpacing="0.43px"
                          borderBottom="1px solid #ffffff19"
                          padding="20px"
                        >
                          Gains from our club since 2017
                        </Typography>
                      </Box>
                      <Box height="600px">
                        <Box className="sliding-logo-wrapper">
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              backgroundColor: '#232942',
                              width: '20%',
                              borderRadius: '50px',
                              padding: '20px',
                            }}
                            className="logo-container marquee"
                          >
                            <Box component="img" src={bitcoin} />

                            <Typography fontSize="22px" fontWeight="bold" color="#fff">
                              Bitcoin
                            </Typography>

                            <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                              x300
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item md={3.5}>
                    <Stack sx={{ backgroundColor: '#141a36' }}>
                      <Typography
                        variant="h5"
                        color="#fff"
                        fontSize="24px"
                        textTransform="capitalize"
                        fontWeight="700"
                        letterSpacing="0.43px"
                        borderBottom="1px solid #ffffff19"
                        padding="20px"
                      >
                        Strategy
                      </Typography>
                      <Box
                        sx={{
                          backgroundImage: "url('images/Group1825.png')",
                          backgroundRepeat: 'no-repeat',
                          backgroundPositionX: 'left',
                          backgroundPositionY: 'bottom',
                          height: '600px',
                        }}
                      >
                        <Stack
                          spacing={8}
                          color="#a2a5b8"
                          display="flex"
                          alignItems="center"
                          position="relative"
                          margin="auto"
                          padding="40px"
                        >
                          <Typography paddingX="40px" lineHeight="29px">
                            Explore our meticulously crafted investment plans and strategies. Mirror
                            our positions and gain access to exclusive insights that drive success.
                            Elevate your investment game with real-time, expert guidance to maximize
                            your returns
                          </Typography>
                          <Button
                            variant="outlined"
                            sx={{
                              border: '1px solid #a2a5b8',
                              borderRadius: '16px',
                              color: 'rgb(51, 217, 125)',
                              paddingY: '20px',
                              fontSize: '25px',
                              fontWeight: '500',
                              textTransform: 'capitalize',
                              backgroundColor: '#272f4c',
                              width: '70%',
                              height: '80px',
                              position: 'relative',
                            }}
                          >
                            <Typography
                              sx={{
                                color: 'rgb(51, 217, 125)',
                                fontSize: '25px',
                                fontWeight: '500',
                                textTransform: 'capitalize',
                                position: 'absolute',
                                // bottom: '50px',
                              }}
                            >
                              Diversify
                            </Typography>
                          </Button>
                          <Box>
                            <Typography color="#fff" fontSize="1rem">
                              Want to discuss with us about our club?
                            </Typography>
                            <FormControl sx={{ width: '25ch', backgroundColor: '#272f4c' }}>
                              <OutlinedInput
                                placeholder="Your Email Address"
                                sx={{ color: '#a2a5b8' }}
                              />
                            </FormControl>
                            <Button
                              sx={{
                                backgroundColor: '#fbb532',
                                color: 'white',
                                height: '56px',
                                fontSize: '16px',
                                fontWeight: '700',
                                borderRadius: '5px',
                                letterSpacing: '0.02857em',
                                padding: '20px',
                                textTransform: 'capitalize',
                              }}
                            >
                              Contact me
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container>
                <Stack
                  sx={{
                    width: '100%',
                    spacing: 5,
                    borderRadius: '16px',
                    paddingY: '40px',
                    backgroundColor: '#141a36',
                  }}
                >
                  <Grid container item display="flex" justifyContent="center">
                    <Typography color="#fff" fontSize="24px" fontWeight="700">
                      Easy Onboarding Path
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Grid container spacing={4} padding="20px" position="relative">
                      <Grid item md={4}>
                        <Stack
                          sx={{
                            backgroundColor: '#272f4c',
                            spacing: 2,
                            borderRadius: '16px',
                            paddingBottom: '40px',
                            paddingLeft: '40px',
                            paddingRight: '16px',
                            paddingTop: '16px',
                          }}
                        >
                          <Typography
                            fontSize="32px"
                            fontWeight="700"
                            letterSpacing="0.43px"
                            textAlign="right"
                            color="#FBB532"
                          >
                            01
                          </Typography>
                          <Typography
                            fontSize="24px"
                            fontWeight="700"
                            letterSpacing="0.43px"
                            color="#fff"
                          >
                            Sign Up
                          </Typography>
                          <Typography lineHeight="29px" color="#a2a5b8">
                            Create your account & deposit USDT on your preferred centralized
                            exchange
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item md={4}>
                        <Stack
                          sx={{
                            backgroundColor: '#272f4c',
                            spacing: 2,
                            borderRadius: '16px',
                            paddingBottom: '40px',
                            paddingLeft: '40px',
                            paddingRight: '16px',
                            paddingTop: '16px',
                          }}
                        >
                          <Typography
                            fontSize="32px"
                            fontWeight="700"
                            letterSpacing="0.43px"
                            textAlign="right"
                            color="#FBB532"
                          >
                            02
                          </Typography>
                          <Typography
                            fontSize="24px"
                            fontWeight="700"
                            letterSpacing="0.43px"
                            color="#fff"
                          >
                            Connect Your CEX
                          </Typography>
                          <Typography lineHeight="29px" color="#a2a5b8">
                            Link your exchange account to our automated strategy via secured API
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item md={4}>
                        <Stack
                          sx={{
                            backgroundColor: '#272f4c',
                            spacing: 2,
                            borderRadius: '16px',
                            paddingBottom: '40px',
                            paddingLeft: '40px',
                            paddingRight: '16px',
                            paddingTop: '16px',
                          }}
                        >
                          <Typography
                            fontSize="32px"
                            fontWeight="700"
                            letterSpacing="0.43px"
                            textAlign="right"
                            color="#FBB532"
                          >
                            03
                          </Typography>
                          <Typography
                            fontSize="24px"
                            fontWeight="700"
                            letterSpacing="0.43px"
                            color="#fff"
                          >
                            Start Investing
                          </Typography>
                          <Typography lineHeight="29px" color="#a2a5b8">
                            Let our Quantitative algorithm make the best investment decisions for
                            you!
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>

              <Grid
                container
                sx={{
                  backgroundImage: "url('images/img_partenrs_bg_png.png')",
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#141a36',
                  borderRadius: '16px',
                  padding: '20px',
                }}
              >
                <Typography
                  color="#fff"
                  fontSize="28px"
                  fontWeight="400"
                  width="100%"
                  textAlign="center"
                >
                  This exclusive opportunity targets&nbsp;passive investors&nbsp;demanding&nbsp;zero
                  time working, as everything is automated
                </Typography>
                <Button
                  sx={{
                    backgroundColor: '#02A53E',
                    color: 'white',
                    height: '56px',
                    fontWeight: '700',
                    form: 'capitalize',
                  }}
                >
                  DETAILS & PRICE
                </Button>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </div>
  );
};

export default PrivateClub;
