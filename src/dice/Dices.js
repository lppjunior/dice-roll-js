import Dice from './Dice.js'

/**
 * @author Luiz Paulo <lppjunior@gmil.com>
 * @description Dices class make many instances of Dice class. You can make randomic values with range from 1 to 'amount of sides'.
 */
class Dices {
  constructor (amount = 2, sides) {
    this.valid(amount)
    this.dices = Array.from(Array(amount), (_, x) => new Dice(sides))
  }

  roll (options = { unique: false }) {
    this.dices.map((dice) => dice.roll())

    if (options.unique && this.getUniqueValues().length < this.dices.length) {
      this.roll(options)
    }

    return this
  }

  getAmount () {
    return this.dices.length
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

  valid (sides) {
    if (typeof sides !== 'number') throw new Error('The sides number must be a number')
    if (sides < 1) throw new Error('The sides number must be greater than zero')
  }
}

export default Dices
