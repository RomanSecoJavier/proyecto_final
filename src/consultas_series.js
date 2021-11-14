/*
Quiero ver una serie que no tenga mas de 5 temporadas, en la que salgan actores españoles y que tenga subtitulos
*/
db.series.find({
    $and:{
    temporadas:{$lte:5},
    personal:{nacionalidad:{$eq:"Española"}},
    
    }
})