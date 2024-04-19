import { CANVAS_ID } from "./core"
export function normalizedMutationRecord(record: MutationRecord[] | NodeList) {
  const res: any[] = []

  if (record instanceof NodeList) {
    for (const item of record) {
      const ob = item as HTMLElement
      if (ob.id === CANVAS_ID) res.push('delete')
      break
    }
  } else {
    for (const item of record) {
      const ob = item.target as HTMLElement
      if (ob && ob.id === CANVAS_ID) {
        res.push('change')
        break
      } else if (item.removedNodes.length) {
        normalizedMutationRecord(item.removedNodes)
      }
    }
  }
  return res
}