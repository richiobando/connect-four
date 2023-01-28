import { convertToObject } from 'typescript'
import { describe, assert, expect, test } from 'vitest'
import { checkWinner, board } from '../src/logic/board'

//horizontals wins
const makeLine = board

describe('horizontals', () => {
  test('last line', () => {
      expect(checkWinner(makeLine([0], [0, 1, 2, 3]))).toBe(1)
  })
  test('first line', () => {
    expect(checkWinner(makeLine([3, 4, 5, 6]))).toBe(1)
  })
  test('second line init', () => {
    expect(checkWinner(makeLine([7, 8, 9, 10]))).toBe(1)
  })
  test('second line last', () => {
    expect(checkWinner(makeLine([10, 11, 12, 13]))).toBe(1)
  })
  test('last line last', () => {
    expect(checkWinner(makeLine([38, 39, 40, 41]))).toBe(1)
  })
})
describe('verticals', () => {
  test('first col first cells', () => {
    expect(checkWinner(makeLine( [0, 1, 2, 3],[0]))).toBe(true)
  })
  test('fisrt col last cells', () => {
    expect(checkWinner(makeLine([14, 21, 28, 35]))).toBe(true)
  })
  test('midel col last cells', () => {
    expect(checkWinner(makeLine([17, 24, 31, 38]))).toBe(true)
  })
  test('last col last cells', () => {
    expect(checkWinner(makeLine([20, 27, 34, 41]))).toBe(true)
  })
})
describe('diagonals down', () => {
  test('diagonals down', () => {
    expect(checkWinner(makeLine([0], [0, 1, 2, 3]))).toBe(true)
  })
  test('diagonals down', () => {
    expect(checkWinner(makeLine([3, 11, 19, 27]))).toBe(true)
  })
  test('diagonals down', () => {
    expect(checkWinner(makeLine([16, 24, 32, 40]))).toBe(true)
  })
  test('diagonals down', () => {
    expect(checkWinner(makeLine([20, 26, 32, 38]))).toBe(true)
  })
  test('diagonals down', () => {
    expect(checkWinner(makeLine([17, 25, 33, 41]))).toBe(true)
  })
})
describe('diagonals up', () => {
  test('first diagonals up', () => {
    expect(checkWinner(makeLine([3, 9, 15, 21]))).toBe(true)
  })
  test('last diagonals up first line', () => {
    expect(checkWinner(makeLine([6, 12, 18, 24]))).toBe(true)
  })
  test('first diagonals up last line', () => {
    expect(checkWinner(makeLine([20, 26, 32, 38]))).toBe(true)
  })
  test('last diagonals up last line', () => {
    expect(checkWinner(makeLine([20, 26, 32, 38]))).toBe(true)
  })
})
// prettier-ignore
const special1 = [
  null,   null,  null,  null,  null,  null,  null,
  null,   null,  null,  null,  null,  null,  null,
  null,  null,  null,  null,  null,  null,  null,
  null,  2,     null,  null,  null,  null,  null,
  1,    2,       1,     1,    null,  null,  null,
  1,    1,       2,     2,    null,  null,  null
]

