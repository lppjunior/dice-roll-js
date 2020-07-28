import Dices from './../../src/dice/Dices.js'

describe('Test value of Dice instance amount', () => {
  [null, 'test'].forEach(amount => {
    test('should throw an error to ' + amount, () => {
      expect(() => new Dices(amount))
        .toThrow('The sides number must be a number');
    })
  });

  [-40000, -1, 0].forEach(amount => {
    test('should throw an error to ' + amount, () => {
      expect(() => new Dices(amount))
        .toThrow('The sides number must be greater than zero');
    })
  });

  [2, 3, 10, 40].forEach(amount => {
    test('should amount be ' + amount, () => {
      const dices = new Dices(amount, amount);
      expect(dices.getAmount())
        .toEqual(amount);
    })
  });

  test('should amount default value be 2 ', () => {
    const dices = new Dices();
    expect(dices.getAmount())
      .toEqual(2);
  })
})

describe('Test roll dice 30 times without repeat values', () => {
  const dices = new Dices(2, 2);

  for (let i = 0; i < 30; i++) {
    dices.roll({ unique: true });
    test('should amount expect ' + dices.getAmount() + ' values', () => {
      expect(dices.getUniqueValues().length)
        .toEqual(dices.getAmount());
    })
  }
})
