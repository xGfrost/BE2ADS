const { insert, edit, deleteid, findall } = require('./product_assets.repository');

const create = async (padata) => {
    const assets = await insert(padata);
    return assets;
}

const update = async (id, padata) => {
    const assets = await edit(id, padata);
    return assets;
}

const deleteassets = async (id) => {
    await deleteid(id)
}

const getAll = async () => {
    const assets = await findall();
    return assets;
}

module.exports = {
    create,
    update,
    deleteassets,
    getAll,
}