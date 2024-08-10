// pages/_app.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setProgress(20);
    };
    const handleRouteComplete = () => {
      setProgress(100);
    };
    
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events]);

  return (
    <>
      <LoadingBar color="blue" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
