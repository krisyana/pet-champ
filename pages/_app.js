import '../css/style.css';
import '../css/form.css';
import '../css/carousel.css';
import '../sass/main.scss';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/layouts/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PetChamp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/new">
            <a>Add Pet</a>
          </Link>
        </div>
        <img
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
        ></img>
      </div>
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
