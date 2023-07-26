import Product from "./models/product.js";

export const getProductsByRepo= async (videoId) => {
    try{
        const products = await Product.find({videoId});
        return products;
    } catch (err){
        return err;
    }
}