import { describe, test, expect } from "vitest";
import { CANVAS_ID } from "../src/core";
import { normalizedMutationRecord } from "../src/normalizedMutationRecord";

describe('normalizedMutationRecord', () => {
  test('returns correct boolean array', () => {
    const record = [
      { removedNodes: [{ id: CANVAS_ID }] },
      { removedNodes: [{ id: 'some-other-id' }] },
      { target: { id: CANVAS_ID } },
      { target: { id: 'some-other-id' } },
      { removedNodes: [], target: { id: 'some-other-id' } },
    ] as any

    const result = normalizedMutationRecord(record);

    expect(result).toEqual([true, true])
  })
})