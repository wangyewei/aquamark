import { CANVAS_ID } from "./core"

export function normalizedMutationRecord(record: MutationRecord[]): boolean[] {
  const r: boolean[] = []

  for (const item of record) {
    if (item?.removedNodes && item.removedNodes.length) {
      for (const node of item.removedNodes) {
        if ((node as HTMLElement)?.id === CANVAS_ID) {
          r.push(true)
          break
        }
      }
    }
    const ob = item.target as HTMLElement
    if (ob?.id && ob.id === CANVAS_ID) {
      r.push(true)
      break
    }
  }

  return r
}