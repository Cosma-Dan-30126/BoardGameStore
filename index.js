const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const productRoutes = require("./routes/product.route.js");
const app = express()

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
    res.send("Hello from node API Server Updated");
});


mongoose.connect("mongodb+srv://Dan:1234@backend.wac9c0r.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log('Server is running on port: 3000');
        });
    })
    .catch(() => {
        console.log("Failed to connect")
    });

