import { Helmet } from 'react-helmet-async';
// sections
import { GitHubCallback } from 'src/sections/auth/GithubCallback';
// import Login from '../../sections/auth/LoginAuth0';

// ----------------------------------------------------------------------

export default function GithubCallbackPage() {
  return (
    <>
      <Helmet>
        <title> Github Callback | Scale-In </title>
      </Helmet>

      <GitHubCallback />
    </>
  );
}
