const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

function convertTemperature(value, unit) {
  switch (unit) {
    case 'celsius':
      var fahrenheit = (value * 9/5) + 32;
      var kelvin = value + 273.15;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      kelvinInput.value = kelvin.toFixed(2);
      break;
    case 'fahrenheit':
      var celsius = (value - 32) * 5/9;
      var kelvin = (value + 459.67) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      kelvinInput.value = kelvin.toFixed(2);
      break;
    case 'kelvin':
      var celsius = value - 273.15;
      var fahrenheit = (value * 9/5) - 459.67;
      celsiusInput.value = celsius.toFixed(2);
      fahrenheitInput.value = fahrenheit.toFixed(2);
      break;
  }
}

celsiusInput.addEventListener('change', function() {
  convertTemperature(this.value, 'celsius');
});

fahrenheitInput.addEventListener('change', function() {
  convertTemperature(this.value, 'fahrenheit');
});

kelvinInput.addEventListener('change', function() {
  convertTemperature(this.value, 'kelvin');
});
