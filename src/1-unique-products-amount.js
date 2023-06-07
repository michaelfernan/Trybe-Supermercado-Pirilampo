const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  sum = 0;
  if (stockProducts.length > 0) {
    sum = stockProducts.length;
  } else if (stockProducts === 0) {
    sum = 0;
  }

  return sum;
};

module.exports = { getUniqueProductsAmount };
