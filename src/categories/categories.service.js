const { insertcategories, editcategories, deletecategories } = require("./categories.repository");

const create = async (cgdata) => {
    const cg = await insertcategories(cgdata);
    return cg;
}

const update = async (id, cgdata) => {
    const cg = await editcategories(id, cgdata);
    return cg;
}

const deleteid = async (id) => {
    await deletecategories(id);
}

module.exports ={
    create,
    update,
    deleteid,
}