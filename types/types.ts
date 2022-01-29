import { CSSInterpolation } from '@emotion/serialize'

/** Alias for customCss props */
export type TwinCSS = CSSInterpolation
/**
 * Additional styles in any Twin format (css, tw, style object, array)
 */
export type CustomCssProps = {
  customCss?: TwinCSS
}
