const crypto = require("crypto");

class Employ {
    #id
    #name
    #phone
    #plant
    #password
    #money

    constructor({id, name, phone, plant, email, password, money}) {
        this.#id = id;
        this.#name = name;
        this.#phone = phone
        this.#plant = plant;
        this.email = email;
        this.#password = password;
        this.#money = money;
    }

    toString() {
        return `Nombre: ${this.#name} PLanta: ${this.#phone}`;
    }

    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            phone: this.#phone,
            plant: this.#plant,
            email: this.email,
            password: this.#password,
            money: this.#money
        }
    }

    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getPhone() {
        return this.#phone;
    }

    setPhone(phone) {
        if (phone.length < 10) {
            console.error('Numero proporcionado no es correcto');
        } else {
            console.log("NUmero guardado")
            return this.#phone = phone;
        }
    }

    getPlant() {
        return this.#plant;
    }

    setPlant(plant) {
        this.#plant = plant;
    }

    getPassword() {
        return this.#password;
    }

    setPassword(password) {
        this.#password = password
    }

    getMoney(){return this.#money}
    setMoney(money) {this.#money = money}


}
module.exports = Employ;