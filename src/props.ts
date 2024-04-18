export interface AuqamarkFont {
  color: string
  fontSize: number | string
  fontWeight: 'normal' | 'light' | 'weight' | number
  fontStyle: 'none' | 'normal' | 'italic' | 'oblique'
  fontFamily: string
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center'
  textBaseline:
  | 'top'
  | 'hanging'
  | 'middle'
  | 'alphabetic'
  | 'ideographic'
  | 'bottom'
}

export type AquamarkProps = {
  content: string
  rotate: number
  font: AuqamarkFont,
  top?: number
  left?: number
  zIndex?: number
}

const defaultFontProps = (): AuqamarkFont => ({
  color: 'rgba(0,0,0,.15)',
  fontSize: 22,
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontFamily: 'normal',
  textAlign: 'center',
  textBaseline: 'middle'
})

const font = defaultFontProps()
const defaultProps = (): AquamarkProps => ({
  content: 'Aquamark',
  rotate: -22,
  font,
  top: 0,
  left: 0,
  zIndex: 100
})

export const defineProps = (props: Partial<AquamarkProps> = {}) =>
  Object.assign({}, defaultProps(), props)