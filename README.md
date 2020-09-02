# ODS Tracks App
This is a template to create mobile ready apps for all kind routes and POI, for things like hiking, biking, exploring a city etc.

It especially includes all some code on how to fetch those data from Opendatasoft datasets using our search API v2 and methods to filter those results.

# Potential datasets you may use
Here is a selection of dataset from our network. You may use multiple of them and you can surely find some other nice things in our [20k+ open datasets](https://data.opendatasoft.com/pages/home/).

* Tours : https://data.opendatasoft.com/explore/dataset/circuit-de-randonnee-pedestre%40toursmetropole/map/?disjunctive.duree&disjunctive.longueur&location=11,47.38146,0.63022&basemap=jawg.sunny
* Cap Atlantique : https://data.opendatasoft.com/explore/dataset/244400610_circuits-rando%40capatlantique-loireatlantique/map/?disjunctive.commune&location=11,47.38831,-2.41782&basemap=jawg.sunny
* Balades Ile de France : https://data.opendatasoft.com/explore/dataset/itineraire_balade%40datailedefrance/map/?location=10,48.79195,2.15178&basemap=jawg.sunny
* Cyclo-tourisme Gers : https://data.opendatasoft.com/explore/dataset/itineraires-de-cyclotourisme%40gers-occitanie/map/?location=9,43.66768,0.4144&basemap=jawg.sunny
* Namur : https://data.opendatasoft.com/explore/dataset/namur-circuits-ign%40namur/map/?basemap=jawg.sunny&location=11,50.45495,4.88194
* Orléans : https://data.opendatasoft.com/explore/dataset/environnementbd_parcours_sentiers_joint%40orleansmetropole/map/?location=10,47.69137,1.45844&basemap=jawg.sunny
* Kingston trails : https://data.opendatasoft.com/explore/dataset/trails%40openkingston/map/?location=12,44.28493,-76.52906&basemap=jawg.sunny
* Greenway trails Carry https://data.opendatasoft.com/explore/dataset/greenway-trails%40townofcary/map/?disjunctive.name&disjunctive.segment&disjunctive.status&sort=name&location=11,35.7554,-78.83382&basemap=jawg.sunny
* Community POI Carry : https://data.opendatasoft.com/explore/dataset/points-of-interest%40townofcary/table/?disjunctive.owner&disjunctive.owntype&disjunctive.featurecode&disjunctive.descript
* Leisure biking Bristol : https://data.opendatasoft.com/explore/dataset/leisure-rides-cycling%40bristol/map/?location=10,51.46527,-2.61702&basemap=jawg.sunny

# What language is that ?
This template is written in [Svelte](https://svelte.dev/). Although not as popular as React, it is very approachable. If you are familiar with compenents/props/store based frameworks, it should be very sefl-explainatory.

If you have project and think you would benefit from a template in Vue or React, please open an issue.

# Usage
Installation is straightforward. Clone or fork this repo, then : 
```
yarn ## or npm install
yarn dev ## or npm run dev
```

To setup your mapbox token : 

Deploy on Vercel is just `vercel` or setup your repo as source.
