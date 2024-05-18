import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Iconify from '../../components/iconify';
// sections
import AuthSendPhoneForm from '../../sections/auth/AuthSendPhoneForm';
// assets
import { EmailInboxIcon } from '../../assets/icons';

// ----------------------------------------------------------------------

export default function SendPhonePage() {
    return (
        <>
            <Helmet>
                <title> Send Phone | Scale-In</title>
            </Helmet>

            <EmailInboxIcon sx={{ mb: 5, height: 96 }} />

            <Typography variant="h3" paragraph>
                Do you want to verify phone number?
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                Please enter the phone number associated with your account and We will email you a link to
                verify your account.
            </Typography>

            <AuthSendPhoneForm />

            <Link
                component={RouterLink}
                to={PATH_AUTH.login}
                color="inherit"
                variant="subtitle2"
                sx={{
                    mx: 'auto',
                    mt: 3,
                    alignItems: 'center',
                    display: 'inline-flex',
                }}
            >
                <Iconify icon="eva:chevron-left-fill" width={16} />
                Return to sign in
            </Link>
        </>
    );
}
