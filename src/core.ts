import type { AquamarkProps } from "./aquamark.props"

const CANVAS_ID = 'aquamark-root'
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
  // TODO: all of the follwing attributes should be configurable
  ctx.rotate(-20 * Math.PI / 180)
  ctx.font = '24px Microsoft JhengHei'
  ctx.fillStyle = '#dddddd'
  ctx.textAlign = 'left'
  // TODO: remove the const 350
  ctx.fillText(content, 350 / 3, 350 / 3)
  const dom = document.createElement('div')
  dom.id = CANVAS_ID
  dom.style.pointerEvents = 'none'
  dom.style.top = '70px'
  dom.style.left = '0px'
  dom.style.position = 'fixed'
  dom.style.zIndex = '100000'
  dom.style.width = document.documentElement.clientWidth - 100 + 'px'
  dom.style.height = document.documentElement.clientHeight - 100 + 'px'
  dom.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(dom)
  return CANVAS_ID
}