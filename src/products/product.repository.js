const prisma = require("../db");

const findproducts = async (price) => {
    const product = prisma.products.findMany({
        where:{
            price:{
                equals:price
            }
        },
        include:{
            categories:true,
            product_assets:true
        }
    })
    return product;
}

const insert = async (pddata) => {
    const product = prisma.products.create({
        data:{
            Category_id: parseInt(pddata.Category_id),
            name: pddata.name,
            slug: pddata.slug,
            price:pddata.price,
        }
    })
    return product;
}

const edit = async (id,pddata) => {
    const product = prisma.products.update({
        where:{
            id:parseInt(id),
        },
        data:{
            Category_id: parseInt(pddata.Category_id),
            name: pddata.name,
            slug: pddata.slug,
            price:pddata.price,
        }
    })
    return product;
}

const deleteid = async (id) => {
    await prisma.products.delete({
        where:{
            id: parseInt(id),
        }
    })
}

module.exports = {
    findproducts,
    insert,
    edit,
    deleteid,
}