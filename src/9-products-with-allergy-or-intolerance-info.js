const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let result = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    if (!stockProducts[i].allergyOrIntolerance) {
      result.push({
        description: (stockProducts[i].description),
        formattedPrice: (`R$ ${stockProducts[i].price}`),
      });

      // o uso do join foi utizado para a formataçao do array.
    } else {
      const alergia = (stockProducts[i].allergyOrIntolerance).join(' ');
      result.push({
        description: (stockProducts[i].description),
        formattedPrice: (`R$ ${stockProducts[i].price}`),
        allergyOrIntoleranceMessage: (`Pode conter: ${alergia}`),

      });
    }
  }

  return result;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
