const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...

  let quant = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].quantityInStock < 1) {
      quant.push(stockProducts[i].productName);
    }
  } console.log(quant); return quant;
}; getOutOfStockProducts();
module.exports = { getOutOfStockProducts };
