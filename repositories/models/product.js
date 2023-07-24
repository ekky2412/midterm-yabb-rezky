import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    productID: {
        required: true,
        type: "String"
    },
    linkProduct: {
        required: true,
        type: "String"
    },
    title: {
        required: true,
        type: "String"
    },
    price: {
        required: true,
        type: "Number"
    },
    videoId: {
        required: true,
        type: "String"
    }
}, {
    versionKey: false
})