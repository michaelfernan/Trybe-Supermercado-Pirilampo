const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...

  let nome = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].quantityInStock > 0 && stockProducts[i].quantityInStock < 11) {
      nome.push(`${stockProducts[i].productName}: ${
        +(stockProducts[i].quantityInStock)} unidades`);
    }
  } console.log(nome);
  return nome;
};
getLowStockProducts();

module.exports = { getLowStockProducts };
