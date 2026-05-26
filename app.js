// Temperatur-Umrechner: clientseitige Live-Umrechnung, Richtung umschaltbar (°C↔°F).
(function () {
  "use strict";

  var valueInput = document.getElementById("value");
  var resultOutput = document.getElementById("result");
  var errorOutput = document.getElementById("error");
  var toggleButton = document.getElementById("toggle");

  var pageTitle = document.getElementById("page-title");
  var inputLabel = document.getElementById("input-label");
  var resultLabel = document.getElementById("result-label");
  var formula = document.getElementById("formula");

  var ERROR_MESSAGE = "Bitte eine gültige Zahl eingeben.";

  // Die beiden Umrechnungsrichtungen als Zustand (AC5).
  var DIRECTIONS = {
    cToF: {
      title: "Celsius → Fahrenheit",
      inputLabel: "Grad Celsius (°C)",
      resultLabel: "Grad Fahrenheit (°F)",
      placeholder: "z. B. 100",
      formula: "°F = °C × 9/5 + 32",
      // Button zeigt die Zielrichtung beim Umschalten an (AC5).
      toggleLabel: "Richtung wechseln: °F → °C",
      convert: function (celsius) {
        return celsius * 9 / 5 + 32;
      },
      next: "fToC"
    },
    fToC: {
      title: "Fahrenheit → Celsius",
      inputLabel: "Grad Fahrenheit (°F)",
      resultLabel: "Grad Celsius (°C)",
      placeholder: "z. B. 212",
      formula: "°C = (°F − 32) × 5/9",
      toggleLabel: "Richtung wechseln: °C → °F",
      convert: function (fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      },
      next: "cToF"
    }
  };

  var current = "cToF";

  function dir() {
    return DIRECTIONS[current];
  }

  function isValid(raw) {
    // Leere Eingabe oder nicht-numerische Eingabe ist ungültig (AC4, beide Richtungen).
    return raw.trim() !== "" && Number.isFinite(Number(raw));
  }

  function showResult(value) {
    errorOutput.textContent = "";
    errorOutput.hidden = true;
    resultOutput.hidden = false;
    resultOutput.textContent = String(value);
  }

  function showError() {
    resultOutput.hidden = true;
    resultOutput.textContent = "—";
    errorOutput.hidden = false;
    errorOutput.textContent = ERROR_MESSAGE;
  }

  // Liefert den aktuell angezeigten Ausgabewert als String, oder null wenn
  // gerade kein gültiger Wert angezeigt wird (Fehler-/Leerzustand) — für AC6.
  function currentOutputValue() {
    if (errorOutput.hidden && !resultOutput.hidden) {
      return resultOutput.textContent;
    }
    return null;
  }

  function applyDirectionLabels() {
    var d = dir();
    pageTitle.textContent = d.title;
    inputLabel.textContent = d.inputLabel;
    resultLabel.textContent = d.resultLabel;
    valueInput.placeholder = d.placeholder;
    formula.textContent = d.formula;
    toggleButton.textContent = d.toggleLabel;
  }

  function update() {
    var raw = valueInput.value;
    if (isValid(raw)) {
      showResult(dir().convert(Number(raw)));
    } else {
      showError();
    }
  }

  function toggleDirection() {
    // Kontinuität (AC6): der zuletzt angezeigte Ausgabewert wird zur neuen Eingabe;
    // bei ungültiger/leerer Ausgabe startet die andere Richtung leer.
    var carry = currentOutputValue();
    current = dir().next;
    applyDirectionLabels();
    valueInput.value = carry === null ? "" : carry;
    update();
  }

  toggleButton.addEventListener("click", toggleDirection);
  valueInput.addEventListener("input", update);

  applyDirectionLabels();
  update();
})();
