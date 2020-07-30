# dice-roll-js

Dice Roll is a project of rolling dice javascript based. Developed to support any application that needs data with random numbers.

With this project, you can create a single instance of dice roll or create an instance of many rolling dices that will work together.

## Objective
This project is a prototype of study, implementation, configure of many tecnologies, how: ES6, Eslint, jest, standard, babel, webpack

I chose as many technologies as possible to implement within a small project. If you have any ideas for anything else I can do around here, I'll be happy to receive your feedback.

## Install

Run this command to install project dependencies
```shell
npm install
```

To see example of this project, run:
```shell
npm start
```

To generate a build, you have to execute:
```sh
npm run build # This command generate '/dist' files
```

## Using Dice-js

### Single dice instance
Dice class is a most single mode of dice roll. With that, you can make randomic value with range from 1 to 'amount of sides'.

**Class structure**
```js
class Dice(sides: int) {
  roll(): Dice
  getSides(): int
  getValue(): int
}
```

This is an example to make Dice instances:

```js
// Whithout parameter the dice instance receive 6 sides by default
const dice = new Dice() // dice has 6 sides (by default)
const dice2 = new Dice(10) // dice has 10 sides

// This line return the amount of sides
dice2.getSides() // result: 10

// Roll dice to make aleatory result
dice2.roll()

dice2.getValue() // result: An aleatory Number between 1 and 10

// You can make chain call
dice2.roll().getValue() // result: An aleatory Number between 1 and 10
```

### Multiple dice instances
Dices class is a roller of dice series. With that, you can make roll of many dices at the sume time.

**Class structure**
```js
class Dices(amount: int, sides: int) {
  roll (options = { unique: boolean }): Dice
  getAmount(): int
  getValues(): Array(int)
  getUniqueValues(): Array(int)
}
```

This is an example to make Dices instances:

```js
const dices = new Dices() // dice has 2 dices (by default) with 6 sides (by default)
const dices2 = new Dices(10) // dice2 has 10 dices with 6 sides (by default)
const dices3 = new Dices(10, 5) // dice3 has 10 dices with 6 sides

// Roll dices to make aleatory results
dices2.roll()

dices2.getValue() // result: array[10] Numbers between 1 and 10

// You can make chain call
dices2.roll().getValue() // result: array[10] Numbers between 1 and 10


// If you want all dices with different value, you can pass 'unique' parameter
dices2.roll({ unique: true })
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lppjunior/dice-js/tags).

## Authors

* **Luiz Paulo** - *Total project development* - [Github](https://github.com/lppjunior) | [Site](http://lppjunior.com) | [Instagram](https://instagram.com/lppjunior)

## Project Updates

See the [CHANGELOG](CHANGELOG.md) for all version update details


## References

I hope you know about the basis of my project, but if you don't know much, here are some documents that can help you:

* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [ES6](http://es6-features.org/)
* [standard](https://standardjs.com/)
* [Eslint](https://eslint.org/)
* [jest](https://jestjs.io/)
* [babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
