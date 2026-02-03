let enginerss = []
let obreros = []
let supervisors = []
let admins = []

const fs = require('fs').promises
const crypto = require('crypto')
//Modelos----------------------------------------
const empleado = require("../models/Employ");
const Employ = require("../models/Employ");
const Enginner = require("../models/Enginner");
const Supervisor = require("../models/Supervisor");
const Obrero = require("../models/Obrero");
const Admini = require("../models/SystemAdminister");
//Repositorios------------------------------------
const enginnerRepo = require('../repositories/enginnerRepository')
const supersivorRepo = require('../repositories/supervisorRepository')
const obreroRepo = require('../repositories/obreroRepository')
const adminRepo = require('../repositories/adminsRepository')



//Funcion para encrypytar las contraseñas
//----------------------------------------------------------------------------------------
function passCrypto(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}
//----------------------------------------------------------------------------------------
//Guardar usuario dependiendo si son ingenieros, obreros, supervvisores y administrados del sistema
async function save(empleado){
    //Guardar eniggner
    try{
        if(empleado instanceof Enginner){
            //validar que el empleado no exista ya en el registro
            let validarEmpleado =  enginerss.some(engin => empleado.getName() === engin.getName())
            if(validarEmpleado){
                console.log("Este empleado ya esta registrado")
                console.log(`Name: ${empleado.getName()} 
            Phone: ${empleado.getPhone()}
            Plant: ${empleado.getPlant()}`)
            }else{
                empleado.setPassword(passCrypto(empleado.getPassword()))
                enginerss.push(empleado)

                enginnerRepo.saveAll(enginerss)


                //await fs.writeFile('../Data/engginers.json', JSON.stringify(enginerss, null, 2))
            }

        }
        //Guardar un supervisor
        else if(empleado instanceof Supervisor){
            console.log("Esta es una instancia de supervsor-----------------------")
            let validarEmpleado = supervisors.some(superv => superv.getName() === empleado.getName())
            console.log("Pasoi la validacion")
            if(validarEmpleado){
                console.log("Este empleado ya esta registrado")
            }else{
                empleado.setPassword(passCrypto(empleado.getPassword()))
                supervisors.push(empleado)
                supersivorRepo.saveAll(supervisors)
            }
        }
        //Guardar un obrero
        else if(empleado instanceof Obrero){
            let validarEmpleado = obreros.some(obre => obre.getName() === empleado.getName())
            if(validarEmpleado){
                console.log("Este empleado ya esta registrado")
            }else{
                empleado.setPassword(passCrypto(empleado.getPassword()))
                obreros.push(empleado)
                obreroRepo.saveAll(obreros)

                //guardar dependiendo de a que equipo pertencen y que supervisor esta a cargo
                //Rojos, Blancos, Azules, Negros y verdes
                //James Hetflield
                //Blue Garcia

                let equipo = empleado.teamsWork
                if(equipo === "Rojos"){

                }







            }

        }else if (empleado instanceof Admini){
            let validarEmpleado = admins.some(admin => admin.getName() === empleado.getName())
            if(validarEmpleado){
                console.log("Este empleado ya esta registrado")
            }else{
             empleado.setPassword(passCrypto(empleado.getPassword()))
             admins.push(empleado)
             adminRepo.saveAll(admins)
            }

        }else{
            console.log("Incorrecto");
        }
    }catch(err){
        console.log(err)
    }
}
//----------------------------------------------------------------------------------------

//Funcion para cambiar la contraseña
//----------------------------------------------------------------------------------------
async function changePassword(ema,oldPassword,newPassword, confirm){
    //Validar que se quiere cambiar la contraseña

    if(confirm){
        //Validar que el usuario este registrado
        let validacion = await enginerss.some(user => user.email == ema)
        console.log(validacion)
        console.log("Usuario existe en la base de datos")
        if(validacion){
            //Solicitar antigua contraseña para realizar el cambio y validar que con iguales
            //Con el metodo find vamos a encontrar al usuario al que pertence el correo
            let user = enginerss.find(user => user.email == ema)
            //Camibar a hash para comparar contraaseñas
            let oldPass = crypto.createHash('sha256').update(oldPassword).digest('hex');
            if(user.getPassword() === oldPass){
                console.log("Escribe antigua contraseña para continuar")
                console.log(`contraseña: ${oldPassword}`)
                console.log(`Escribe tu nueva contraseña: ${newPassword}`)
                user.setPassword(newPassword)
                console.log("Contraseña cambiada con exito")
                console.log("New contraseña "+user.getPassword())

            }else{
                console.log("Las contraseñas no coinciden")
            }



        }else{
            console.log("Este correo no existe en la base de datos");

        }
    }else{
        console.log("Cerrando proceso " + confirm)
    }//-----
}


//----------------Mostrar por campo
function showBy(job){
    if(job === "Enginners"){
        console.log("Datos Solicitados...")
        enginnerRepo.findAll()
    }
    else if(job === "Supervisor"){
        console.log("Datos Solicitados...")
        supersivorRepo.findAll()
    }
    else if(job === "Obreros"){
        console.log("Datos Solicitados...")
        obreroRepo.findAll()
    }
}


//-------------------------------
module.exports = {
    save,
    changePassword,
    showBy,

}


