const stockProducts = require('./data.json');

const searchProductsByBrand = (param) => {
  // Desenvolva seu código dentro dessa função...
  let nome = param;
  let result = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    if (nome === (stockProducts[i].brand)) {
      let format = stockProducts[i].price;
      result.push({
        description: (stockProducts[i].description),
        formattedPrice: (`R$ ${format}`),
      });
    }
  }
  return result;
};
searchProductsByBrand();
module.exports = { searchProductsByBrand };
