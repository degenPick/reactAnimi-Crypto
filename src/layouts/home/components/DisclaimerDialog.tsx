// @mui
import {
  Dialog,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  Box,
  DialogProps,
} from '@mui/material';

//
import { useI18nContext } from '../../../i18n/i18n-react';

// ----------------------------------------------------------------------

export interface DisclaimerDialogProps extends Omit<DialogProps, 'title'> {
  open: boolean;
  onClose: VoidFunction;
}

export default function DisclaimerDialog({ open, onClose, ...other }: DisclaimerDialogProps) {
  const { LL } = useI18nContext();

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={onClose}
      {...other}
      PaperProps={{
        style: {
          backgroundColor: '#141A36',
          boxShadow: 'none',
          maxWidth: 1024,
          borderRadius: 16,
        },
      }}
    >
      <DialogTitle sx={{ pb: 2 }} textAlign="center">
        {LL.disclaimerTitle()}
      </DialogTitle>
      <DialogContent
        sx={{ typography: 'body2', m: 3, p: 2, backgroundColor: '#202540', borderRadius: 2 }}
      >
        <Typography variant="body1" sx={{ mt: 4 }}>
          1.{' '}
          <Box component="span" fontWeight={700}>
            {LL.disclaimerSubTitle1()}
          </Box>
          {`: ${LL.disclaimerText1()}`}
        </Typography>
        <Typography variant="body1">
          2.{' '}
          <Box component="span" fontWeight={700}>
            {LL.disclaimerSubTitle2()}
          </Box>
          {`: ${LL.disclaimerText2()}`}
        </Typography>
        <Typography variant="body1">
          3.{' '}
          <Box component="span" fontWeight={700}>
            {LL.disclaimerSubTitle3()}
          </Box>
          {`: ${LL.disclaimerText3()}`}
        </Typography>
        <Typography variant="body1">
          4.{' '}
          <Box component="span" fontWeight={700}>
            {LL.disclaimerSubTitle4()}
          </Box>
          {`: ${LL.disclaimerText4()}`}
        </Typography>
        <Typography variant="body1">
          5.{' '}
          <Box component="span" fontWeight={700}>
            {LL.disclaimerSubTitle5()}
          </Box>
          {`: ${LL.disclaimerText5()}`}
        </Typography>
        <Typography variant="body1">
          6.{' '}
          <Box component="span" fontWeight={700}>
            {LL.disclaimerSubTitle6()}
          </Box>
          {`: ${LL.disclaimerText6()}`}
        </Typography>
        <Typography variant="body1">
          7.{' '}
          <Box component="span" fontWeight={700}>
            {LL.disclaimerSubTitle7()}
          </Box>
          {`: ${LL.disclaimerText7()}`}
        </Typography>

        <Typography
          variant="body1"
          fontWeight={700}
          my={1}
        >{`${LL.disclaimerCarefullyRead()}`}</Typography>
      </DialogContent>

      <DialogActions>
        <Button
          fullWidth
          variant="outlined"
          color="inherit"
          onClick={onClose}
          sx={{
            background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
            color: '#fff',
          }}
        >
          {LL.continue()}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
