//repositorios


//------------------------Modelos--------------------------------------------
const Engginer = require('../models/Enginner.js');
const Admin = require('../models/SystemAdminister.js');
const Supervisor = require('../models/Supervisor.js');
const Obrero = require('../models/Obrero.js');
//--------------------------------------------------------------------------
const Service = require('../Service/employeeService');
const  crypto = require('crypto');

//Repositorios
const repoEngine = require('../Repositories/enginnerRepository')

const {showBy, showByTeams} = require("../service/employeeService");
//Ingenieros
const e1 = new Engginer(
    {id: 1,position: "Engginer",name: "Jhonatan 0M",phone:"7220519874", plant:"MN", email:"engines@gmail.com",
        password:"145",money:"30000", speciality: "Production", auto: true,
        idioms: ["Ingles", "Aleman"]}
);
const e2 = new Engginer(
    {id: 2,position: "Engginer",name: "Rick Sanchez",phone:"7226543218", plant:"FA", email:"carlos@gmail.com",
        password:"caracol",money:"30,000", speciality: "Fundition", auto: true,
        idioms: ["Ingles"]}
);
const e3 = new Engginer(
    {id: 3,position: "Engginer",name: "Jhon Cole",phone:"7598459632", plant:"FA", email:"jhon@gmail.com",
        password:"ceroMIedo",money:"40000", speciality: "Fundition", auto: true,
        idioms: ["Ingles", "German", "French"]}
);
const e4 = new Engginer(
    {id: 4,position: "Engginer",name: "Marcus Fenix",phone:"12354689874", plant:"MN", email:"engines@gmail.com",
        password:"145",money:"50000", speciality: "Production", auto: true,
        idioms: ["Ingles", "Aleman", "Italian"]}
);
const e5 = new Engginer(
    {id: 5,position: "Engginer",name: "Morty Smith",phone:"12354689874", plant:"MN", email:"engines@gmail.com",
        password:"145",money:"50000", speciality: "Production", auto: true,
        idioms: ["Ingles", "Aleman", "Italian"]}
);
//Guardar
Service.save(e1)
Service.save(e2)
Service.save(e3)
Service.save(e4)
Service.save(e5)
//---------------------------------------------------------------------------------------------------
//------------------------Supervosires
const s1 = new Supervisor(
   {id: 0,name: "James Hetflield",phone: "9876543214", plant: "MN", email: "bluec@gmail.com",
       password:"cumpleanos",money: "20000", teams: ["Rojos","Azules","Blancos"]}
)
const s2 = new Supervisor(
    {id: 1,name: "Blue Garcia",phone: "7226661122", plant: "FA", email: "james@gmail.com",
        password:"diazero",money: "25000", teams: ["Negros","Verdes"]}
)

Service.save(s1)
Service.save(s2)

//---------------------------------------------------------------------------------------------------------
//Obreros---------------------------------------
const o1 = new Obrero(
    {id: 1, name: "Brock Garza",phone:"71536984521", plant: "MN", email: "brock@gmail.com",
        password: "112233",money: "2100", teamWork: "Rojos", machines: ["Taladro", "Esmeril"]}
)
const o2 = new Obrero(
    {id: 2, name: "Kirk Hammeth",phone:"7226543215", plant: "MN", email: "kirk@gmail.com",
        password: "1847",money: "2500", teamWork: "Rojos", machines: ["Taladro", "Esmeril"]}
)
const o3 = new Obrero(
    {id: 3, name: "Bruce Dickinson",phone:"772221235478", plant: "MN", email: "bruce@gmail.com",
        password: "112233",money: "2100", teamWork: "verdes", machines: ["Soldadora", "Esmeril", "Fresadora"]}
)
const o4 = new Obrero(
    {id: 4, name: "Bartolo el Gallo",phone:"7134658745", plant: "MN", email: "bartolo@gmail.com",
        password: "1e3d2",money: "1800", teamWork: "Rojos", machines: ["Esmeril"]}
)
const o5 = new Obrero(
    {id: 5, name: "Robert Trujillo",phone:"7121452369", plant: "MN", email: "robert@gmail.com",
        password: "98r8",money: "2100", teamWork: "verdes", machines: ["Taladro", "Robot 1"]}
)
const o6 = new Obrero(
    {id: 6, name: "Lars Ulrich",phone:"7799876541", plant: "FA", email: "ulrich@gmail.com",
        password: "contrase",money: "2100", teamWork: "Negros", machines: ["Taladro de mano", "Esmeril"]}
)
const o7 = new Obrero(
    {id: 7, name: "Dave Mustaine",phone:"7189876541", plant: "FA", email: "dave@gmail.com",
        password: "azul123",money: "2400", teamWork: "Negros", machines: ["Destornilladores", "Esmeril"]}
)
const o8 = new Obrero(
    {id: 8, name: "Adrian Smith",phone:"9876543215", plant: "FA", email: "adrian@gmail.com",
        password: "morado",money: "2300", teamWork: "Azules", machines: ["Taladro de piso", "Esmeril"]}
)
const o9 = new Obrero(
    {id: 9, name: "Carlos Perez", phone: "9876543216", plant: "MN", email: "carlos@gmail.com",
            password: "rojo", money: "2500", teamWork: "Rojos", machines: ["Torno", "Fresadora"]}
)

const o10 = new Obrero(
    {id: 10, name: "Lucia Gomez", phone: "9876543217", plant: "FA", email: "lucia@gmail.com",
            password: "verde", money: "2100", teamWork: "Verdes", machines: ["Taladro manual", "Pulidora"]}
)

const o11 = new Obrero(
    {id: 11, name: "Miguel Torres", phone: "9876543218", plant: "FA", email: "miguel@gmail.com",
            password: "azul", money: "2800", teamWork: "Azules", machines: ["Soldadora", "Cizalla"]}
)

const o12 = new Obrero(
    {id: 12, name: "Ana Ruiz", phone: "9876543219", plant: "MN", email: "ana@gmail.com",
            password: "amarillo", money: "2400", teamWork: "Negros", machines: ["Compresor", "Lijadora"]}
)

const o13 = new Obrero(
    {id: 13, name: "Jorge Medina", phone: "9876543220", plant: "FA", email: "jorge@gmail.com",
            password: "negro", money: "3000", teamWork: "Negros", machines: ["Torno CNC", "Taladro de banco"]}
)

const o14 = new Obrero(
    {id: 14, name: "Paula Castro", phone: "9876543221", plant: "MN", email: "paula@gmail.com",
            password: "blanco", money: "2200", teamWork: "Blancos", machines: ["Pulidora", "Esmeril"]}
)

const o15 = new Obrero(
    {id: 15, name: "Diego Navarro", phone: "9876543222", plant: "FA", email: "diego@gmail.com",
            password: "naranja", money: "2600", teamWork: "Blancos", machines: ["Prensa hidráulica", "Sierra"]}
)

const o16 = new Obrero(
    {id: 16, name: "Sofia Herrera", phone: "9876543223", plant: "FA", email: "sofia@gmail.com",
            password: "rosa", money: "2350", teamWork: "Rojos", machines: ["Taladro de piso", "Lijadora orbital"]}
)

const o17 = new Obrero(
    {id: 17, name: "Fernando Rojas", phone: "9876543224", plant: "FA", email: "fernando@gmail.com",
            password: "gris", money: "2900", teamWork: "Azules", machines: ["Soldadora MIG", "Amoladora"]}
)

const o18 = new Obrero(
    {id: 18, name: "Valeria Molina", phone: "9876543225", plant: "FA", email: "valeria@gmail.com",
            password: "celeste", money: "2450", teamWork: "Blancos", machines: ["Cortadora láser", "Compresor"]}
)
const o19 = new Obrero(
    {id: 19, name: "Brock Lesnas",phone:"9876543215", plant: "MN", email: "lesnas@gmail.com",
        password: "1122",money: "2100", teamWork: "Rojos", machines: ["Taladro", "Esmeril"]}
)
const o20 = new Obrero(
    {id: 20, name: "Jerry Smith",phone:"71536984521", plant: "MN", email: "jerrysmith@gmail.com",
        password: "119873",money: "2100", teamWork: "Rojos", machines: ["Cortador", "Esmeril"]}
)

Service.save(o1)
Service.save(o2)
Service.save(o3)
Service.save(o4)
Service.save(o5)
Service.save(o6)
Service.save(o7)
Service.save(o8)
Service.save(o9)
Service.save(o10)
Service.save(o11)
Service.save(o12)
Service.save(o13)
Service.save(o14)
Service.save(o15)
Service.save(o16)
Service.save(o17)
Service.save(o18)
Service.save(o19)
Service.save(o20)


//Administradores
const a1 = new Admin({idAdmin: 1,nameAdmin: "Serch", emailAdmin: "serg@gmail.com", passw:"1234",area:"TI"})
const a2 = new Admin({idAdmin: 2,nameAdmin: "Cgakes", emailAdmin: "charles@gmail.com", passw:"12345",area:"TI"})
Service.save(a2)
Service.save(a1)
//console.table(e1)
//Service.save(e1)
//_---------------------------------------------------------------------------------------------------
/*

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

const password = "Hola mundo";
const passwordHash = hashPassword(password);

// Esto es lo que guardas en la base de datos
console.log(passwordHash);

//Base de datos sss
const passwordIngresada = "Hola mundo";
const hashIngresado = hashPassword(passwordIngresada);

// hash guardado en la BD
const hashGuardado = passwordHash;

if (hashIngresado === hashGuardado) {
    console.log("Contraseña correcta ✅");
} else {
    console.log("Contraseña incorrecta ❌");
}

console.log("Cambio de con trsseña")
*/
//-------------------------------------------------------------------------------------------------
//---------------Funciones----------------
//Service.changePassword("engines@gmail.com","145", "perro",true)
//console.log("Contraasña new-------------------------------------------")
//e1.getPassword()

//Enginners
//Supervisor
//Obreros
//Service.showBy("Enginners")

//Service.consultaSoO(showByTeams,"Rojos")
//Service.showByTeams("")
console.log("Mostrar opbreos por supervisor")
Service.obrerosXsupervisor("James Hetflield")

Service.enterSystem( "charles@gmail.com","12345")





