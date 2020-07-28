/**
 * @author Luiz Paulo <lppjunior@gmil.com>
 * @description Dice class is a most single mode of dice roll. With that, you can make randomic value with range from 1 to 'amount of sides'.
 */
class Dice {
  constructor (sides = 6) {
    this.valid(sides)
    this.sides = sides
  }

  roll () {
    this.value = Math.floor((Math.random() * this.sides) + 1)
    return this
  }

  getSides () {
    return this.sides
  }

  getValue () {
    return this.value
  }

  valid (sides) {
    if (typeof sides !== 'number') throw new Error('The sides number must be a number')
    if (sides < 1) throw new Error('The sides number must be greater than zero')
  }
}

export default Dice
