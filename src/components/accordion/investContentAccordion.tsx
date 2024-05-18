import {
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

type Props = {
  icon: string;
  title: string;
  content: string;
  vectorIcon: string;
};

const InvestContentAccordion = ({ icon, title, content, vectorIcon }: Props) => (
  <Accordion sx={{ border: '1px solid #FFFFFF1A', color: 'white' }}>
    <AccordionSummary
      expandIcon={<Box component='img' src={vectorIcon} />}
      sx={{
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
      }}
    >
      <Stack direction='row' spacing={2} alignItems='center'>
        <Box component="img" src={icon} width='64px' height='64px' />
        <Typography variant='body1' fontWeight={700}>{title}</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Typography variant='body2'>{content}</Typography>
    </AccordionDetails>
  </Accordion>
);

export default InvestContentAccordion;
