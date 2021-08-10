
// Declaração da função Converter Temperatura
function temperatureConverter() {
  // Declação do tipo de temperatura que irá ser convertida
  var temperatureTypeFrom = document.querySelector('.temperature-type-from').value;
  // Declaração do valor da temperatura que irá ser convertido
  var temperatureValueFrom = Number(document.querySelector('#temperature-value-from').value);
  // Declaração do tipo de temperatura desejada para conversão
  var temperatureTypeTo = document.querySelector('.temperature-type-to').value;
  // Cálculo da conversão baseado na escolha do tipo de temperatura
  if (temperatureTypeFrom == "celsius") {
    if (temperatureTypeTo == "fahrenheit") {
      convertedTemperature = temperatureValueFrom * 1.8 + 32;
    }
    else if (temperatureTypeTo == "kelvin") {
      convertedTemperature = temperatureValueFrom + 273.15;
    }
    else {
      convertedTemperature = temperatureValueFrom;
    }
  }
  else if (temperatureTypeFrom == "fahrenheit") {
    if (temperatureTypeTo == "celsius") {
      convertedTemperature = (temperatureValueFrom - 32) / 1.8;
    }
    else if (temperatureTypeTo == "kelvin") {
      convertedTemperature = (temperatureValueFrom - 32) * (5/9) + 273.15;
    }
    else {
      convertedTemperature = temperatureValueFrom;
    }
  }
  else {
    if (temperatureTypeTo == "celsius") {
      convertedTemperature = temperatureValueFrom - 273.15;
    }
    else if (temperatureTypeTo == "fahrenheit") {
      convertedTemperature = (temperatureValueFrom - 273.15) * (9/5) + 32;
    }
  else {
      convertedTemperature = temperatureValueFrom;
    }
                                             
  }
  // Impressão do resultado da conversão para o usuário
  document.querySelector('#temperature-value-to').innerHTML = convertedTemperature.toFixed(2);
};
// Declaração da variável "valor convertido"
var convertedTemperature = 0;
// Impressão do resultado da conversão para o usuário
document.querySelector('#temperature-value-to').innerHTML = convertedTemperature.toFixed(2);
// Declaração do botão Converter
const converterBotton = document.querySelector('button');
// Ativação da função Converter temperatura por meio do clique no botão
converterBotton.onclick = temperatureConverter;
