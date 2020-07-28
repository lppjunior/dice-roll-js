import Dice from './../../src/dice/Dice.js'

describe('Test Dice sides value', () => {
  test('should throw an error if side amount is not a number ', () => {
    expect(() => new Dice('Test')).toThrow(Error)
  })

  test('should throw an error if side amount less than ONE', () => {
    expect(() => new Dice(0)).toThrow(Error)
  })

  const dice = new Dice()

  test('should be side amount type equals to Number', () => {
    expect(dice.getSides()).toEqual(expect.any(Number))
  })

  test('should be side amount equals to 6', () => {
    expect(dice.getSides()).toBe(6)
  })

  test('should be side amount equal to 2', () => {
    const dice = new Dice(2)
    expect(dice.getSides())
      .toBe(2)
  })
})
