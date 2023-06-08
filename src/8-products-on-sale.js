const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...

  let result = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].onSale === true) {
      let format = stockProducts[i].price;
      result.push({
        description: (stockProducts[i].description),
        formattedPrice: (`R$ ${format}`),
        onSale: true,
      });
    }
  }
  return result;
}; getProductsOnSale();

module.exports = { getProductsOnSale };
