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
Location à Montpellier - Gare - France du 07/10/2016 au 09/10/2016
[ { Titre: 'Fiat 500', Prix: '72,00' },
  { Titre: 'Opel Corsa', Prix: '72,72' },
  { Titre: 'Peugeot 208', Prix: '86,40' },
  { Titre: 'Ford Focus', Prix: '90,00' },
  { Titre: 'Renault Megane (GPS Incl)', Prix: '99,00' },
  { Titre: 'DS 4', Prix: '117,00' },
  { Titre: 'Nissan Qashqai', Prix: '122,40' },
  { Titre: 'Peugeot 508', Prix: '122,40' },
  { Titre: 'Peugeot 3008', Prix: '165,60' },
  { Titre: 'Mercedes Classe C', Prix: '216,00' },
  { Titre: 'Renault Grand Scenic', Prix: '223,56' },
  { Titre: 'Mercedes Classe E', Prix: '288,00' },
  { Titre: 'Renault Espace', Prix: '341,10' },
  { Titre: 'Renault Trafic', Prix: '359,10' } ]
```

### TODO : 
    
2. lister automatiquement le prix des WE à venir
3. lister les agences (dans mongo / fichier plat ?)
4. grouper les resultats par ville !
4. stocker résultats (dans ES ?)
5. alerte par mail (gare / seuil de prix) 
6. UI
7. analyse plus poussée sur l'évolution des prix
8. api méteo ?

#### archi
1. nodejs parcours le site AVIS récupère chaques jours le prix pour les WE des 3 mois à venir
2. stocke ça dans ES https://www.npmjs.com/package/elasticsearch
3. dashboard kibana 
4. front en Sf exposer tout ça 


### RENDU : 

| Voiture   |      Catégorie      |  WE du xx au xx |  WE du xx au xx |  WE du xx au xx |Tendance|
|----------|:-------------:|------:|------:|------:|------:|
| Mercedes Classe C |  Luxe | $1600 | $1600 | $1600 | $1600 | hausse|
| Renault Trafic |  Utilitaire | $1600 | $1600 | $1600 | $1600 |stable|
| Peugeot 3008 |  Moyenne | $1600 | $1600 | $1600 | $1600 |baisse|

### MPD
#### Rent
1. id
2. id_cat
3. id_car
4. index_date
5. id_agency_start
6. id_agency_end
5. start_date
6. end_date
7. duration
8. price


#### Category
1. id
2. category
3. available


#### Cars
1. id
2. modele
3. available


#### Agency
1. id
2. agency 
3. available

#### Stats


 