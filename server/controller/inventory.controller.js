const inventoryModel = require('../models/inventory.model')

//  get all inventory items using this function
const getProduct = async () => {
    try {
        const product = await inventoryModel.find();
        return {
            status: "success",
            data: product
        }
    } catch (error) {
        return {
            status: "failed",
            message: "Something went wrong"
        }
    }
}

//  create a items for inventory using this function
const createProduct = async (data) => {
    try {
        const post = await inventoryModel.create(data);
        return {
            status: "success",
            data: post
        }
    } catch (error) {
        return {
            status: "failed",
            message: error.message
        }
    }
}

// get a single itenm the inventory
const getProductById = async (id) => {
    try {

        const product = await inventoryModel.findById({ _id: id });
        return {
            status: "success",
            data: product
        }
    } catch (error) {
        return {
            status: "failed",
            message:  error.message
        }
    }
}


// update a item 
const updateProduct = async (id, data) => {
    try {
        const product = await inventoryModel.findByIdAndUpdate(id, data, {
            new: true,
        });
        return {
            status: "success",
            data: product
        }
    } catch (error) {
        return {
            status: "failed",
            message: "Something went wrong"
        }
    }

};

//  delete a product from the inventory
const deleteProduct = async (id) => {
    try {
        const product = await inventoryModel.findByIdAndDelete(id);
        return {
            status: "success",
            data: product
        }
    } catch (error) {
        return {
            status: "failed",
            message: "Something went wrong"
        }
    }
};

module.exports = {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}