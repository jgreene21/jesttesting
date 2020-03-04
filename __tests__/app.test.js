import {
  originalArray 
} from '../app'

describe('original array test', () => {
  test('original array should return itself', () => {
    expect(originalArray([1,2,3,4]).toEqual([1,2,3,4]))
  })
})