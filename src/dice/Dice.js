/**
 * @author Luiz Paulo <lppjunior@gmail.com>
 * @description Dice class is a most single mode of dice roll. With that, you can make randomic value with range from 1 to 'amount of sides'.
 */
class Dice {
  constructor (sides) {
    this.sides = sides || Dice.DEFAULT_SIDES
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
}

Dice.DEFAULT_SIDES = 6

export default Dice
