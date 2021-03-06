# ODS Tracks App
This is a template to create mobile ready apps for all kind routes and POI, for things like hiking, biking, exploring a city etc.

[Demo (made for mobile)](https://ods-tracks.etienneburdet.vercel.app/)

It especially includes all some code on how to fetch those data from Opendatasoft datasets using our search API v2 and methods to filter those results.
The source dataset is a dummy one (made from my Strava records 😛): https://eburdet.opendatasoft.com/explore/dataset/gpx/table/

# Example datasets you may use
Here is are a few exemple of compatible datasets from our network. You may use multiple of them and you can surely find some other nice things in our [20k+ open datasets](https://data.opendatasoft.com/pages/home/).

* [Tours City](https://data.opendatasoft.com/explore/dataset/circuit-de-randonnee-pedestre%40toursmetropole/map/?disjunctive.duree&disjunctive.longueur&location=11,47.38146,0.63022&basemap=jawg.sunny)
* [Namur](https://data.opendatasoft.com/explore/dataset/namur-circuits-ign%40namur/map/?basemap=jawg.sunny&location=11,50.45495,4.88194)
* [Greenway trails Carry](https://data.opendatasoft.com/explore/dataset/greenway-trails%40townofcary/map/?disjunctive.name&disjunctive.segment&disjunctive.status&sort=name&location=11,35.7554,-78.83382&basemap=jawg.sunny)


# What language is that ?
This template is written in [Svelte](https://svelte.dev/). Although not as popular as React, it is very approachable. If you are familiar with compenents/props/store based frameworks, it should be very sefl-explainatory.

If you have project and think you would benefit from a template in Vue or React, please open an issue.

# Usage
Installation is straightforward. Clone or fork this repo, then : 
```
yarn ## or npm install
yarn dev ## or npm run dev
```

Deploy on Vercel is just `vercel` or setup your repo as source.
