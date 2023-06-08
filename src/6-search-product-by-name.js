const stockProducts = require('./data.json');

const searchProductByName = (param) => {
  // Desenvolva seu código dentro dessa função...
  let nome = param;
  let result = null;

  for (let i = 0; i < stockProducts.length; i += 1) {
    if (nome === (stockProducts[i].productName)) {
      let format = stockProducts[i].price;
      result = {
        description: (stockProducts[i].description),
        formattedPrice: (`R$ ${format}`),
      };
    }
  }
  return result;
};

searchProductByName();

module.exports = { searchProductByName };
