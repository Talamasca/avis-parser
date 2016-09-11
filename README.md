# avis-parser

### Exemple : 

```javascript
node avis.js "Montpellier - Gare - France" 18/09/2016 26/09/2016
```
### Argument	
1. Nom de la gare
2. Date de départ (format d/m/Y)
3. Date de retour (format d/m/Y)
4. Code promo (par defaut VISA PREMIER)

### Resultat : 

```
Location à Montpellier - Gare - France du 18/09/2016 au 26/09/2016
[ { Titre: 'Fiat 500',
    Prix: '\r\n        205,85 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Opel Corsa',
    Prix: '\r\n        217,20 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Peugeot 208',
    Prix: '\r\n        225,44 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Ford Focus',
    Prix: '\r\n        250,80 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Renault Megane (GPS Incl)',
    Prix: '\r\n        280,46 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'DS 4',
    Prix: '\r\n        327,46 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Peugeot 3008',
    Prix: '\r\n        329,35 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Nissan Qashqai',
    Prix: '\r\n        334,37 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Peugeot 508',
    Prix: '\r\n        389,38 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Renault Grand Scenic',
    Prix: '\r\n        427,71 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Renault Espace',
    Prix: '\r\n        578,21 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Mercedes Classe C',
    Prix: '\r\n        579,17 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Renault Trafic',
    Prix: '\r\n        666,47 €\r\n        Prix du véhicule\r\n      ' },
  { Titre: 'Mercedes Classe E',
    Prix: '\r\n        753,13 €\r\n        Prix du véhicule\r\n      ' } ]```