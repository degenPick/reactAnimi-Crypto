import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Stack, Typography, Paper, Box, Button, Grid, Divider, Tab, Tabs } from '@mui/material';
import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';

import img_ellipse_2040_2 from '../../../assets/images/img_ellipse_2040_2.png';
import img_contrast from '../../../assets/images/img_contrast.svg';
import img_perspective from '../../../assets/images/img_perspective.svg';
import img_goal from '../../../assets/images/img_goal.svg';
import img_approach from '../../../assets/images/img_approach.svg';

const AboutUsContent = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');

  const [value, setValue] = useState('1');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <Stack direction="row" justifyContent="center" width="100%" mt={4} id="about">
        <Paper
          elevation={0}
          sx={{
            bgcolor: '#7061B20D',
            color: 'white',
            width: isDesktop ? '60%' : '90%',
            px: isDesktop ? 8 : 4,
            py: 4,
            mb: 8,
          }}
        >
          <Stack spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box width="40px" borderBottom="1px solid white" mb={2} />
              <Typography variant="h6" fontWeight={700}>
                {LL.about_us_card_title()}
              </Typography>
            </Stack>
            <Typography variant="h2">{LL.about_us_card_title()}</Typography>
            <Typography variant="body1" fontWeight={700}>
              {LL.about_us_card_content()}
            </Typography>
            <Typography variant="h2" fontWeight={400}>
              {LL.about_us_card_second_title()}
            </Typography>
            <Typography variant="body1">{LL.about_us_card_second_part_content_one()}</Typography>
            <Typography variant="body1">{LL.about_us_card_second_part_content_two()}</Typography>
            <Box>
              <Typography variant="body1" component="span">
                {LL.about_us_card_second_part_content_three()}
              </Typography>
              <Typography variant="h5" component="span" fontFamily="Poppins">
                {LL.today()}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack> */}
      <Grid container id="about">
        <Stack
          spacing={5}
          sx={{
            padding: '80px 120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(34,41,69,255)',
          }}
        >
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
                  paddingX: '70px',
                  paddingY: '10px',
                  borderRadius: '16px',
                  textTransform: 'capitalize',
                }}
              >
                {LL.about_us_card_title()}
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
          <Grid
            container
            sx={{
              backgroundColor: '#141a36',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            <Stack spacing={4}>
              <Grid container>
                <Grid container spacing={4}>
                  <Grid item md={4}>
                    <Grid container>
                      <Grid item md={5}>
                        <Box
                          component="img"
                          src={img_ellipse_2040_2}
                          sx={{ width: '189px', height: '189px' }}
                        />
                      </Grid>
                      <Grid item md={7}>
                        <Box
                          component="section"
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'left',
                            padding: '20px',
                          }}
                        >
                          <Stack spacing={1}>
                            <Typography variant="h4" sx={{ color: '#fff', fontWeight: '700' }}>
                              Mohammad Ghanay
                            </Typography>
                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: '700' }}>
                              Founder & CEO
                            </Typography>
                            <Box
                              component="img"
                              src={img_ellipse_2040_2}
                              sx={{ width: '37px', height: '37px' }}
                            />
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={8}>
                    <Box
                      sx={{
                        border: '1px solid #777A8A',
                        height: '207px',
                        backgroundColor: '#1c223c',
                        borderRadius: '15px',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <TabContext value={value}>
                        <Stack sx={{ width: '100%' }}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                              <Tab
                                label="Team & History"
                                value="1"
                                sx={{ color: '#fff' }}
                                className="tab-heading"
                              />
                              <Tab
                                label="Our Mission"
                                value="2"
                                sx={{ color: '#fff' }}
                                className="tab-heading"
                              />
                              <Tab
                                label="Our Vision"
                                value="3"
                                sx={{ color: '#fff' }}
                                className="tab-heading"
                              />
                            </TabList>
                          </Box>
                          <Divider color="white" />
                          <TabPanel value="1">
                            <Typography variant="h5">
                              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&quot;
                            </Typography>
                          </TabPanel>
                          <TabPanel value="2">
                            <Typography variant="h5">
                              &quot;Sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.&quot;
                            </Typography>
                          </TabPanel>
                          <TabPanel value="3">
                            <Typography variant="h5">
                              &quot;Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo consequat.&quot;
                            </Typography>
                          </TabPanel>
                        </Stack>
                      </TabContext>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid container spacing={4}>
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
                      <Box component="img" src={img_perspective} sx={{ width: '84px' }} />
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
                        padding: '40px',
                        border: '1px solid #777A8A',
                        borderRadius: '15px',
                      }}
                    >
                      <Box component="img" src={img_goal} width="84px" />
                      <Typography color="#fff" fontSize="32px">
                        Goal
                      </Typography>
                      <Typography color="#a2a5b8" fontSize="18px" textAlign="center">
                        Our obsession is to empower individuals on their financial journey,
                        providing accessible solutions leveraging innovation and expertise. By
                        fostering a community committed to financial well-being, we aim to make the
                        path to economic empowerment accessible to all
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
                      <Box component="img" src={img_approach} width="84px" />
                      <Typography color="#fff" fontSize="32px">
                        Approach
                      </Typography>
                      <Typography color="#a2a5b8" fontSize="18px" textAlign="center">
                        Guided by excellence, our method blends technology with personalized
                        insights. We offer a quantitative automated investment solution and
                        exclusive access to our private club, ensuring each individuals financial
                        strategy is uniquely tailored to their aspirations
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid container display="flex" alignItems="center" justifyContent="center">
                  <Typography color="#fff" fontSize="22px">
                    Who are you? Active or Passive Investor? Beginner or Experimented? It doesnt
                    matter – we have tailored unique services for you!
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </div>
  );
};

export default AboutUsContent;
