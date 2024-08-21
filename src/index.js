const express= require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

const upload = require('./middleware/multer');
const middlewareLogRequest = require('./middleware/logs')

app.use(express.json());
app.use(middlewareLogRequest);
app.use(express.urlencoded({ extended:true}));
app.use('/assets', express.static('./public/images'));

const categoriesController = require("./categories/categories.controller");
const productsController = require("./products/products.controller");
const productassetsController = require("./product_assets/product_assets.controller");


app.use('/categories',upload.none(), categoriesController);
app.use('/products',upload.none(), productsController);

app.use('/product_assets',upload.single('image'), productassetsController);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data:req.filter,
        message: 'Upload Berhasil'
    })
})

app.listen(PORT, () => {
    console.log("express API running in port: "+ PORT);
})