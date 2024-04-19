/**
 * @vitest-environment jsdom
 */
import { describe, expect, test, vi, beforeAll } from 'vitest'
import Aquamark from '../src';
import { CANVAS_ID, render } from '../src/core';
import { defineProps } from '../src/props';


function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Aquamark Basic Usage', () => {
  let aquamark: Aquamark;

  beforeAll(() => {
    aquamark = new Aquamark();
    aquamark.init()
  });

  test('Aquamark should be rendered', async () => {
    const el = document.getElementById(CANVAS_ID)
    expect(el?.outerHTML).toMatchSnapshot()
  });

  test('Render should not render multi marks', () => {
    const orgingalEl = document.querySelectorAll(`#${CANVAS_ID}`)
    expect(orgingalEl.length).toEqual(1)
    render(defineProps({}))
    const latestEl = document.querySelectorAll(`#${CANVAS_ID}`)
    expect(latestEl.length).toEqual(1)
  })

  test('Aquamark cannot be changed', async () => {
    const spy = vi.spyOn(aquamark, 'init')
    await sleep(100)
    const el = document.getElementById(CANVAS_ID)!
    expect(spy).toBeCalledTimes(0)
    el.style.opacity = '0'
    await sleep(100)
    const elNew = document.getElementById(CANVAS_ID)!
    expect(elNew.style.opacity).toBe('')
    expect(elNew.outerHTML).not.contain('oapcity')
    expect(spy).toBeCalledTimes(1)
    expect(elNew).toMatchSnapshot()
  })

  test('Auamark cannot be removed', async () => {
    const el = document.getElementById(CANVAS_ID)!
    document.body.removeChild(el)
    await sleep(100)
    const newEl = document.getElementById(CANVAS_ID)
    expect(newEl).toBeDefined()
    expect(newEl?.outerHTML).toMatchSnapshot()
  })
})