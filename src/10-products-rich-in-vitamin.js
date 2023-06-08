const stockProducts = require('./data.json');

function getProductsRichInVitamin() {
  let result = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].nutritionalInfo && stockProducts[i].nutritionalInfo.vitamins) {
      let vitamins = stockProducts[i].nutritionalInfo.vitamins;
      let vit = [];
      // tive axilio da Aluna michelle Cristina t26 b ( o object pega o valor e a chave separadamente)
      let value = Object.values(vitamins);
      let nome = Object.keys(vitamins);
      let frase = (`${nome} - ${value}`);
      vit.push(frase);

      result.push({
        description: stockProducts[i].description,
        formattedPrice: (`R$ ${stockProducts[i].price}`),
        vitaminsInformation: vit,
      });
    }
  }
  console.log(result);
  return result;
}
getProductsRichInVitamin();

module.exports = { getProductsRichInVitamin };
