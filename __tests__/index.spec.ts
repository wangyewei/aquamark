/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from 'vitest'
import Aquamark from '../src';
import { CANVAS_ID, render } from '../src/core';
import { defineProps } from '../src/props';
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
describe('Aquamark Basic Usage', () => {
  test('Aquamark should be rendered', async () => {
    const mark = new Aquamark()
    mark.init()
    await sleep(500)
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
    const mark = new Aquamark()
    mark.init()
    await sleep(500)
    const el = document.getElementById(CANVAS_ID)!
    el.style.opacity = '0'
    await sleep(500)
    const elNew = document.getElementById(CANVAS_ID)!
    expect(elNew.style.opacity).toBe('')
    expect(elNew).toMatchSnapshot()
    expect(elNew.outerHTML).not.contain('oapcity')
  })

});