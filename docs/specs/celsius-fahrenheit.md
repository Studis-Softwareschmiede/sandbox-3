---
id: celsius-fahrenheit
title: Celsius → Fahrenheit Umrechner
status: active
version: 2
---

# Spec: Celsius → Fahrenheit Umrechner  (`celsius-fahrenheit`)

> **Schicht 3 von 3.** Testbares Verhalten + Verträge, sprach-/paradigma-unabhängig.
> Source of Truth für `coder` (baut daraus), `tester` (testet die Acceptance-Kriterien), `reviewer` (prüft den Diff dagegen).

## Zweck
Eine statische Seite, auf der man einen Temperaturwert in Grad Celsius eingibt und den entsprechenden Wert in Grad Fahrenheit sieht.

## Verhalten
- Given die Seite ist geladen, When der Nutzer eine Zahl ins Celsius-Feld eingibt, Then erscheint der berechnete Fahrenheit-Wert.
- Die Umrechnung folgt der Formel **°F = °C × 9/5 + 32**.
- Die Anzeige aktualisiert sich **ohne Seitenneuladen**.
- Given das Celsius-Feld ist leer oder enthält keine gültige Zahl, When sich die Eingabe ändert, Then wird **kein** berechneter Wert angezeigt, sondern eine verständliche Fehlermeldung.

## Acceptance-Kriterien
- **AC1** — Es gibt ein numerisches Eingabefeld für Grad Celsius und eine sichtbare Ausgabe für Grad Fahrenheit.
- **AC2** — Für eine gültige Zahl wird `°F = °C × 9/5 + 32` korrekt berechnet und angezeigt (Referenzwerte: `100 → 212`, `0 → 32`, `-40 → -40`).
- **AC3** — Die Umrechnung erfolgt clientseitig ohne Seitenneuladen (live bei Eingabe oder per Umrechnen-Button).
- **AC4** — Bei leerer oder nicht-numerischer Eingabe wird statt eines Werts eine verständliche Fehlermeldung angezeigt (konkreter Wortlaut: „Bitte eine gültige Zahl eingeben."); sobald wieder eine gültige Zahl eingegeben wird, erscheint der korrekte °F-Wert.

## Verträge
- **Eingabe:** ein Zahlenwert °C (Eingabefeld).
- **Ausgabe:** der berechnete Wert °F als Text auf der Seite.
- **Formel:** `fahrenheit = celsius * 9 / 5 + 32`.

## Edge-Cases & Fehlerverhalten
- Negative Werte und Null sind gültige Eingaben (siehe Referenzwerte).
- Leere Eingabe und nicht-numerische Eingabe → Fehlermeldung statt Wert (AC4).

## NFRs
- Rein clientseitig (statisches HTML/JS), keine Netzwerkaufrufe.

## Nicht-Ziele
- Fahrenheit → Celsius (Rückrichtung).

## Änderungshistorie
- **v2** — Eingabe-Validierung/Fehlermeldung (AC4) aufgenommen (war in v1 Nicht-Ziel).

## Abhängigkeiten
- keine.
