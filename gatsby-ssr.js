const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="google-gtag-loader"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-HSD62XM8NG"
    />,
    <script
      key="google-gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HSD62XM8NG');
        `,
      }}
    />,
  ]);
};
