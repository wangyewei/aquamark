import type { AquamarkProps, AuqamarkFont } from "./props"

export const CANVAS_ID = 'aquamark-root'
export function render(configs: AquamarkProps) {
  const CANVAS_EL = document.querySelector(`#${CANVAS_ID}`)
  if (CANVAS_EL) {
    document.body.removeChild(CANVAS_EL)
  }
  const canvas = document.createElement('canvas')
  draw(canvas, configs)
}

function draw(
  canvas: HTMLCanvasElement,
  props: AquamarkProps
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const { content } = props
  const [width, height] = getSize(ctx, content)
  const { left, top, zIndex } = props
  const [rotate, font] = normalizedAttts(props, height)
  const { fontColor, fontStr, textAlign, fontSize } = font
  // TODO: all of the follwing attributes should be configurable
  ctx.rotate(rotate)
  ctx.font = fontStr
  ctx.fillStyle = fontColor
  ctx.textAlign = textAlign
  // TODO: based on FontGap
  ctx.fillText(
    content ?? '',
    width / 2,
    height + Number(fontSize)
  )
  const dom = document.createElement('div')
  dom.id = CANVAS_ID
  dom.style.pointerEvents = 'none'
  dom.style.top = top + 'px'
  dom.style.left = left + 'px'
  dom.style.position = 'fixed'
  dom.style.zIndex = zIndex + '' || '0'
  dom.style.width = document.documentElement.clientWidth + 'px'
  dom.style.height = document.documentElement.clientHeight + 'px'
  dom.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(dom)
  return CANVAS_ID
}

function normalizedAttts(
  props: AquamarkProps,
  height: number
): [number,
    {
      fontStr: string,
      fontColor: string,
      textAlign: AuqamarkFont['textAlign'],
      fontSize: AuqamarkFont['fontSize']
    }
  ] {
  const { rotate, font } = props
  const _rotate = (Math.PI / 180) * rotate
  const { fontStyle, fontWeight, fontSize, fontFamily, color, textAlign } = font
  const _font = `${fontStyle} normal ${fontWeight} ${fontSize}px/${height}px ${fontFamily}`
  return [_rotate, { fontStr: _font, fontColor: color, textAlign, fontSize }]
}

function getSize(
  ctx: CanvasRenderingContext2D,
  content: string
): [number, number] {
  let defaultHeight = 64
  let defaultWidth = 120
  const metrics = ctx.measureText(content)
  const size = [metrics.width,
  metrics.fontBoundingBoxAscent !== undefined ?
    metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent :
    metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
  ]
  defaultHeight = Math.ceil(Math.max(defaultHeight, size[1]))
  defaultWidth = Math.ceil(Math.max(defaultWidth, size[0]))
  return [defaultWidth, defaultHeight]
}