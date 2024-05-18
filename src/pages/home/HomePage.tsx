import { Helmet } from 'react-helmet-async';
// sections
import Home from '../../sections/home/Home';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Scale-In </title>
      </Helmet>

      <Home />
    </>
  );
}
