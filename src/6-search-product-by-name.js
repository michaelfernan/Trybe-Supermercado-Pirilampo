const stockProducts = require('./data.json');

const searchProductByName = () => {
  // Desenvolva seu código dentro dessa função...
  let nome = 'Arroz';
  let result;

  for (let i = 0; i < stockProducts.length; i += 1) {
    if (nome === (stockProducts[i].productName)) {
      result = stockProducts[i].description;
      console.log(result);
    } else {
      return null;
    }
  } return result;
};

searchProductByName();

module.exports = { searchProductByName };
