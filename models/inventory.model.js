const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema for Inventory
const inventorySchema = new Schema(
    {
    title: {type: String, required: true},
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true},
    price: {type: Number, required: true},
},
    { timestamps: true,}
)

const inventoryModel = mongoose.model('Inventory', inventorySchema);
module.exports = inventoryModel;