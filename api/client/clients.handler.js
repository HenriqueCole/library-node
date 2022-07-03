const crud = require("../../crud")

async function addClients(clients) {
    const savedClients = await crud.post("clients", null, clients);
    return savedClients;
}



module.exports = {
    addClients
}