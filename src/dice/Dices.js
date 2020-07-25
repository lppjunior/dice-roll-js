import Dice from "./Dice.js";

class Dices {
    constructor(amount = null, faces = 6) {
        if (amount === null) {
            throw Error('Dice amount is null. Set that! Ex: new Dices(2);');
        }

        this.dices = Array.from(Array(amount), (_,x) => new Dice(faces));
    }

    roll(options = { unique: false }) {
        this.dices.map((dice) => dice.roll());

        if(options.unique && this.getUniqueValues().length < this.dices.length) {
            this.roll(options);
        }

        return this;
    }

    getValues() {
        return this.dices.map((dice) => dice.getValue());
    }

    getUniqueValues() {
        return this.getValues().reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), []);
    }
}

export default Dices;