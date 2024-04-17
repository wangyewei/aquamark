import { expect, describe, it } from 'vitest'
import Aquamrk from '../src'

describe('Aquamark', () => {
  describe('Basic usage', () => {
    it('init is a function', () => {
      const mark = new Aquamrk()
      expect(typeof mark.init).toBe('function')
    })
  })

})