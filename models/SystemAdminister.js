class AdminiSystem {
    #passw
    constructor({idAdmin,nameAdmin, emailAdmin, passw,area}) {
        this.idAdmin = idAdmin;
        this.nameAdmin = nameAdmin;
        this.emailAdmin = emailAdmin;
        this.#passw = passw;
        this.area = area;
    }

    getPassw(){return this.#passw;}
    setPassw(password){this.#passw = password;}
}


module.exports = AdminiSystem;