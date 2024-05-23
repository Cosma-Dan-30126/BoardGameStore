const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name:"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0

        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },

    },
    {
        timestamps: true
        //inca 2 campuri care afiseaza momentul cand a fost creat obiectul
    }

);

const Product= mongoose.model("Product",ProductSchema);
module.exports=Product;