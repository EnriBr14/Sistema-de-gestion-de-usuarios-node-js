class AdminiSystem {
    #passw
    constructor({idAdmin,nameAdmin, emailAdmin, passw,area}) {
        this.idAdmin = idAdmin;
        this.nameAdmin = nameAdmin;
        this.emailAdmin = emailAdmin;
        this.#passw = passw;
        this.area = area;
    }

    getPass(){return this.#passw }
    setPass(newPass, confirm){
        if(newPass === this.#passw){
            console.info("La contraseña propocionada es la misma");
        }else if(newPass != this.#passw){
            console.log("Aceptas cambiar la constraseña?")
            if(confirm){
                console.log("La contraseña se guardo con exito")
                this.#passw = newPass;
            }else{
                console.log("Cerrando proceso")
            }
        }else{
            console.log("Operacion no valida")
        }
    }

}


module.exports = AdminiSystem;