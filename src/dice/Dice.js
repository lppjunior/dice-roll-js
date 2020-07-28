class Dice {
  constructor (sides = 6) {
    this.valid(sides)
    this.sides = sides
  }

  roll () {
    this.value = Math.floor((Math.random() * this.sides) + 1)
    return this
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
