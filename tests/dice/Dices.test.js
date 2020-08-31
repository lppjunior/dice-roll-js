import { Dices, Dice } from '../../src'

describe('Dices', () => {
  const dices = new Dices()

  describe('Testing if all methods and attributes are defined', () => {
    test('should assert than Dices.DEFAULT_AMOUNT is defined', () => {
      expect(Dices.DEFAULT_AMOUNT).toBeDefined()
    })

    test('should assert than dices has been defined', () => {
      expect(dices).toBeDefined()
    })

    test('should assert than roll has been defined', () => {
      expect(dices.roll).toBeDefined()
    })

    test('should assert than getSides has been defined', () => {
      expect(dices.getSides).toBeDefined()
    })

    test('should assert than getAmount has been defined', () => {
      expect(dices.getAmount).toBeDefined()
    })

    test('should assert than getValues has been defined', () => {
      expect(dices.getValues).toBeDefined()
    })

    test('should assert than getUniqueValues has been defined', () => {
      expect(dices.getUniqueValues).toBeDefined()
    })
  })

  describe('dicess.roll() test', () => {
    test('should assert than result is an intanceof Dices', () => {
      expect(dices.roll()).toBeInstanceOf(Dices)
    })
  })

  describe('dicess.roll({ unique: true }) test', () => {
    test('should assert than result is an intanceof Dices', () => {
      expect(dices.roll({ unique: true })).toBeInstanceOf(Dices)
    })

    test('should throw an error if side amount is less than dice amount', () => {
      expect(() => (new Dices(5, 2)).roll({ unique: true })).toThrow('To achieve unique values, the sides amount must be greater than (or equals to) dice amount')
    })
  })

  describe('dices.getAmount() test', () => {
    test('should assert than result is a Number', () => {
      expect(dices.getAmount()).toEqual(expect.any(Number))
    })

    test(`should assert than result is equals to Dices.DEFAULT_AMOUNT`, () => {
      expect(dices.getAmount()).toEqual(Dices.DEFAULT_AMOUNT)
    })

    test('should assert than result is 2', () => {
      expect((new Dices(2)).getAmount()).toBe(2)
    })
  })

  describe('dices.getSides() test', () => {
    test('should assert than result is a Number', () => {
      expect(dices.getSides()).toEqual(expect.any(Number))
    })

    test(`should assert than result is equals to Dice.DEFAULT_SIDES`, () => {
      expect(dices.getSides()).toEqual(Dice.DEFAULT_SIDES)
    })

    test('should assert than result is 10', () => {
      expect((new Dices(2, 10)).getSides()).toBe(10)
    })
  })

  describe('dices.getValues() test', () => {
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

  describe('dices.getUniqueValues() test', () => {
    test('should assert than amount of values less than or equals to Dices.DEFAULT_AMOUNT', () => {
      expect(dices.roll().getUniqueValues().length).toBeLessThanOrEqual(Dices.DEFAULT_AMOUNT)
    })

    test('when roll dices with options: { unique:true }, should assert amount of values is equals to Dices.DEFAULT_AMOUNT', () => {
      expect(dices.roll({ unique: true }).getUniqueValues().length).toEqual(Dices.DEFAULT_AMOUNT)
    })
  })
})

describe('extra tests', () => {
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
