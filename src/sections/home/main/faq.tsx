import { Typography, Stack } from '@mui/material';
import { useI18nContext } from '../../../i18n/i18n-react';
import FaqAccordion from '../components/FaqAccordian';
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import img_contrast from '../../../assets/images/img_contrast.svg';

const Faq = () => {
  const { LL } = useI18nContext();

  return (
    <div>
      {/* <Stack m={{ sm: 4, xs: 2 }} px={{ sm: 4, xs: 2 }} pt={8} alignItems="center" id="faq">
        <Typography variant="h3" textAlign="center">
          {LL.faq_title()}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {LL.faq_subtitle()}
        </Typography>
        <Stack mt={8} alignItems="center" maxWidth={800}>
          <FaqAccordion question={LL.faq_question1()} answer={LL.faq_answer1()} />
          <FaqAccordion question={LL.faq_question2()} answer={LL.faq_answer2()} />
          <FaqAccordion question={LL.faq_question3()} answer={LL.faq_answer3()} />
          <FaqAccordion question={LL.faq_question4()} answer={LL.faq_answer4()} />
        </Stack>
      </Stack> */}
      <Grid container>
        <Grid container padding='80px 120px'>
          <Grid
            container          
            sx={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              backgroundColor:"#141a36",
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
                marginBottom: '20px',
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
                  Frequently Asked Questions
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
          </Grid>
          <Grid container display="flex" flexDirection="column">
            {[...Array(10)].map((_, index) => (
              <Accordion
                key={index + 1}
                sx={{
                  backgroundColor: '#141a36',
                  color: '#fff',
                  borderTop: '1px solid #fff',
                  borderBottom: '1px solid #fff',
                  padding: '20px',
                  fontSize: '28px',
                  fontWeight: 'bold',
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon
                      sx={{
                        color: '#fff',
                        fontSize: '28px',
                        fontWeight: 'bold',
                      }}
                    />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Question {index + 1}
                </AccordionSummary>
                <AccordionDetails>
                  <p>Answer {index + 1}</p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Faq;
