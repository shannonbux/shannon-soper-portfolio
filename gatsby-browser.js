import { injectSpeedInsights } from "@vercel/speed-insights";

exports.onInitialClientRender = () => {
  console.log(2);
  injectSpeedInsights();
};
