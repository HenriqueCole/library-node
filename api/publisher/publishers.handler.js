const crud = require("../../crud")

async function addPublishers(publishers) {
    const savedPublishers = await crud.post("publishers", null, publishers);
    return savedPublishers;
}



module.exports = {
    addPublishers
}