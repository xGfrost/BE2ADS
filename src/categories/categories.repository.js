const prisma = require("../db");

const insertcategories = async (cgdata) => {
    const cg = await prisma.categories.create({
        data:{
            name:cgdata.name
        }
    })
    return cg;
}

const editcategories = async (id, cgdata) => {
    const cg = await prisma.categories.update({
        where:{
            id: parseInt(id)
        },
        data:{
            name:cgdata.name
        }
        
    })
    return cg;
}

const deletecategories = async (id) => {
    await prisma.categories.delete({
        where:{
            id:parseInt(id),
        }
    });
}

module.exports = {
    insertcategories,
    editcategories,
    deletecategories,
}