const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  let nomes = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    nomes.push(stockProducts[i].productName);
  } return nomes;
};

module.exports = { getUniqueProductsName };
