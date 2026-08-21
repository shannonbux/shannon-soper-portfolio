// Spacing scale.
//
// One unit is 8px. Call space(n) for n units: space(2) is 16px, space(6) is
// 48px. Half units are allowed — space(0.5) is 4px — but only for tight
// typographic gaps such as a label sitting above its value. Anything else
// should land on a whole unit.
//
// Why a function rather than named sizes: the argument is the number of units,
// so a value that is off the grid is visible at the call site. space(2.3) reads
// as wrong in a way that `margin: 18.9px` never did.
//
// The rule this replaces: spacing used to come from typography's rhythm(),
// which is baseFontSize x baseLineHeight = 18 x 1.4 = 25.2px. Every multiple of
// it — 6.3, 12.6, 18.9, 37.8, 50.4 — misses an 8px grid, and it silently
// coupled page padding to a line-height setting. rhythm() is still correct for
// vertical type rhythm; it is no longer used for layout.

const UNIT = 8

export const space = (units) => `${units * UNIT}px`

// Unitless, for when a number is needed rather than a CSS string.
export const spaceValue = (units) => units * UNIT

// Page-level widths. Not spacing, but they belong with it: these are the other
// numbers that decide whether two pages line up.
export const PAGE_MAX_WIDTH = 1152 // outer shell, includes the gutter
export const CONTENT_MAX_WIDTH = 800 // prose column: articles, Blog, Work

// Page gutter. The shell padding, which sets the left edge everything aligns to.
export const GUTTER = {
  narrow: space(2), // 16px, below 720px
  wide: space(6), // 48px, 720px and up
}
