import {
  Dice
} from '../../src'

describe('Test Dice sides value', () => {
  test('should throw an error if side amount is not a number ', () => {
    expect(() => new Dice('Test')).toThrow(Error)
  })

  test('should throw an error if side amount less than ONE', () => {
    expect(() => new Dice(0)).toThrow(Error)
  })

  const dice = new Dice()

  test('should assert side amount type is a Number', () => {
    expect(dice.getSides()).toEqual(expect.any(Number))
  })

  test('should assert dice roll number between 1, 6', () => {
    dice.roll()
    expect(dice.getValue()).toBeGreaterThanOrEqual(0)
    expect(dice.getValue()).toBeLessThan(7)
  })

  test('should assert side amount is 6', () => {
    expect(dice.getSides()).toBe(6)
  })

  test('should assert side amount is 2', () => {
    const dice = new Dice(2)
    expect(dice.getSides())
      .toBe(2)
  })
})
