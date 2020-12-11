import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

console.log(`hi`, kirkhamTheme)
const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
