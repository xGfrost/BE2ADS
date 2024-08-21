const express = require('express');
const { create, deleteid, update } = require("./categories.service");
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const cgdata = req.body;
        const cg = await create(cgdata);
        res.send(cg)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/update/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const cgdata = req.body;
        const cg = await update(id,cgdata);
        res.send(cg)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/delete/:id', async (req,res) => {
    try {
        const id = req.params.id;
        await deleteid(id);
        res.send({
            message:"Success"
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;