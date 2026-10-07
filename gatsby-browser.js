// Global CSS belongs in Gatsby's browser entry point so it is emitted into the
// production stylesheet, rather than only being available while Typography
// evaluates its configuration during development.
import "fontsource-cabin/400.css";
import "fontsource-biorhyme/400.css";
import "./src/utils/typography.css";

let isInitialRoute = true;

// The Google tag in gatsby-ssr.js records the initial page load. Gatsby then
// navigates between pages without a full document load, so send one page view
// for each later client-side navigation.
export const onRouteUpdate = ({ location }) => {
  if (isInitialRoute) {
    isInitialRoute = false;
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("config", "G-HSD62XM8NG", {
      page_path: `${location.pathname}${location.search}`,
      page_title: document.title,
    });
  }
};
