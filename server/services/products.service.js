const data = require("../data");
const Product = require('../models/product');

class ProductsService {

  find = async (key) => {
    let data = await Product.find(
      {
        "$or": [
          { name: { $regex: key } },
          { tags: { $regex: key } },
          {
            "$and": [
              { isActive: true }
            ]
          }
        ]
      }
    )
    return data;
  }






}

module.exports = ProductsService;
