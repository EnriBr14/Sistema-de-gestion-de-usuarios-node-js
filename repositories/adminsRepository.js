const fs = require('fs').promises;
const PATH = '../data/Admins.json'


async function findAll(){
    //Leer el archivo obreros.json
    const datosAdmin = await fs.readFile(PATH, 'utf8');
    const data = JSON.parse(datosAdmin);

    console.table(data, ['nameAdmin','emailAdmin','area']);
}
async function saveAll(admins){
    await fs.writeFile(PATH, JSON.stringify(admins, null, 2), 'utf8');
}


module.exports = {
    findAll,saveAll
};