const express = require('express');
const { create, update, deleteassets } = require('./product_assets.service');
const router = express.Router();

router.post('/', async (req,res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const padata = req.body;
        padata.image = image;
        const assets = await create(padata);
        res.send({
            data: assets,
            message:"Success"
        })
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/update/:id', async (req,res) => {
    const {file} = req;
    const image = file.filename;
    try {
        const id = req.params.id;
        const padata = req.body;
        padata.image = image;
        const assets = await update(id,padata);
        res.send({
            data: assets,
            message:"Success"
        })
        
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/delete/:id', async (req,res) => {
    try {
        const id = req.params.id;
        await deleteassets(id);
        res.send({
            message:"Success"
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})


module.exports = router;