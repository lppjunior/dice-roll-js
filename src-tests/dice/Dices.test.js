import {
  Dices
} from './../../src'

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
