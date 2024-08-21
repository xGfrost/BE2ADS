const express= require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

const categoriesController = require("./categories/categories.controller");
const productsController = require("./products/products.controller");


app.use('/categories', categoriesController);
app.use('/products', productsController);

app.listen(PORT, () => {
    console.log("express API running in port: "+ PORT);
})