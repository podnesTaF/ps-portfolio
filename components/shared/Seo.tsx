import Head from "next/head";

const Seo = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta property="og:site_name" content="Portfolio | Oleksii Pidnebesnyi" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Oleksii's Portfolio" />
      <meta
        property="og:description"
        content="Learn about my qualifications, projects, passions and more"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oleksii-portfolio.com/" />
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:image:alt" content="My Portfolio" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="630" />
      <meta property="og:image:height" content="630" />
      <meta
        property="article:author"
        content="https://www.linkedin.com/in/oleksii-pidnebesnyi/"
      />
    </Head>
  );
};

export default Seo;
