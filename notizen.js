// Coding Challenge -----------------------------------------------------------------------------------------------

let menus = ['Pommes', 'Fritten', 'Pommes Frites'];
let prices = [3.50, 4.50, 5.50];
let amounts = [0, 0, 0]; // Deafault Menge, die im Warenkorb liegt

function getValueFromInput(inputId) { // wir übergeben die input-ID und kriegen den value raus
  let inputValue = document.getElementById(inputId).value;
  return inputValue;
}

function getMenuFromInput() {
  let newMenu = getValueFromInput('menu'); // wir benutzen die function von oben um den value vom input 'menu' zu holen
  return newMenu.trim(); // leerzeichen vorne und hinten werden rausgekürzt
}

function getPriceFromInput() {
  let inputValue = getValueFromInput('price'); // wir holen uns den value aus dem input 'price mit der obigen function'
  return parseFloat(inputValue); // wandelt den Wert in eine Zahl um
}

function onAddMenu() {
  let menu = getMenuFromInput(); // definiert menu als den wert den die function getMenuFromInput() returnt
  let menuIndex = getMenuIndex(menu); // erfragt mithilfe der function getMenuIndex() den Index von dem Wert aus dem Input 'menu'

  let price = getPriceFromInput();

  if (menuIndex == -1) { // getMenuIndex() gibt -1 zurück, wenn der Wert im Array nicht existiert. Ansonsten gibt es den entsprechenden Index zurück
    menus.push(menu);
    prices.push(price);
    amounts.push(1);
  } else {
    amounts[menuIndex]++; // im Array amounts, bei diesem Index, wird der Wert um 1 erhöht
  }
}

function getMenuIndex(menu) { // Abfrage: welchen Index hat der übergebene Wert?
  return menus.indexOf(menu);// if else ist nicht nötig, weil indexOf sowieso -1 returnt, wenn es nichts findet
}
