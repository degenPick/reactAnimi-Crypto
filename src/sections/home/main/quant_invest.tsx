import React from 'react';
import { Box, Grid, Stack, Typography, Button, FormControl, OutlinedInput } from '@mui/material';
import { gsap } from 'gsap';
import { useI18nContext } from '../../../i18n/i18n-react';

import img_contrast from '../../../assets/images/img_contrast.svg';
import img_group_1825 from '../../../assets/images/img_group_1825.png';
import img_grid_base from '../../../assets/images/img_grid_base.png';
import img_path_0_185x1058 from '../../../assets/images/img_path_0_185x1058.png';
import img_path_1_224x1058 from '../../../assets/images/img_path_1_224x1058.png';
import img_path_3_304x1057 from '../../../assets/images/img_path_3_304x1057.png';
import img_close_blue_gray_600 from '../../../assets/images/img_close_blue_gray_600.png';
import img_path16 from '../../../assets/images/img_path16.png';
import img_vector from '../../../assets/images/img_vector.svg';
import img_settings from '../../../assets/images/img_settings.svg';
import img_vector_blue_gray_600 from '../../../assets/images/img_vector_blue_gray_600.svg';
import img_user_blue_gray_600 from '../../../assets/images/img_user_blue_gray_600.svg';
import img_group_1000003266 from '../../../assets/images/img_group_1000003266.svg';
import img_g886 from '../../../assets/images/img_g886.svg';
import img_settings_blue_gray_600 from '../../../assets/images/img_settings_blue_gray_600.svg';
import img_partenrs_bg_png from '../../../assets/images/img_partenrs_bg_png.png';

const QuantInvest = () => {
  const { LL } = useI18nContext();

  return (
    <Grid container id="content-pass-invest">
      <Stack spacing={2} padding="80px 120px">
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
              Quant Invest
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
            Our Streamlined Investment Solution
          </Typography>
          <Typography color="#a2a5b8" lineHeight="29px">
            Quant Invest is a cutting-edge automated and optimized crypto investment solution that
            utilizes our custom-designed quantitative algorithm 24/7. With this innovative
            technology, you can enjoy the benefits of crypto investment without the hassle of manual
            monitoring and effort. Our algorithm constantly analyzes the market trends, identifies
            long-term opportunities and optimizes your portfolio.
          </Typography>
        </Grid>

        <Stack spacing={2}>
          <Grid container item>
            <Grid container spacing={2} sx={{ backgroundColor: '#141a36' }}>
              <Grid item md={3.5}>
                <Stack>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#fff',
                      fontSize: '24px',
                      textTransform: 'capitalize',
                      fontWeight: '700',
                      letterSpacing: '0.43px',
                      borderBottom: '1px solid #ffffff19',
                      padding: '20px',
                      backgroundColor: '#1D233D',
                    }}
                  >
                    Strategy
                  </Typography>
                  <Box position="relative">
                    <Stack
                      spacing={12}
                      color="#a2a5b8"
                      display="flex"
                      alignItems="center"
                      position="absolute"
                      height="600px"
                      padding="10px"
                      sx={{
                        backgroundImage: "url('assets/images/img_group_1825.png')",
                        backgroundPositionX: 'left',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#1C223C',
                      }}
                    >
                      <Typography paddingX="40px" lineHeight="29px">
                        Our trend-following strategy is designed to capitalize on market upswings
                        and protect your capital during downturns. Emphasizing quality over
                        quantity, our algorithm executes an average of 40 orders per year.
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
                          Transparent
                        </Typography>
                      </Button>
                      <Box>
                        <Typography color="#fff" fontSize="1rem">
                          Want to know more about our performance?
                        </Typography>
                        <Typography color="lightgray" fontSize="16px">
                          Download our detailed report
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
                          Receive
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>

              <Grid item md={8.5} position="relative">
                <Stack sx={{ backgroundColor: '#1C223C' }}>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#fff',
                        fontSize: '24px',
                        textTransform: 'capitalize',
                        fontWeight: '700',
                        letterSpacing: '0.43px',
                        borderBottom: '1px solid #ffffff19',
                        padding: '20px',
                        backgroundColor: '#1D233D',
                      }}
                    >
                      Quant Invest Performance Since 2017
                    </Typography>
                  </Box>
                  <Box
                    width="18%"
                    color="#fff"
                    display="flex"
                    justifyContent="space-between"
                    fontSize="14.14px"
                    position="absolute"
                    top="20%"
                    right="5%"
                  >
                    <Typography width="5%">SCALE IN</Typography>
                    <Typography>BTC</Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    marginX="60px"
                    marginY="30px"
                    gap={2}
                  >
                    <Box>
                      <Stack height="468px" display="flex" justifyContent="space-between">
                        <Typography
                          letterSpacing="0.5px"
                          fontSize="14.14px"
                          alignSelf="center"
                          color="#fff"
                        >
                          6.000
                        </Typography>
                        <Typography
                          letterSpacing="0.5px"
                          fontSize="14.14px"
                          alignSelf="center"
                          color="#fff"
                        >
                          5.000
                        </Typography>
                        <Typography
                          letterSpacing="0.5px"
                          fontSize="14.14px"
                          alignSelf="center"
                          color="#fff"
                        >
                          4.000
                        </Typography>
                        <Typography
                          letterSpacing="0.5px"
                          fontSize="14.14px"
                          alignSelf="center"
                          color="#fff"
                        >
                          3.000
                        </Typography>
                        <Typography
                          letterSpacing="0.5px"
                          fontSize="14.14px"
                          alignSelf="center"
                          color="#fff"
                        >
                          2.000
                        </Typography>
                      </Stack>
                    </Box>
                    <Box position="relative">
                      <Box width="100%" height="459px" component="img" src={img_grid_base} />
                      <Box
                        width="100%"
                        height="185px"
                        component="img"
                        position="absolute"
                        bottom="18%"
                        left="0px"
                        src={img_path_0_185x1058}
                      />
                      <Box
                        width="100%"
                        height="224px"
                        component="img"
                        position="absolute"
                        bottom="20%"
                        left="0px"
                        src={img_path_1_224x1058}
                      />
                      <Box
                        width="100%"
                        height="304px"
                        component="img"
                        position="absolute"
                        top="13%"
                        left="0px"
                        src={img_path_3_304x1057}
                      />
                    </Box>
                  </Box>
                  <Box marginX="90px" marginY="25px" display="flex" justifyContent="space-between">
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      10:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      11:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      12:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      1:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      2:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      3:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      4:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      5:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      6:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      7:59PM
                    </Typography>
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
                backgroundColor: '#1C223C',
                borderRadius: '16px',
                paddingY: '40px',
              }}
            >
              <Grid container item display="flex" justifyContent="center">
                <Typography color="#fff" fontSize="24px" fontWeight="700">
                  Delegate Your Digital Asset Management Easily
                </Typography>
              </Grid>
              <Grid container>
                <Grid container item>
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
                          Create your account & deposit USDT on your preferred centralized exchange
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
                          Let our Quantitative algorithm make the best investment decisions for you!
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
              backgroundColor: '#1C223C',
              borderRadius: '16px',
            }}
          >
            <Grid item>
              <Box component="img" src={img_close_blue_gray_600} width="25px" height="25px" />
              <Box component="img" height="24px" src={img_path16} />
            </Grid>
            <Grid item>
              <Box component="img" src={img_vector} height="34px" />
            </Grid>
            <Grid item>
              <Box component="img" src={img_settings} height="23px" />
              <Box component="img" height="23px" src={img_vector_blue_gray_600} />
            </Grid>
            <Grid item>
              <Box component="img" src={img_user_blue_gray_600} height="27px" />
              <Box component="img" height="27px" src={img_group_1000003266} />
            </Grid>
            <Grid item>
              <Box component="img" src={img_g886} height="29px" />
            </Grid>
            <Grid item>
              <Box component="img" src={img_settings_blue_gray_600} height="32px" />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              backgroundImage: "url('images/img_partenrs_bg_png.png')",
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1C223C',
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
      </Stack>
    </Grid>
  );
};

export default QuantInvest;
