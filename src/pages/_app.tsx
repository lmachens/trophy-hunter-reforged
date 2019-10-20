import React from "react";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <style jsx global>{`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
            color: #f0f0f0;
            font-size: 16px;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
