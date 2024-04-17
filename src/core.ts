import type { AquamarkProps } from "./aquamark.props"
export function render(configs: AquamarkProps) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  console.log(ctx)
  console.log(configs)
}