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

module.exports = {
    findproducts,
}