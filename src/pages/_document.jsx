import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Portfólio AgnaldoCordeiro" />
          <meta
            name="keywords"
            content="Portfólio de AgnaldoCordeiro, Portfólio de AgnaldoCordeiro"
          />
          <meta name="author" content="Agnaldo Cordeiro" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
