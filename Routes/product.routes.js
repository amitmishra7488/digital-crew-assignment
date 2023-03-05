const express = require('express');
const { createProduct, getProduct, getProductById, updateProduct, deleteProduct } = require('../controller/inventory.controller');
const routes = express.Router();


// routes for get Inventory data
routes.get('/', async (req, res) => {
    const product = await getProduct();
    if (product.status == "success") {
        res.status(201).json(product)
    }
    else {
        res.status(404).json(product)
    }
})


// routes for get specific invemtory  data with  id
routes.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const product = await getProductById(id);
    if (product.status == "success") {
        res.status(201).json(product)
    }
    else {
        res.status(404).json(product)
    }
})


//  routes for post a new data in Inventory 
routes.post("/", async (req, res) => {
    const data = req.body;
    const post = await createProduct(data);
    if (post.status == "success") {
        console.log(post.data.title);
        req.io.emit('product_create', { title: post.data.title })
        res.status(201).json(post)
    }
    else {
        res.status(404).json(post)
    }
})


// routes for update a existing data with their id
routes.put("/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    console.log(data);
    console.log(id);
    const product = await updateProduct(id, data);
    if (product.status == "success") {
        res.status(201).json(product)
    }
    else {
        res.status(404).json(product)
    }
})


// routes for delete a existing data with their id
routes.delete("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const product = await deleteProduct(id);
    if (product.status == "success") {
        req.io.emit('product_delete', { title: product.data.title })
        res.status(201).json(product)
    }
    else {
        res.status(404).json(product)
    }
})


module.exports = routes;