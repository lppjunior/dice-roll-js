import { Dices, Dice } from '../../src'

describe('Dices', () => {
  const dices = new Dices()

  describe('Test existance of all public methods and attributes', () => {
    test('should assert than Dices.DEFAULT_AMOUNT property has been defined', () => {
      expect(Dices.DEFAULT_AMOUNT).toBeDefined()
    })

    test('should assert than dices instance has been defined', () => {
      expect(dices).toBeDefined()
    })

    test('should assert than roll method has been defined', () => {
      expect(dices.roll).toBeDefined()
    })

    test('should assert than getSides method has been defined', () => {
      expect(dices.getSides).toBeDefined()
    })

    test('should assert than getAmount method has been defined', () => {
      expect(dices.getAmount).toBeDefined()
    })

    test('should assert than getValues method has been defined', () => {
      expect(dices.getValues).toBeDefined()
    })

    test('should assert than getUniqueValues method has been defined', () => {
      expect(dices.getUniqueValues).toBeDefined()
    })
  })

  describe('Test dicess.roll()', () => {
    test('should assert than result is an intanceof Dices', () => {
      expect(dices.roll()).toBeInstanceOf(Dices)
    })
  })

  describe('Test dicess.roll({ unique: true })', () => {
    test('should assert than result is an intanceof Dices', () => {
      expect(dices.roll({ unique: true })).toBeInstanceOf(Dices)
    })

    test('should throw an error if side amount is less than dice amount', () => {
      expect(() => (new Dices(5, 2)).roll({ unique: true })).toThrow('To achieve unique values, the sides amount must be greater than (or equals to) dice amount')
    })
  })

  describe('Test dices.getAmount()', () => {
    test('should assert than result is a Number', () => {
      expect(dices.getAmount()).toEqual(expect.any(Number))
    })

    test('should assert than result is equals to Dices.DEFAULT_AMOUNT', () => {
      expect(dices.getAmount()).toEqual(Dices.DEFAULT_AMOUNT)
    })

    test('should assert than result is 2', () => {
      expect((new Dices(2)).getAmount()).toBe(2)
    })
  })

  describe('Test dices.getSides()', () => {
    test('should assert than result is a Number', () => {
      expect(dices.getSides()).toEqual(expect.any(Number))
    })

    test('should assert than result is equals to Dice.DEFAULT_SIDES', () => {
      expect(dices.getSides()).toEqual(Dice.DEFAULT_SIDES)
    })

    test('should assert than result is 10', () => {
      expect((new Dices(2, 10)).getSides()).toBe(10)
    })
  })

  describe('Test dices.getValues()', () => {
    const values = dices.roll().getValues()

    test('should assert than amount of values is Dices.DEFAULT_AMOUNT', () => {
      expect(values.length).toEqual(Dices.DEFAULT_AMOUNT)
    })

    test('should assert than amount of values is 5', () => {
      expect((new Dices(5)).roll().getValues().length).toEqual(5)
    })

    test(`should assert than first result is between from 1 to ${dices.getSides()}`, () => {
      expect(values[0]).toBeGreaterThanOrEqual(1)
      expect(values[0]).toBeLessThanOrEqual(dices.getSides())
    })

    test(`should assert than second result is between from 1 to ${dices.getSides()}`, () => {
      expect(values[1]).toBeGreaterThanOrEqual(1)
      expect(values[1]).toBeLessThanOrEqual(dices.getSides())
    })
  })

  describe('Test dices.getUniqueValues()', () => {
    test('should assert than amount of values less than or equals to Dices.DEFAULT_AMOUNT', () => {
      expect((new Dices(5, 2)).roll().getUniqueValues().length).toBeLessThanOrEqual(Dices.DEFAULT_AMOUNT)
    })
  })
})

describe('Test calls with many parameter values', () => {
  describe('Test value of Dices instance amount', () => {
    [2, 3, 10, 40].forEach(amount => {
      test(`should assert amount is ${amount}`, () => {
        const dices = new Dices(amount, amount)
        expect(dices.getAmount())
          .toEqual(amount)
      })
    })

    test('should assert amount default value is 2', () => {
      const dices = new Dices()
      dices.roll()
      expect(dices.getAmount())
        .toEqual(2)
    })
  })

  describe('Test roll dice 30 times without repeat values', () => {
    const dices = new Dices(2, 2)

    for (let i = 0; i < 30; i++) {
      dices.roll({ unique: true })
      test(`should assert amount expect ${dices.getAmount()} values`, () => {
        expect(dices.getUniqueValues().length)
          .toEqual(dices.getAmount())
      })
    }
  })
})
