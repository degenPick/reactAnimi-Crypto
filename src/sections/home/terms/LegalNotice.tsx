import { Box, Stack, Typography } from '@mui/material';
import { useI18nContext } from '../../../i18n/i18n-react';
import LegalNoticeImage from '../../../assets/images/legal_notice.png';
import useResponsive from '../../../hooks/useResponsive';

const LegalNotice = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');
  return (
    <Box color="white" mt={isDesktop ? 16 : 2}>
      <Stack
        direction={isDesktop ? 'row' : 'column'}
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack width={isDesktop ? '45%' : '80%'}>
          <Typography variant="h1">{LL.legal_notice_title()}</Typography>
          <Typography variant="body1" fontWeight={400} mt={2} color="grey.400">
            {LL.legal_notice_content()}
          </Typography>
        </Stack>
        <Stack width={isDesktop ? '40%' : '80%'}>
          <Box component="img" src={LegalNoticeImage} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default LegalNotice;
