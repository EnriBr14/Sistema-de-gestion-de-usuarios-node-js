const fs = require('fs').promises;
const PATH = '../data/obreros.json'

async function findAll(){
    const datosObrero = fs.readFile(PATH, 'utf8');
    const data = JSON.parse(datosObrero);
    console.table(data, ['name','phone', 'plant', 'email', 'password','money', 'teamWork', 'machines']);
}

async function saveAll(obrero){
    await fs.writeFile(PATH, JSON.stringify(obrero, null,2));
}

async function deleteOne(obrero){

}

module.exports = {
    findAll,saveAll
};