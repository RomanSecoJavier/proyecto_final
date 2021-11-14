db.series.deletmany({})

db.series.insertOne(
    {
        titulo:"Dragon Ball",
        temporadas:5,
        episodios_temp:[100, 200],
        personal:{
            director: ["Minoru Okazaki, Daisuke Nishio"],
            protagonista:["Goku", "Vegetta"],
            guionistas:["James Wong, Jack Ramsey"]
        },
        genero:["Animacion", "Comedia", "Accion"],
        date: new Date("1996-07-08"),
        findate:new Date("2014-08-30"),
        duracion:20,
        subtitulos:true,
        plataforma:"Youtube",
        procedencia:"Japón"
    }
)



db.series.insertMany(
    {
        titulo:"La casa de papel",
        temporadas:4,
        episodios_temp:[10, 20],
        personal:{
            director: ["Jesus Colmenar, Alex Pina"],
            protagonista:["Tokio", "Profesor","Berlin"],
            nacionalidad:["Española"],
            guionistas:["Javier Gomez Santander"]
        },
        genero:["Accion", "Drama", "Intriga"],
        date: new Date("2018-06-21"),
        duracion:40,
        subtitulos:true,
        plataforma:"Netflix",
        procedencia:"España"
    },
    {
        titulo:"Vis a Vis",
        temporadas:5,
        episodios_temp:[10,15],
        personal:{
            director: ["Alex Pina", "Daniel Ecija"],
            protagonista:["Macarena Ferreiro"],
            nacionalidad:["Española"],
            guionistas:["Daniel Ecija"]
        },
        genero:["Accion", "Drama", "Intriga"],
        date: new Date("2015-05-20"),
        findate:new Date("2014-08-30"),
        duracion:50,
        subtitulos:false,
        plataforma:"Netflix",
        procedencia:"España"
    },
    {
        titulo:"Juego de Tronos",
        temporadas:8,
        episodios_temp:[10,15],
        personal:{
            director: ["Alan Taylor", "Alex Graves","Mark Mylod"],
            protagonista:["John Nieve","Daenerys"],
            nacionalidad:["Estadounidense"],
            guionistas:["David Benioff"]
        },
        genero:["Accion", "Drama", "Intriga", "Fantasía"],
        date: new Date("2011-05-17"),
        findate:new Date("2018-06-19"),
        duracion:50,
        subtitulos:true,
        plataforma:"HBO",
        procedencia:"Estados Unidos"
    },
    {
        titulo:"Riverdale",
        temporadas:4,
        episodios_temp:[13,22],
        personal:{
            director: ["Rob Seidenglanz"],
            protagonista:["Betty Cooper"],
            nacionalidad:["Estadounidense"],
            guionistas:["Roberto Aguirre"]
        },
        genero:["Drama", "Crimen", "Misterio"],
        date: new Date("2017-01-26"),
        duracion:45,
        subtitulos:true,
        plataforma:"Netflix",
        procedencia:"Estados Unidos"
    },
    {
        titulo:"Rick y Morty",
        temporadas:4,
        episodios_temp:[10],
        personal:{
            director: ["Pete Michels"],
            protagonista:["Rick","Morty"],
            guionistas:["Dan Harmon", "Justin Roiland"]
        },
        genero:["Violencia", "Comedia", "Ciencia Ficcion"],
        date: new Date("2013-12-02"),
        duracion:20,
        subtitulos:false,
        plataforma:"Netflix",
        procedencia:"Estados Unidos"
    },
    {
        titulo:"Peaky Blinders",
        temporadas:4,
        episodios_temp:[6],
        personal:{
            director: ["David Caffrey"],
            protagonista:["Tomas Shelby"],
            nacionalidad:["Ingles"],
            guionistas:["Steven Knight"]
        },
        genero:["Violencia", "Crimen", "Suspense"],
        date: new Date("2013-09-12"),
        duracion:60,
        subtitulos:false,
        plataforma:["Netflix", "Amazon Prime"],
        procedencia:"Inglaterra"
    },
    {
        titulo:"The good doctor",
        temporadas:4,
        episodios_temp:[18,20],
        personal:{
            director: ["Jaume Balagueró"],
            protagonista:["Dr.Shaun"],
            nacionalidad:["Estadounidense"],
            guionistas:["David Shore"]
        },
        genero:["Ciencia", "Drama", "intriga"],
        date: new Date("2015-12-07"),
        duracion:40,
        subtitulos:false,
        plataforma:"Amazon prime",
        procedencia:"Estados Unidos"
    },
    {
        titulo:"Lucifer",
        temporadas:6,
        episodios_temp:[10,15],
        personal:{
            director: ["Austin Jefferson"],
            protagonista:["Lucifer"],
            nacionalidad:["Estadounidense"],
            guionistas:["Chloe Decker", "Michael Mcguire", "John Philips" ]
        },
        genero:["Fantasia", "Misterio", "Comedia dramatica"],
        date: new Date("2017-05-22"),
        findate: new Date("2021-07-23"),
        subtitulos:true,
        plataforma:"Fox, Netflix",
        procedencia:"Estados Unidos"
    },
    {
        titulo:"Inazuma Eleven",
        temporadas:3,
        episodios_temp:[30],
        personal:{
            director: ["Samuel De Luque"],
            protagonista:["Mark Evans"],
            guionistas:["Nathan Drake"]
        },
        genero:["Fantasia", "Deporte", "Comedia", "Animación"],
        date: new Date("2008-08-30"),
        duracion:20,
        subtitulos:false,
        plataforma:["Youtube", "Netflix"],
        procedencia:"Japon"
    },
    {
        titulo:"Vikingos",
        temporadas:6,
        episodios_temp:[10,20],
        personal:{
            director: ["Philip Jhonson"],
            protagonista:["Ragnar", "Ivar"],
            nacionalidad:["Daneses", "Noruegos"],
            guionistas:["Peter Parker", "Justin Holland"]
        },
        genero:["Violencia", "Ciencia Ficcion", "Historia"],
        date: new Date("2013-03-24"),
        findate: new Date("2020-12-30"),
        duracion:50,
        subtitulos:true,
        plataforma:["Netflix", "Amazon prime"],
        procedencia:"Dinamarca"
    },
)