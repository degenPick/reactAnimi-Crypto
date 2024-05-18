import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { GridAddIcon, GridRemoveIcon } from '@mui/x-data-grid';
import { useState } from 'react';

interface FaqAccordionType {
  question: string;
  answer: string;
}

const FaqAccordion = ({ question, answer }: FaqAccordionType) => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordion = (_: any, expandedState: boolean) => {
    setExpanded(expandedState);
  };
  return (
    <Accordion
      sx={{
        boxShadow: 'none !important',
      }}
      expanded={expanded}
      onChange={handleAccordion}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <GridRemoveIcon sx={{ color: '#4481EB' }} />
          ) : (
            <GridAddIcon sx={{ color: '#4481EB' }} />
          )
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="body1" fontWeight={700} color="#fff">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" color="#AAB2CD">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
