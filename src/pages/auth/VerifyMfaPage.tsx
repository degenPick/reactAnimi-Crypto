import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Iconify from '../../components/iconify';
// sections
import AuthVerifyMfaForm from '../../sections/auth/AuthVerifyMfaForm';
// assets
import { EmailInboxIcon } from '../../assets/icons';
import {useAuthContext} from "../../auth/useAuthContext";

// ----------------------------------------------------------------------

export default function VerifyMfaPage() {
    const { user } = useAuthContext();

    return (
        <>
            <Helmet>
                <title> Verify MFA | Scale-In</title>
            </Helmet>

            <EmailInboxIcon sx={{ mb: 5, height: 96 }} />

            <Typography variant="h3" paragraph>
                {
                    `Please check your ${ user?.mfaMethod }!`
                }
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                {
                    `We have sent you a 6-digit confirmation code to your ${ user?.mfaMethod }, 
                    please enter the code in below box to verify your account.`
                }
            </Typography>

            <AuthVerifyMfaForm />

            <Typography variant="body2" sx={{ my: 3 }}>
                Don’t have a code? &nbsp;
                <Link component={RouterLink} to={PATH_AUTH.sendEmail} variant="subtitle2">Resend code</Link>
            </Typography>

            <Link
                component={RouterLink}
                to={PATH_AUTH.login}
                color="inherit"
                variant="subtitle2"
                sx={{
                    mx: 'auto',
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
