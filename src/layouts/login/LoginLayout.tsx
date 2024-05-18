// @mui
import { Stack } from '@mui/material';
// components
//
import { StyledRoot, StyledContent } from './styles';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  illustration?: string;
  children: React.ReactNode;
};
export default function LoginLayout({ children, illustration, title }: Props) {
  return (
    <StyledRoot>
      <StyledContent>
        <Stack> {children} </Stack>
      </StyledContent>
    </StyledRoot>
  );
}
