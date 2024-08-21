const { findproducts } = require('./product.repository')

const getallproduct = async (price) => {
    const product = await findproducts(price);
    return product;
}

module.exports ={
    getallproduct,
}