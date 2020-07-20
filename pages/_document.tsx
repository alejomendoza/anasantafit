// @generated: @expo/next-adapter@2.0.6
import Document, { Head, Html, NextScript, Main } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Ana Santa Fit" />
          <meta
            name="description"
            content="Ser saludable núnca fue tan fácil"
          />
          <meta
            name="keywords"
            content="saludable, fit, calorias, guia, comer bien"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://www.paypal.com/sdk/js?client-id=Aek1XsnG8zwwHcAIQEg4MtOO4jgi_WgMNBACUR3DaMKMH94NFzozic2P-QHCAqvfPBsRnSZWiBvwIbAJ" />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
