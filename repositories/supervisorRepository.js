const fs = require('fs').promises;
const PATH = '../data/Supervisors.json';



async function findAll(){
    const datosSupervisor = await fs.readFile(PATH, 'utf8');
    const data = JSON.parse(datosSupervisor);

    console.table(data,['name','phone', 'plant', 'email','team']);
}

async function saveAll(supervisor){
    await fs.writeFile(PATH, JSON.stringify(supervisor, null, 2), 'utf8');
}


module.exports = {
    findAll,saveAll
};