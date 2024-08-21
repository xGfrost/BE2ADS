const { findproducts, insert, edit, deleteid } = require('./product.repository')

const getallproduct = async (price) => {
    const product = await findproducts(price);
    return product;
}

const create = async (pddata) => {
    const product = await insert(pddata);
    return product;
}

const update = async (id, pddata) => {
    const product = await edit(id, pddata);
    return product;
}

const deleteproduct = async (id) => {
    await deleteid(id);
}

module.exports ={
    getallproduct,
    create,
    update,
    deleteproduct,
}