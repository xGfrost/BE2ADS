const prisma = require('../db');

const insert = async (padata) => {
    const assets = await prisma.product_assets.create({
        data:{
            product_id: parseInt(padata.product_id),
            image: padata.image,
        }
    })
    return assets;
}

const edit = async (id, padata) => {
    const assets = await prisma.product_assets.update({
        where:{
            id: parseInt(id),
        },
        data:{
            product_id: parseInt(padata.product_id),
            image: padata.image, 
        }
    })
    return assets;
}

const deleteid = async (id) => {
    await prisma.product_assets.delete({
        where:{
            id: parseInt(id),
        }
    });
}

module.exports = {
    insert,
    edit,
    deleteid,
}