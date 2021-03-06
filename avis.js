var Xray = require('x-ray');
var urlencode = require('urlencode');

var city = urlencode.encode(process.argv[2]);
var dateFrom = urlencode.encode(process.argv[3]); // d/m/Y
var dateTo = urlencode.encode(process.argv[4]); // d/m/Y

// Code visa premier par défaut
if (!process.argv[4]) {
    var awdcode = process.argv[4];
} else {
   var awdcode = "M444101";
}

var timeFrom="1900";
var timeTo="1900";

var header = "Location à " + process.argv[2] + " du " + process.argv[3] + " au " + process.argv[4];
console.log(header);

function filterprice(value) {
  var numb = value.match(/\d+(\,\d+)/gi);
  return numb[0];//.substring(0, numb.length - 2)
}

var urlAvis = 'https://secure.avis.fr/r%C3%A9sultats-recherche-v%C3%A9hicules?driverDob=&isUasorSds=&fccRecg=&hire-country=GB&hire-search=' + city + '&hire-location=AN8&station-type=train&return-search=' + city + '&return-location=&return-station-type=&date-from=' + dateFrom + '&time-from=' + timeFrom + '&date-to=' + dateTo + '&time-to=' + timeFrom + '&time-from-hours=19&time-from-minutes=00&time-to-hours=10&time-to-minutes=00&returnToDifferentLocation=on&yds-applicable=1&dd=&yy=&mm=&awdcode=' + awdcode + '&fccInputWizard=&fccInputSurname=&rentalPeriod=2&driverDob=&isUasorSds=';

var x = new Xray({
    filters: {
      cleanprice: function (value) {
        return filterprice(value);
      }
  }
});

x(urlAvis,
'.car-header',
[{
       Titre: 'strong',
       Prix: '.price|cleanprice' //:not(span){.additional}
   }])
   (function(err, obj) {
     //todo générer et pousser un JSON par véhicule vers ES
     console.log(obj);
   })
