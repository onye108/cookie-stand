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
