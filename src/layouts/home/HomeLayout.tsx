import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { Stack } from '@mui/material';
// hooks
import Header from './Header';
import Footer from './Footer';
import DisclaimerDialog from './components/DisclaimerDialog';

export interface IHomeLayoutProps {
  showFooter?: boolean;
  showHeader?: boolean;
}
// ----------------------------------------------------------------------

export default function HomeLayout({ showFooter = true, showHeader = true }: IHomeLayoutProps) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  const openDisclaimerDialog = () => {
    setDisclaimerOpen(true);
  };

  return (
    <>
      {showHeader && <Header />}

      <Stack
        sx={{
          backgroundColor: '#141A36',
          color: 'white',
          pt: showHeader ? { xs: 8, md: 5 } : { xs: 0 },
        }}
      >
        <Outlet />
      </Stack>
      {showFooter && (
        <>
          <Footer openDisclaimerDialog={openDisclaimerDialog} />
          <DisclaimerDialog open={disclaimerOpen} onClose={() => setDisclaimerOpen(false)} />
        </>
      )}
    </>
  );
}
