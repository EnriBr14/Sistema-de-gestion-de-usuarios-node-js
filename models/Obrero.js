const Employ = require("./Employ");

class Obrero extends Employ{
    constructor({id,name,phone, plant, email, password,money, teamWork, machines}) {
        super({id,name,phone, plant, email, password,money});
        this.teamWork = teamWork;
        this.machines=machines;
    }




    toJSON(){
        return {
            ...super.toJSON(),
            teamWork: this.teamWork,
            machines: this.machines,
        }
    }

}



module.exports = Obrero;