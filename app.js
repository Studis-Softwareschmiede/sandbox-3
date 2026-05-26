// Celsius → Fahrenheit: clientseitige Live-Umrechnung (°F = °C × 9/5 + 32).
(function () {
  "use strict";

  var celsiusInput = document.getElementById("celsius");
  var fahrenheitOutput = document.getElementById("fahrenheit");

  function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }

  function update() {
    var celsius = Number(celsiusInput.value);
    fahrenheitOutput.textContent = String(toFahrenheit(celsius));
  }

  celsiusInput.addEventListener("input", update);
  update();
})();
