const fs = require("fs").promises;
const PATH = "../data/engginers.json";

async function findAll() {
    const data = await fs.readFile(PATH, "utf8");
    let datos = JSON.parse(data);
    console.table(datos, ['name', 'phone','plant', 'email']);

}

async function saveAll(engineers) {
    await fs.writeFile(PATH, JSON.stringify(engineers, null, 2));
}

module.exports = {
    findAll,
    saveAll
};