const express = require('express');
const app = express();
const mongoose = require('mongoose')
var cors = require('cors')
const Product=require('./productmodal');

app.use(express.json());

app.use(cors());

app.post('/api/notes/addnote', async(req, res) => {
        try {
          const { title,description,price,discount,sku,available } = req.body;
          //if there are error return bad request and error
          const product = new Product({
            title,description,price,discount,sku,available
          });
          const savedProduct= await product.save();
          res.json(savedProduct);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal error occured");
        }
});




mongoose.connect("mongodb+srv://mohit:27mk2002@cluster0.wzw3ecy.mongodb.net/product?retryWrites=true&w=majority")
.then(result => {
    app.listen(5000, () => {
        console.log('Server running on port 3000');
      });
})
.catch(err => {
    console.log(err);
})