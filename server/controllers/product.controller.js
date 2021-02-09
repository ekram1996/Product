const Product = require('../models/product.model');

module.exports.createNewProduct = (req, res) => {
    const { title, price,description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}
module.exports.getAllProduct= (request, response) => {
    Product.find({})
        .then(products=> response.json(products))
        .catch(err => response.json(err))
}
