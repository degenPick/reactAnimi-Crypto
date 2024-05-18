import { Typography, Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Image from 'src/components/image';
import { useI18nContext } from '../../i18n/i18n-react';
import Logo from '../../assets/images/logo.png';
import Youtube from '../../assets/images/youtube.png';
import X from '../../assets/images/x.png';
import Instagram from '../../assets/images/instagram.png';
import { PATH_HOME } from '../../routes/paths';

type FooterProps = {
  openDisclaimerDialog: VoidFunction;
};

const Footer = ({ openDisclaimerDialog }: FooterProps) => {
  const { LL } = useI18nContext();

  const navigate = useNavigate();

  const goToHome = () => {
    // navigate(PATH_HOME.root);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  const goToTermsAndConditions = () => {
    console.log('go to terms and conditions:::');
    navigate(PATH_HOME.termsAndConditions);
  };

  return (
    <Stack
      p={{ md: 4, sm: 2 }}
      alignItems="center"
      sx={{ backgroundColor: '#252B45', color: 'white' }}
    >
      {/* <Box component="img" src={Logo} onClick={goToHome} /> */}
      <Image
        src="/assets/logo.png"
        sx={{ width: '160px', height: '40px', mb: 2, cursor: 'pointer' }}
        onClick={goToHome}
      />
      <Typography variant="body2" color="#AAB2CD" textAlign="center">
        {LL.footer_subtitle()}
      </Typography>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          mt: 4,
        }}
      >
        <Typography m={2} sx={{ cursor: 'pointer' }} onClick={goToTermsAndConditions}>
          {LL.term_condition()}
        </Typography>
        <Typography m={2} sx={{ cursor: 'pointer' }} onClick={openDisclaimerDialog}>
          {LL.disclamer()}
        </Typography>
        <Typography m={2} sx={{ cursor: 'pointer' }}>
          {LL.documentation()}
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        pb={4}
        alignItems="center"
        sx={{
          mt: 4,
        }}
      >
        <Box mx={2} component="img" src={Youtube} sx={{ cursor: 'pointer' }} />
        <Box mx={2} component="img" src={X} sx={{ cursor: 'pointer' }} />
        <Box mx={2} component="img" src={Instagram} sx={{ cursor: 'pointer' }} />
      </Stack>
    </Stack>
  );
};

export default Footer;
