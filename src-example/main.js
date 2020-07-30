function runExample () {
  testDice()
  testDices()
  testDices4()
  testDicesUniqueValue()
}

function testDice () {
  const dice = new Dice()

  for (let i = 0; i < 10; i++) {
    dice.roll()
    console.log('Roll dices. Result: ', dice.getValue())
  }
}

function testDices () {
  const dices = new Dices()

  for (let i = 0; i < 10; i++) {
    dices.roll()
    console.log('Roll dices. Result:', dices.getValues(), ' unique:', dices.getUniqueValues())
  }
}

function testDices4 () {
  const dices = new Dices(4)

  for (let i = 0; i < 10; i++) {
    dices.roll()
    console.log('Roll dices. Result:', dices.getValues(), ' unique:', dices.getUniqueValues())
  }
}

function testDicesUniqueValue () {
  const dices = new Dices(4)

  for (let i = 0; i < 10; i++) {
    dices.roll({ unique: true })
    console.log('Run dices with unique values. Result: ', dices.getValues())
  }
}

document.addEventListener('DOMContentLoaded', runExample, false)
