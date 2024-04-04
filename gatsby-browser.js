const { injectSpeedInsights } = require("@vercel/speed-insights");

exports.onInitialClientRender = () => {
  console.log(2);
  injectSpeedInsights();
};
