import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

//import "fontsource-league-spartan/latin.css"
//import "fontsource-league-gothic/latin.css"
//import "fontsource-roboto/latin.css"
//import "fontsource-alegreya/latin.css"
import "fontsource-alegreya-sans/latin.css"
//import "fontsource-merriweather/latin.css"
import "fontsource-merriweather-sans/latin.css"
import "fontsource-merriweather-sans/400-italic.css"
import "./typography.css"

console.log(kirkhamTheme)
kirkhamTheme.headerFontFamily = [`Merriweather Sans`, `sans-serif`]
kirkhamTheme.bodyFontFamily = [`Alegreya Sans`, `sans-serif`]
kirkhamTheme.baseFontSize = `18px`
kirkhamTheme.baseLineHeight = 1.4
kirkhamTheme.scaleRatio = 1.8
kirkhamTheme.headerWeight = 500

delete kirkhamTheme.googleFonts

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
