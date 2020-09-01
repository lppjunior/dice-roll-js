import Dice from './Dice'

/**
 * @author Luiz Paulo <lppjunior@gmil.com>
 * @description Dices class make many instances of Dice class. You can make randomic values with range from 1 to 'amount of sides'.
 */
class Dices {
  constructor (amount, sides) {
    this.dices = Array.from(Array(amount || Dices.DEFAULT_AMOUNT), (_, x) => new Dice(sides))
  }

  roll (options = { unique: false }) {
    const values = []

    if (options.unique && this.getAmount() > this.getSides()) {
      throw new Error('To achieve unique values, the sides amount must be greater than (or equals to) dice amount')
    }

    this.dices.map((dice) => {
      let isValid = true

      do {
        dice.roll()

        isValid = !options.unique || (options.unique && values.indexOf(dice.getValue()) === -1)
        if (isValid) {
          values.push(dice.getValue())
        }
      } while (!isValid)
    })

    return this
  }

  getAmount () {
    return this.dices.length
  }

  getSides () {
    return this.dices[0].getSides()
  }

  getValues () {
    return this.dices.map((dice) => dice.getValue())
  }

  getUniqueValues () {
    return this.getValues()
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]), []
      )
  }
}

Dices.DEFAULT_AMOUNT = 2

export default Dices
