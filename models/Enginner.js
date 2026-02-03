//const Employ = require('Employ')
const Employ = require("./Employ");
const crypto = require("crypto");
class Enginner extends Employ{
    #speciality
    #position
    constructor({id,position,name,phone, plant, email, password,money, speciality, auto, idioms}) {
        super({id,name,phone, plant,email, password, money});
        this.#position = position;
        this.#speciality = speciality;
        this.auto = auto;
        this.idioms = idioms
    }

    toString() {
        return super.toString(`
        Enginner: ${this.name}
        Speaciality: ${this.#speciality}
        Contact: ${this.email}
        `);
    }

    toJSON(){
        return super.toJSON(
            {
                id: this.id,
                name: this.name,
            }
        )
    }




    get speciality() {return this.#speciality;}
    set speciality(value) {this.#speciality = value;}

    getPosition(){return this.#position;}
    set position(value){
        this.#position = value;
    }
}

module.exports = Enginner;
