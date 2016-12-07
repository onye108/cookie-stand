'use strict';

var hoursOpen = ['6am','7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike = {
  minCust:23,
  maxCust:65,
  avgCookieSale:6.3,
  cookiesPhour :[],
  custPhour: [],
  customerVisit: function (){
    for(var i = 0; i < hoursOpen.length; i++){
      var customers = Math.floor( Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.custPhour.push(customers);
    }
  },

  cookiesSold: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var result = (this.custPhour[i] * this.avgCookieSale);
      this.cookiesPhour.push(Math.round(result));

    }
  }

};

firstAndPike.customerVisit();
firstAndPike.cookiesSold();

var total = 0;
var fnpList = document.getElementById('firstAndPike');
for(var i = 0; i < hoursOpen.length; i++) {
  var liEl = document.createElement('li');
  var theHour = hoursOpen[i];
  var soldCookies = firstAndPike.cookiesPhour[i];
  total += soldCookies;


  var message = theHour + ' : ' + soldCookies;


  liEl.textContent = message;
  fnpList.appendChild(liEl);

}
var tot = document.createElement('li');
tot.textContent = 'Total : ' + total;
fnpList.appendChild(tot);

var seaTacAP = {
  minCust:3,
  maxCust:24,
  avgCookieSale:1.2,
  cookiesPhour :[],
  custPhour: [],

  customerVisit: function (){
    for(var i = 0; i < hoursOpen.length; i++){
      var customers = Math.floor( Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.custPhour.push(customers);
    }
  },

  cookiesSold: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var result = (this.custPhour[i] * this.avgCookieSale);
      this.cookiesPhour.push(Math.round(result));

    }
  }

};

seaTacAP.customerVisit();
seaTacAP.cookiesSold();

var total1 = 0;
var seaTacList = document.getElementById('SeaTacAirport');
for(var i = 0; i < hoursOpen.length; i++) {
  var liEl1 = document.createElement('li');
  var theHour1 = hoursOpen[i];
  var soldCookies1 = seaTacAP.cookiesPhour[i];
  total1 += soldCookies1;


  var message1 = theHour1 + ' : ' + soldCookies1;


  liEl1.textContent = message1;
  seaTacList.appendChild(liEl1);

}
var tot1 = document.createElement('li');
tot1.textContent = 'Total : ' + total1;
seaTacList.appendChild(tot1);


var seaCenter = {
  minCust:11,
  maxCust:38,
  avgCookieSale:3.7,
  cookiesPhour :[],
  custPhour: [],

  customerVisit: function (){
    for(var i = 0; i < hoursOpen.length; i++){
      var customers = Math.floor( Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.custPhour.push(customers);
    }
  },

  cookiesSold: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var result = (this.custPhour[i] * this.avgCookieSale);
      this.cookiesPhour.push(Math.round(result));

    }
  }

};

seaCenter.customerVisit();
seaCenter.cookiesSold();

var total2 = 0;
var seaCenList = document.getElementById('seaCenter');
for(var i = 0; i < hoursOpen.length; i++) {
  var liEl2 = document.createElement('li');
  var theHour2 = hoursOpen[i];
  var soldCookies2 = seaCenter.cookiesPhour[i];
  total2 += soldCookies2;


  var message2 = theHour2 + ' : ' + soldCookies2;


  liEl2.textContent = message2;
  seaCenList.appendChild(liEl2);

}
var tot2 = document.createElement('li');
tot2.textContent = 'Total : ' + total2;
seaCenList.appendChild(tot2);

var capitolHill = {
  minCust:20,
  maxCust:38,
  avgCookieSale:2.3,
  cookiesPhour :[],
  custPhour: [],

  customerVisit: function (){
    for(var i = 0; i < hoursOpen.length; i++){
      var customers = Math.floor( Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.custPhour.push(customers);
    }
  },

  cookiesSold: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var result = (this.custPhour[i] * this.avgCookieSale);
      this.cookiesPhour.push(Math.round(result));

    }
  }

};

capitolHill.customerVisit();
capitolHill.cookiesSold();

var total3 = 0;
var capHilList = document.getElementById('capitolHill');
for(var i = 0; i < hoursOpen.length; i++) {
  var liEl3 = document.createElement('li');
  var theHour3 = hoursOpen[i];
  var soldCookies3 = capitolHill.cookiesPhour[i];
  total3 += soldCookies3;


  var message3 = theHour3 + ' : ' + soldCookies3;


  liEl3.textContent = message3;
  capHilList.appendChild(liEl3);

}
var tot3 = document.createElement('li');
tot3.textContent = 'Total : ' + total3;
capHilList.appendChild(tot3);


var alkiStore = {
  minCust:2,
  maxCust:16,
  avgCookieSale:4.6,
  cookiesPhour :[],
  custPhour: [],

  customerVisit: function (){
    for(var i = 0; i < hoursOpen.length; i++){
      var customers = Math.floor( Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.custPhour.push(customers);
    }
  },

  cookiesSold: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var result = (this.custPhour[i] * this.avgCookieSale);
      this.cookiesPhour.push(Math.round(result));

    }
  }

};

alkiStore.customerVisit();
alkiStore.cookiesSold();

var total4 = 0;
var alkiList = document.getElementById('Alki Location');
for(var i = 0; i < hoursOpen.length; i++) {
  var liEl4 = document.createElement('li');
  var theHour4 = hoursOpen[i];
  var soldCookies4 = alkiStore.cookiesPhour[i];
  total4 += soldCookies4;


  var message4 = theHour4 + ' : ' + soldCookies4;


  liEl4.textContent = message4;
  alkiList.appendChild(liEl4);

}
var tot4 = document.createElement('li');
tot4.textContent = 'Total : ' + total4;
alkiList.appendChild(tot4);


function Store (name, minCust, maxCust, avgSales){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgSales;
  this.cookiesPhour = [];
  this.custPhour = [];

  this.customerVisit = function (){
    for(var i = 0; i < hoursOpen.length; i++){
      var customers = Math.floor( Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.custPhour.push(customers);
    }
  };

  this.cookiesSold = function (){
    for(var i = 0; i < hoursOpen.length; i++){
      var result = (this.custPhour[i] * this.avgCookieSale);
      this.cookiesPhour.push(Math.round(result));

    }
  };
  myStores.push(this);
}
var myStores = [];
new Store ('Alki', 2, 26, 2.6);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Sea Center', 11, 38, 3.7);
new Store ('Seattle Tacoma AP', 3, 24, 1.2);
new Store ('First and Pike', 23, 65, 6.3);
