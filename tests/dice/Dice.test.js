import Dice from './../../src/dice/Dice.js'

describe('Test Dice sides value', () => {
  test('should throw an error if side amount is not a number ', () => {
    expect(() => new Dice('Test')).toThrow('The sides number must be a number');
  })

  test('should throw an error if side amount less than ONE', () => {
    expect(() => new Dice(0)).toThrow('The sides number must be greater than zero');
  })

  const dice = new Dice();

  test('should be side amount type equals to Number', () => {
    expect(dice.sides).toEqual(expect.any(Number))
  })

  test('should be side amount equals to 6', () => {
    expect(dice.sides).toBe(6)
  })

  test('should be side amount equal to 2', () => {
    const dice = new Dice(2);
    expect(dice.sides)
      .toBe(2)
  })
})