// Celsius → Fahrenheit: clientseitige Live-Umrechnung (°F = °C × 9/5 + 32).
(function () {
  "use strict";

  var celsiusInput = document.getElementById("celsius");
  var fahrenheitOutput = document.getElementById("fahrenheit");
  var errorOutput = document.getElementById("error");

  var ERROR_MESSAGE = "Bitte eine gültige Zahl eingeben.";

  function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }

  function isValid(raw) {
    // Leere Eingabe oder nicht-numerische Eingabe ist ungültig (AC4).
    return raw.trim() !== "" && Number.isFinite(Number(raw));
  }

  function showResult(fahrenheit) {
    errorOutput.textContent = "";
    errorOutput.hidden = true;
    fahrenheitOutput.hidden = false;
    fahrenheitOutput.textContent = String(fahrenheit);
  }

  function showError() {
    fahrenheitOutput.hidden = true;
    fahrenheitOutput.textContent = "—";
    errorOutput.hidden = false;
    errorOutput.textContent = ERROR_MESSAGE;
  }

  function update() {
    var raw = celsiusInput.value;
    if (isValid(raw)) {
      showResult(toFahrenheit(Number(raw)));
    } else {
      showError();
    }
  }

  celsiusInput.addEventListener("input", update);
  update();
})();
