const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let soma = 0;

  for (let i = 0; i < stockProducts.length; i += 1) {
    soma += stockProducts[i].quantityInStock;
  } console.log(soma);
  return soma;
};
getProductsAmount();
module.exports = { getProductsAmount };
