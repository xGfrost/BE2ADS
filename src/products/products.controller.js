const express = require('express')
const { getallproduct } = require('./product.service');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const price = req.query.price
        let product;
        if (price) {
            product = await getallproduct(price);
        } else {
            product = await getallproduct();
        }
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;