import Layout from "../Layouts/Index";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/layout.css";
import "../css/sidebar.css";
import "../css/timetracking.css";
import "../css/crm.css";
import "../css/auth.css";
import "../css/admin.css";
import "../css/responsive.css";
import Head from "next/head";
import Script from "next/script";



function MyApp({ Component, pageProps }) {
  

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
    </>
  );
}

export default MyApp;
