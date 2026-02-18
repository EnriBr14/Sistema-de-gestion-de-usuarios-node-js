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
//Guardar usuario dependiendo si son ingenieros, obreros, supervisores y administrados del sistema
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
            let validarEmpleado = supervisors.some(superv => superv.getName() === empleado.getName())
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
            }

        }else if (empleado instanceof Admini){
            let validarEmpleado = admins.some(admin => admin.nameAdmin === empleado.nameAdmin)
            if(validarEmpleado){
                console.log("Este empleado ya esta registrado")
            }else{
             empleado.setPassw(passCrypto(empleado.getPassw()))
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


//----------------Mostrar por campo------------------------------------------------------------------
async function showBy(job){

    if(job === "Enginners"){
        console.log("Datos Solicitados...")
      await enginnerRepo.findAll()
    }
    else if(job === "Supervisor"){
        console.log("Datos Solicitados...")
        await supersivorRepo.findAll()
    }
    else if(job === "Obreros"){
        console.log("Datos Solicitados...")
        await obreroRepo.findAll()
    }
}
//-----------Mostrar obreros por supervisor--------------------------------------
function obrerosXsupervisor(supervisor){
    //Validar que el supervisor que estamos buscando exista
    console.log("Entra a validacion")
    let validar = supervisors.some(sup => sup.getName() === supervisor)
    console.log("Pasa la validacion")
    console.log(validar)
    //Si valida estonces vamos a mostrar los datos
    if(validar){
        console.log("Entra al if")
        supervisors.forEach(
            data => {
                console.log("Entra a la data de sup")
                //console.log(data.getName())


                obreros.forEach(obrerado => {
                    //console.log(`datos del sup eqiupos  ${obrerado.teamWork}`)
                    let equipos = data.teams
                    console.log(equipos)
                  if(equipos === obrerado.teamWork){
                      console.log("Ultimo if")
                      console.log(obrerado + " "+ data)

                  }
                })
            }
        )
    }
}

//Mostrar por equipo--------------------------------------------------------------------------
function showByTeams(equipo){
    //Mostrar que integrantes tiene cada equipo
    console.log(`Equipo solicitado ${equipo}`)
    obreros.forEach(data => {

        if(data.teamWork === equipo){
            console.table(data.getName() + " - " + data.getPlant() + " - " + data.machines )
        }
    })
    console.log("Este equipo no esta registrado")
}

async function consultaSoO(callback,parametro){
    let  data = await callback(parametro)
    console.log(data)
}

function enterSystem(email,password){
    //Verificar la existencia de administrador
    //Validar que existe en el registro
    console.log("Entrando al sistema...")
    console.log("Solicitando datos")
    let validacion = admins.some(admi => admi.emailAdmin === email)
    if(validacion){
        console.log("Correo verificado...")
        console.log("Contraseña verificada...")
        let hashPass = passCrypto(password)
        let usuario = admins.find(admin => admin.emailAdmin === email)
        if(hashPass === usuario.getPassw()){
            console.log("Contraseña proporcionada es correcta")
        }else{
            console.log("Las contrañas no coinciden")
        }
    }else{
        console.log("El correo propocionado no esta registrado: " + email)
    }







}

module.exports = {
    save,
    changePassword,
    showBy,
    showByTeams,
    consultaSoO,
    obrerosXsupervisor,
    enterSystem,

}



