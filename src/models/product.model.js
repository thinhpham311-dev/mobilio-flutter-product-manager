import mongoose from 'mongoose'; // Erase if already required

const DOCUMENT_NAME = 'Product'
const COLLECTION_NAME = 'Products'

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

const Product = mongoose.model(DOCUMENT_NAME, productSchema)

export { Product }

