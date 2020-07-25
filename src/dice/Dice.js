class Dice {
    constructor(faces = 6) {
        this.faces = faces;
    }

    roll() {
        this.value = Math.floor((Math.random() * this.faces) + 1);
        return this;
    }

    getValue() {
        return this.value;
    }
}

export default Dice;