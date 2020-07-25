import Dice from './dice/Dice.js';
import Dices from './dice/Dices.js';

export default {
    Dice,
    Dices
}

//Dice faces amount
const faces = 6;

// Make single dice instance
const dice = new Dice(faces);

// Rolling dice
dice.roll();
console.log(dice.getValue());

// Make multiple dices instance
const dices = new Dices(5, 10);
dices.roll();

console.log(dices.getValues());
console.log(dices.getUniqueValues());

dices.roll({ unique: true });
console.log(dices.getValues());
