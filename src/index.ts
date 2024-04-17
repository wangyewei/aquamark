import { defineProps, type AquamarkProps } from './aquamark.props'
import { render } from './core'

export default class Aquamark {
  #configs: AquamarkProps

  constructor(configs: AquamarkProps) {
    this.#configs = defineProps(configs)
  }

  init() {
    this.#renderMark(this.#configs)
  }

  #renderMark(configs: AquamarkProps) {
    render(configs)
  }
}


