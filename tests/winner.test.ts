import { convertToObject } from 'typescript';
import { describe, assert, expect, test } from 'vitest'
import { checkWinner } from '../src/logic/board'

const board = Array.from({ length: 42 }).fill(null)
//horizontals wins
const makeLine = (cells)=>board.map((e,i)=>cells.includes(i)? true : null )
const lastLast = makeLine([38,39,40,41])
const secondLine = makeLine([10,11,12,13])
const secondLineInitialize = makeLine([7,8,9,10])
const first =makeLine([0,1,2,3])
const finaleLine = makeLine([3,4,5,6])

//verticals wins
const firstCol = makeLine([0,7,14,21])
const firstColLastcells = makeLine([14,21,28,35])
const lastCol = makeLine([20,27,34,41])
const midleCol = makeLine([17,24,31,38])

// diagonals down
const fistDiag = makeLine([0,8,16,24])
const lastDiagFirstLine = makeLine([3,11,19,27])
const lastDiagLastLine = makeLine([17,25,33,41])

// diagonals up
const fistDiagUp = makeLine([3,9,15,21])
const lastDiagFirstLineUp = makeLine([6,12,18,24])
const firstDiagLineLineUp = makeLine([20,26,32,38])
const lastDiagLastLineUp = makeLine([20,26,32,38])

describe('horizontals', () => {
  test('last line', () => {
    expect(checkWinner(first)).toBe(true)
  })
  test('first line', () => {
    expect(checkWinner(finaleLine)).toBe(true)
  })
  test('second line init', () => {
    expect(checkWinner(secondLineInitialize)).toBe(true)
  })
  test('second line last', () => {
    expect(checkWinner(secondLine)).toBe(true)
  })
  test('last line last', () => {
    expect(checkWinner(lastLast)).toBe(true)
  })
})
describe('verticals', () => {
  test('first col first cells', () => {
    expect(checkWinner(firstCol)).toBe(true)
  })
  test('fisrt col last cells', () => {
    expect(checkWinner(firstColLastcells)).toBe(true)
  })
  test('midel col last cells', () => {
    expect(checkWinner(midleCol)).toBe(true)
  })
  test('last col last cells', () => {
    expect(checkWinner(lastCol)).toBe(true)
  })
})
describe('diagonals down', () => {
  test('diagonals down',()=>{
    expect(checkWinner(fistDiag)).toBe(true)
  })
  test('diagonals down',()=>{
    expect(checkWinner(lastDiagFirstLine)).toBe(true)
  })
  test('diagonals down',()=>{
    expect(checkWinner(lastDiagLastLine)).toBe(true)
  })
})
describe('diagonals up', () => {
  test('first diagonals up',()=>{
    expect(checkWinner(fistDiagUp)).toBe(true)
  })
  test('last diagonals up first line',()=>{
    expect(checkWinner(lastDiagFirstLineUp)).toBe(true)
  })
  test('first diagonals up last line',()=>{
    expect(checkWinner(firstDiagLineLineUp)).toBe(true)
  })
  test('last diagonals up last line',()=>{
    expect(checkWinner(lastDiagLastLineUp)).toBe(true)
  })
})