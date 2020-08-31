import { Dice } from '../../src'

describe('Dice', () => {
  const dice = new Dice()

  describe('Testing if all methods and attributes are defined', () => {
    test('should assert than Dice.DEFAULT_SIDES is defined', () => {
      expect(Dice.DEFAULT_SIDES).toBeDefined()
    })

    test('should assert than dice has been defined', () => {
      expect(dice).toBeDefined()
    })

    test('should assert than roll has been defined', () => {
      expect(dice.roll).toBeDefined()
    })

    test('should assert than getSides has been defined', () => {
      expect(dice.getSides).toBeDefined()
    })

    test('should assert than getValue has been defined', () => {
      expect(dice.getValue).toBeDefined()
    })
  })

  describe('dices.roll() test', () => {
    test('should assert than result is an intanceof Dice', () => {
      expect(dice.roll()).toBeInstanceOf(Dice)
    })
  })

  describe('dice.getSides() test', () => {
    test('should assert than result is a Number', () => {
      expect(dice.getSides()).toEqual(expect.any(Number))
    })

    test(`should assert than result is equals to Dice.DEFAULT_SIDES`, () => {
      expect(dice.getSides()).toEqual(Dice.DEFAULT_SIDES)
    })

    test('should assert than result is 2', () => {
      expect((new Dice(2)).getSides()).toBe(2)
    })
  })

  describe('dice.getValue() test', () => {
    const value = dice.roll().getValue()

    test('should assert than result is a Number', () => {
      expect(value).toEqual(expect.any(Number))
    })

    test(`should assert than result is between from 1 to ${dice.getSides()}`, () => {
      expect(value).toBeGreaterThanOrEqual(1)
      expect(value).toBeLessThanOrEqual(dice.getSides())
    })
  })
})
