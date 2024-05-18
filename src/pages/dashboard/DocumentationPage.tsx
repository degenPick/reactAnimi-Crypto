import { Helmet } from 'react-helmet-async';
import {Typography} from "@mui/material";
// sections

// ----------------------------------------------------------------------

export default function DocumentationPage() {
  return (
    <>
      <Helmet>
        <title> Documentation | Scale-In </title>
      </Helmet>
      <Typography variant="h6" color="#fff">Documentation</Typography>

    </>
  );
}
