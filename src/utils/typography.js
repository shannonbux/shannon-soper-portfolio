import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

kirkhamTheme.headerFontFamily = [`BioRhyme`, `Georgia`, `serif`];
kirkhamTheme.bodyFontFamily = [`Cabin`, `sans-serif`];
kirkhamTheme.baseFontSize = `18px`;
kirkhamTheme.baseLineHeight = 1.5;
kirkhamTheme.headerLineHeight = 1.2;
kirkhamTheme.scaleRatio = 1.8;
kirkhamTheme.headerWeight = 400;
kirkhamTheme.bodyWeight = 400;
kirkhamTheme.bodyColor = `#333333`;

delete kirkhamTheme.googleFonts;

const typography = new Typography(kirkhamTheme);

export default typography;
export const rhythm = typography.rhythm;
