import { defineProps, type AquamarkProps } from './props'
import { render } from './core'
import { normalizedMutationRecord } from './normalizedMutationRecord'
export default class Aquamark {
  #configs: AquamarkProps

  constructor(configs?: Partial<AquamarkProps>) {
    this.#configs = defineProps(configs)
  }

  init() {
    this.#renderMark(this.#configs)
  }

  #renderMark(configs: AquamarkProps) {
    render(configs).then(this.#observe.bind(this))
  }

  #observe(observer?: HTMLDivElement) {
    if (!observer?.parentElement) return
    const target = observer.parentElement

    const ob = new MutationObserver(target => {
      const l = normalizedMutationRecord(target)
      if (l.length) this.init()
    })

    ob.observe(target, {
      childList: true,
      attributes: true,
      subtree: true,
    })
  }
}


