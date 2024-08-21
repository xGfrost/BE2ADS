const express = require('express')
const { getallproduct, create, deleteproduct, update } = require('./product.service');
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

router.post('/', async (req,res) => {
    try {
        const pddata = req.body;
        const product = await create(pddata);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/update/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const pddata = req.body;
        const product = await update(id,pddata);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/delete/:id', async (req,res) => {
    try {
        const id = req.params.id;
        await deleteproduct(id);
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})



module.exports = router;