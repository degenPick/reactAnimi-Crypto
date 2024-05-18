import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { LoadingButton } from '@mui/lab';
import { useI18nContext } from 'src/i18n/i18n-react';

import Image from 'src/components/image';
import CustomItem, { ICustomItemProps } from 'src/components/dashboard/CustomItem';
import TextItem from 'src/components/dashboard/TextItem';

const data1: ICustomItemProps[] = [
  {
    title: 'Personalized Guidance',
    descriptions: [
      'Undivided attention to your financial goals, challenges, and aspirations. Discuss your unique situation and receive strategies for accelerated growth.',
    ],
    path: '/assets/lets_talk/personalized_guidance.png',
  },
  {
    title: 'Immediate Insights',
    descriptions: [
      'Rapidly changing financial landscape demands timely insights. Gain real-time advice and actionable steps for informed decisions.',
    ],
    path: '/assets/lets_talk/immediate_insights.png',
  },
  {
    title: 'Accelerated Learning Curve',
    descriptions: [
      'Leverage our years of experience for a fast-tracked financial learning curve. Absorb insights, strategies, and best practices.',
    ],
    path: '/assets/lets_talk/accelerated_learning_curve.png',
  },
];

const data2: ICustomItemProps[] = [
  {
    title: 'Risk Management Strategies',
    descriptions: [
      'Receive proven risk management tailored to your risk tolerance, ensuring confident navigation of markets.',
    ],
    path: '/assets/lets_talk/risk_management_strategies.png',
  },
  {
    title: 'Focused Problem-Solving',
    descriptions: [
      'Dive deep into your financial dilemmas or investment strategy for practical solutions and actionable steps.',
    ],
    path: '/assets/lets_talk/focused_problem_solving.png',
  },
  {
    title: 'Strategic Decision-Making',
    descriptions: [
      'Gain a strategic perspective on investment choices aligning with long-term goals and vision.',
    ],
    path: '/assets/lets_talk/strategic_decision_making.png',
  },
];

function Content() {
  const { LL } = useI18nContext();

  return (
    <>
      <TextItem
        title="Your Custom Financial Coaching Session!"
        description="In finance's dynamic realm, strategic decisions amidst complexities can be daunting. A 30-minute coaching call with us is a game-changer for your financial journey. You're not just investing in time; it's tailored expertise for your unique needs. Here's why it's invaluable."
        align="left"
      />

      <Box mt={4} sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2 }}>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          {data1.map((item: ICustomItemProps, index: number) => (
            <CustomItem
              key={`data-1${index}`}
              title={item.title}
              descriptions={item.descriptions}
              path={item.path}
              showOnlyDescription
            />
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          {data2.map((item: ICustomItemProps, index: number) => (
            <CustomItem
              key={`data-1${index}`}
              title={item.title}
              descriptions={item.descriptions}
              path={item.path}
              showOnlyDescription
            />
          ))}
        </Stack>

        <TextItem
          title="This isn't just a call; it's a pivotal moment in your financial journey. Invest in this session to unlock tailored knowledge, experience, and strategies propelling you toward financial success. Don't just navigate the financial landscape—master it with exclusive guidance. Book your session now for a proactive step toward a prosperous financial future."
          align="center"
        />
      </Box>

      <Divider sx={{ mt: 4 }} />

      <Stack mt={4} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <LoadingButton
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #4481EB, #04BEFE)',
            color: '#fff',
          }}
        >
          Book a call now for 200€
        </LoadingButton>
      </Stack>
    </>
  );
}

export default Content;
