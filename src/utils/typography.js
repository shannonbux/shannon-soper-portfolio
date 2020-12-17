import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

console.log(kirkhamTheme)
kirkhamTheme.headerFontFamily = [`League Spartan`, `sans-serif`]

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
