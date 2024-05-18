import { Stack, Typography } from '@mui/material';
import {ReactNode} from "react";

interface SubscribeTextType {
  number: string;
  title: string;
  text1: ReactNode;
  text2?: ReactNode;
}

const LegalAgreementItem = ({ number, title, text1, text2 }: SubscribeTextType) => (
  <Stack direction="column" alignItems="left" m={2} p={2} maxWidth="820px" bgcolor="#111730" borderRadius={2}>
    <Stack direction="row" alignItems="center">
      <Typography variant="h3" color="#373E5F">
        {number}
      </Typography>
      <Typography variant="h4" ml={2}>
        {title}
      </Typography>
    </Stack>
    <Stack direction="column" alignItems="left">
      <Stack my={1} p={3} bgcolor="#272E4F" borderRadius={1} spacing={2}>
        {text1}
      </Stack>
      {text2 && (
        <Stack my={1} p={3} bgcolor="#272E4F" borderRadius={1}>
          {text2}
        </Stack>
      )}
    </Stack>
  </Stack>
);

export default LegalAgreementItem;
