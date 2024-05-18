import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { useI18nContext } from 'src/i18n/i18n-react';
import TextItem from 'src/components/dashboard/TextItem';
import Image from 'src/components/image';
import CustomItem, { ICustomItemProps } from 'src/components/dashboard/CustomItem';

const data1: ICustomItemProps[] = [
  {
    title: 'Customer Engagement',
    descriptions: [
      'Join a dynamic investor community for discussions, insights, and web3 collaborations.',
      'Participate in fundraising campaigns and early investment opportunities.',
      'Navigating market turbulence is easier when you have a supportive community. ',
    ],
    path: '/assets/active_invest/customer_engagement.png',
  },
  {
    title: 'Diverse Opportunities Await',
    descriptions: [
      'Diversify your portfolio for multiple streams of returns and income.',
      'Unlock various investment opportunities, including ICOs, IDOs, Seed, and Private rounds.',
      'Build a resilient and dynamic portfolio that stands the test of market fluctuations.',
    ],
    path: '/assets/active_invest/diverse_opportunities.png',
  },
];

const data2: ICustomItemProps[] = [
  {
    title: 'Top-tier Support',
    descriptions: [
      'Fast-track your financial progress with personalized guidance.',
      "Benefit from industry leaders' support and insights.",
      'Accelerate your success within the ever-evolving financial landscape. ',
    ],
    path: '/assets/active_invest/top_tier.png',
  },
  {
    title: 'Investment Insight',
    descriptions: [
      'Explore meticulously crafted investment plans and strategies.',
      'Gain access to exclusive insights that drive success.',
      'Mirror our positions and elevate your investment game with real-time, expert guidance.',
    ],
    path: '/assets/active_invest/investment_insight.png',
  },
  {
    title: 'Stay Informed',
    descriptions: [
      'Receive regular updates on market trends and investment opportunities.',
      'Access a curated feed of news and information relevant to your financial journey.',
    ],
    path: '/assets/active_invest/stay_informed.png',
  },
];

function Content() {
  const { LL } = useI18nContext();

  return (
    <>
      <TextItem title="Congratulations on joining Scale-In's exclusive private club! We are thrilled to have you on board, and your journey to financial prosperity begins now. Below, you'll find key features and resources tailored to enhance your experience." />

      <Box mt={4} sx={{ color: 'grey.200', backgroundColor: '#202540', borderRadius: 1, p: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          {data1.map((item: ICustomItemProps, index: number) => (
            <CustomItem
              key={`data-1${index}`}
              title={item.title}
              descriptions={item.descriptions}
              path={item.path}
            />
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          {data2.map((item: ICustomItemProps, index: number) => (
            <CustomItem
              key={`data-1${index}`}
              title={item.title}
              descriptions={item.descriptions}
              path={item.path}
            />
          ))}
        </Stack>

        <TextItem title="Remember, your success is our priority, and we're here to support you every step of the way. If you have any questions or need assistance, feel free to reach out to our dedicated support team." />
      </Box>

      <Divider sx={{ mt: 4 }} />

      <Stack mt={4} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          sx={{ p: 2, bgcolor: 'white', color: '#5865F2' }}
          endIcon={
            <Image
              alt="/assets/active_invest/discord.png"
              src="/assets/active_invest/discord.png"
              disabledEffect
              sx={{ width: '20px' }}
            />
          }
        >
          <Typography variant="h6" textAlign="center">
            Join The Club Now On Discord
          </Typography>
        </Button>
      </Stack>
    </>
  );
}

export default Content;
