import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import LetsTalk from 'src/sections/dashboard/LetsTalk';
// sections

// ----------------------------------------------------------------------

export default function LetsTalkPage() {
  return (
    <>
      <Helmet>
        <title> Lets Talk! | Scale-In </title>
      </Helmet>
      <LetsTalk />
    </>
  );
}
