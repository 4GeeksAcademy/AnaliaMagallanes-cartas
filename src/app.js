/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "k"
  ];

  let symbols = ["♧", "♡", "♤", "♦"];

  let colors = ["red", "black"];

  let cardSymbolHeader = document.getElementById("card-symbol-header");

  let cardSymbolValue = document.getElementById("card-value");

  let cardSymbolFooter = document.getElementById("card-symbol-footer");

  let randomValues = Math.floor(Math.random() * values.length);
  let randomSymbols = Math.floor(Math.random() * symbols.length);
  let randomColors = Math.floor(Math.random() * colors.length);

  cardSymbolHeader.innerHTML = `<p class='${colors[randomColors]}'> ${symbols[randomSymbols]} </p>`;

  cardSymbolValue.innerHTML = `<p class='${values[randomValues]}'> ${values[randomValues]}</p>`;

  cardSymbolFooter.innerHTML = `<p class='${colors[randomColors]}'> ${symbols[randomSymbols]} </p>`;
};
