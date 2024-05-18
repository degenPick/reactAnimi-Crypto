import React from 'react';

import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { useI18nContext } from '../../../i18n/i18n-react';
import img_contrast from '../../../assets/images/img_contrast.svg';

const Testimonial = () => {
  const { LL } = useI18nContext();

  return (
    <div>
      <Grid container>
        <Grid container>
          <Stack spacing={2} padding="80px 120px" width="100%">
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
                  Testimonials
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
          </Stack>
        </Grid>
        <Grid container>
          <Stack spacing={2}>
            <Grid container display="flex" justifyContent="center" textAlign="center">
              <Grid container item display="flex" justifyContent="center">
                <Typography color="#fff" fontSize="28px" fontWeight="700">
                  Customers Feedback, Our Improvement Key
                </Typography>
              </Grid>
              <Grid container item display="flex" justifyContent="center">
                <Typography color="#a2a5b8" lineHeight="29px">
                  We highly value the feedback from our customers as it helps us continuously
                  improve and tailor our services to better meet their needs
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid container spacing={2}>
                <Grid item md={4}>
                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#1c223c',
                      spacing: 1,
                      padding: '40px',
                      border: '1px solid #777A8A',
                      borderRadius: '15px',
                    }}
                  >
                    <Box component="img" src="images/img_perspective.svg" width="84px" />
                    <Typography color="#fff" fontSize="32px">
                      Perspective
                    </Typography>
                    <Typography color="#a2a5b8" fontSize="18px" textAlign="center">
                      In envisioning a future, we see a financial landscape where everyone has the
                      tools to invest confidently. A world where financial freedom is not a luxury
                      but a universal reality, achieved through informed decisions and strategic
                      investments in finance 2.0
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={4}>
                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#1c223c',
                      spacing: 1,
                      padding: '40px',
                      border: '1px solid #777A8A',
                      borderRadius: '15px',
                    }}
                  >
                    <Box component="img" src="images/img_goal.svg" width="84px" />
                    <Typography color="#fff" fontSize="32px">
                      Goal
                    </Typography>
                    <Typography color="#a2a5b8" fontSize="18px" textAlign="center">
                      Our obsession is to empower individuals on their financial journey, providing
                      accessible solutions leveraging innovation and expertise. By fostering a
                      community committed to financial well-being, we aim to make the path to
                      economic empowerment accessible to all
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={4}>
                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#1c223c',
                      spacing: 1,
                      padding: '40px',
                      border: '1px solid #777A8A',
                      borderRadius: '15px',
                    }}
                  >
                    <Box component="img" src="images/img_approach.svg" width="84px" />
                    <Typography color="#fff" fontSize="32px">
                      Approach
                    </Typography>
                    <Typography color="#a2a5b8" fontSize="18px" textAlign="center">
                      Guided by excellence, our method blends technology with personalized insights.
                      We offer a quantitative automated investment solution and exclusive access to
                      our private club, ensuring each individuals financial strategy is uniquely
                      tailored to their aspirations
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Grid>

        <Grid container>
          <Grid container padding="80px 120px">
            <Grid
              container
              border="1px solid #777A8A"
              borderRadius="16px"
              padding="40px"
              position="relative"
              sx={{
                backgroundImage: "url('images/Frame.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'right',
              }}
            >
              <Grid item md={7}>
                <Stack>
                  <Typography fontSize="32px" color="#fff">
                    Join Our Telegram for Daily Updates!
                  </Typography>
                  <Typography fontSize="18px" color="#A2A5B8">
                    Join our Telegram Channel and stay ahead of the curve in your investment journey
                    where we offer a comprehensive source of timely market analysis, investment
                    tips, and expert advice delivered directly to your device.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item md={5} display="flex" alignItems="center" justifyContent="center">
                <FormControl sx={{ width: '40ch', backgroundColor: '#272f4c' }}>
                  <OutlinedInput placeholder="Enter Your Email Address" sx={{ color: '#a2a5b8' }} />
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
                  Join
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid container paddingX="225px">
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Grid
                container
                sx={{
                  border: '1px solid #777A8A',
                  borderRadius: '16px',
                  padding: '10px',
                  position: 'relative',
                  backgroundColor: '#1c223c',
                }}
              >
                <Grid
                  item
                  sx={{
                    md: 6,
                    padding: '20px',
                    backgroundColor: '#1C223C',
                    border: '1px solid #777A8A',
                    borderRadius: '16px',
                  }}
                >
                  <Grid container display="flex" justifyContent="center">
                    <Box
                      component="img"
                      height="57px"
                      src="images/img_footer_logo.png"
                      paddingX="40px"
                    />
                    <Divider
                      variant="middle"
                      sx={{
                        color: '#fff',
                      }}
                    />
                    <Box sx={{ backgroundColor: '#141A36', paddingX: '10px', marginX: '40px' }}>
                      <FacebookIcon sx={{ fontSize: '57px' }} />
                      <InstagramIcon sx={{ fontSize: '57px' }} />
                      <XIcon sx={{ fontSize: '57px' }} />
                    </Box>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                  <Stack spacing={1} padding="10px">
                    <Typography color="#fff" fontSize="16px" fontWeight="bold">
                      Important Links
                    </Typography>
                    <Divider sx={{ color: '#fff' }} />
                    <Grid container spacing={2}>
                      <Grid item md={3}>
                        <Typography color="#fff" fontSize="16px">
                          Contact Us
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography color="#fff" fontSize="16px">
                          Quant Invest
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography color="#fff" fontSize="16px">
                          Private Club
                        </Typography>
                      </Grid>
                      <Grid item md={3}>
                        <Typography color="#fff" fontSize="16px">
                          Blogs
                        </Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
              <Grid container display="flex">
                <Grid item md={4} display="flex" justifyContent="center">
                  <Link href="#" color="#A1A3AF">
                    Terms & Conditions
                  </Link>
                </Grid>
                <Grid item md={4} display="flex" justifyContent="center">
                  <Link href="#" color="#A1A3AF">
                    Disclaimer
                  </Link>
                </Grid>
                <Grid item md={4} display="flex" justifyContent="center">
                  <Link href="#" color="#A1A3AF">
                    Documentation
                  </Link>
                </Grid>
              </Grid>
              <Divider sx={{ color: '#A1A3AF' }} />
              <Grid container paddingBottom="40px" display="flex" justifyContent="center">
                <Typography color="#A1A3AF" textAlign="center">
                  Copyright © 2017 - 2024 Scale-in - All Rights Reserved
                </Typography>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonial;
