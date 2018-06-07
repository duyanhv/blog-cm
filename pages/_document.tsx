import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import {
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_IMAGE
} from '../nextjs/constants/env';

export default class extends Document {
  static getInitialProps = async props => {
    const d = Document;
    const documentProps = await d.getInitialProps(props);
    const { renderPage } = props;
    const page = renderPage();
    return { ...documentProps, ...page };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,
                        minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />

          <link rel="shortcut icon" href="/static/img/favicon.ico" />
          <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
          <link
            href="/static/plugins/flexslider/flexslider.css"
            rel="stylesheet"
            media="screen"
          />
          <link href="/static/css/cubeportfolio.min.css" rel="stylesheet" />
          <link href="/static/css/style.css" rel="stylesheet" />
          <link
            id="t-colors"
            href="/static/skins/default.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* <link id="bodybg" href="static/bodybg/bg1.css" rel="stylesheet" type="text/css" /> */}

          <script src="https://www.google.com/recaptcha/api.js" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
