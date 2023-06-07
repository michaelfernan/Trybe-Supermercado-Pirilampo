const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...

  let nomes = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].quantityInStock > 0 && stockProducts[i].quantityInStock < 11) {
      nomes.push(`${stockProducts[i].productName}: ${
        +(stockProducts[i].quantityInStock)} unidades`);
    }
  } console.log(nomes);
  return nomes;
};
getLowStockProducts();

module.exports = { getLowStockProducts };
