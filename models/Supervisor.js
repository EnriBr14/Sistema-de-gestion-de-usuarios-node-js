const Employ = require("./Employ");

class Supervisor extends Employ{
    constructor({id,name,phone, plant, email, password,money, teams}) {
        super({id,name,phone, plant, email, password,money});
        this.teams = teams;
    }

toJSON() {
    return {
        ...super.toJSON(),
        team: this.teams
    }
}

}



module.exports = Supervisor;