import { injectSpeedInsights } from "@vercel/speed-insights";

exports.onInitialClientRender = () => {
  injectSpeedInsights();
};
