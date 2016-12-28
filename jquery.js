'use strict';
var hoursOpen = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm','3pm','4pm','5pm','6pm','7pm'];
var myStores = [];
var table = $('#table');
var formData = document.getElementById('userinput');
var inputs = $('input').first();
function Stores(name, minCust, maxCust, avgCookieSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSales;
  this.cookiesSold = [];
  this.randomNumArray = [];
  this.totalCookieSales = 0;
  this.calcCookieSales();
  myStores.push(this);
}
function buildRow(element, payload, blah) {
  var tableRow = $('<tr></tr>');
  var tableData = $(element);
  tableData.text(blah);
  tableRow.append(tableData);
  for(var i = 0; i < payload.length; i++){
    tableData = $(element);
    tableData.text(payload[i]);
    tableRow.append(tableData);
  }
  tableData = $(element);
  tableData.text('Totals');
  tableRow.append(tableData);
  table.append(tableRow);
}
//////////////Prototypes
Stores.prototype.calcRandomNumber = function() {
  for(var i = 0; i < hoursOpen.length; i++) {
    this.randomNumArray.push(Math.floor( Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};
Stores.prototype.calcCookieSales = function() {
  this.calcRandomNumber();
  for(var i = 0; i < hoursOpen.length; i++) {
    this.cookiesSold.push(Math.ceil(this.randomNumArray[i] * this.avgCookieSale));
    this.totalCookieSales += this.cookiesSold[i];
  }
};
Stores.prototype.render = function() {
  var storesTr = document.createElement('tr');
  var storeList = document.createElement('tr');
  storeList.textContent = this.name;
  storesTr.appendChild(storeList);
  table.append(storesTr);
//***************writing data in cells***************************
  for(var i = 0; i < hoursOpen.length; i++) {
    var hourlyDataCells = document.createElement('td');
    hourlyDataCells.textContent = this.cookiesSold[i];
    storesTr.appendChild(hourlyDataCells);
  }
  //Store names left side of table***************************
  var lastColumnTotals = document.createElement('tr');
  lastColumnTotals.textContent = this.totalCookieSales;
  storesTr.appendChild(lastColumnTotals);
};
function makeHeaderRows() {
  buildRow('<th></th>', hoursOpen, 'Locations');
};
function footerRows () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = ('Store Sales');
  trEl.appendChild(tdEl);
  for(var i = 0; i < hoursOpen.length; i++){
    var t = 0;
    for (var j = 0; j < myStores.length; j++){
      t += myStores[j].cookiesSold[i];
    }
    var tdEl1 = document.createElement('td');
    tdEl1.textContent = t;
    trEl.appendChild(tdEl1);
  }
  var endTotal = 0;
  for(var k = 0; k < myStores.length; k++){
    endTotal += myStores[k].totalCookieSales;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = endTotal;
  trEl.appendChild(tdEl);
  table.append(trEl);
  event.preventDefault();
}
function initiateProgram() {
  makeHeaderRows();
  new Stores('Alki', 2, 26, 2.6);
  new Stores('CapHill', 20, 38, 2.3);
  new Stores('SeaCenter', 11, 38, 3.7);
  new Stores('SeaTacAP', 3, 24, 1.2);
  new Stores('FirstandPike', 23, 65, 6.3);
  for (var i = 0; i < myStores.length; i++) {
    myStores[i].render();
  }
  footerRows();
}
function inputNewUserData (event) {
  event.preventDefault();
//***********************form data regenrator***************************
  var valueForName = event.target.elements.name.value;
  var valueForMinCust = event.target.elements.minCust.value;
  var valueForMaxCust = event.target.elements.maxCust.value;
  var valueForavgCookieSales = event.target.elements.avgCookieSales.value;
  console.log(valueForName);
  var newLocation = new Stores (valueForName,valueForMinCust, valueForMaxCust, valueForavgCookieSales );
  table.innerHTML = '';
  for (var i = 0; i < myStores.length; i++) {
    myStores[i].render();
  }
  footerRows();
};
////////////////Execution Code////////////////////////////////////////
initiateProgram();
formData.addEventListener('submit', inputNewUserData);
inputs.val('I am only read');
inputs.attr('readonly', true);
//*******************Validations********************************
