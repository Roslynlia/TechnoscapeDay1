var express = require("express");
var app = express();
var Products = require("./product.json");
var PORT = process.env.PORT || 5000;
var test = "";

app.get('/', (req, res) => {
    res.send("simple rest app");
});

app.get("/product/listall", (req, res) => {
    res.json(Products);
});

app.get("product/:id", (req, res) => {
    res.json(Products.find((product) => {
        return req.params.id == product.id
    }))
})

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});