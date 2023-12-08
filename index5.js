const filmListesi = [{
        name: "Matrix",
        year: 1999,
        producer: "Lana Wachowski, Lilly Wachowski",
        species: ["Bilim Kurgu", "Aksiyon"],
        img: "matrix.jpg"
    },
    {
        name: "The Shawshank Redemption",
        year: 1994,
        producer: "Frank Darabont",
        species: ["Drama"],
        img: "TheShawshankRedemption.jpg"
    },
    {
        name: "Inception",
        year: 2010,
        producer: "Christopher Nolan",
        species: ["Bilim Kurgu", "Gerilim"],
        img: "Inception.jpg"
    },

    {
        name: "Pulp Fiction",
        year: 1994,
        producer: "Quentin Tarantino",
        species: ["Suç", "Drama"],
        img: "PulpFiction.jpg"
    },

    {
        name: "Forrest Gump",
        year: 1994,
        producer: "Robert Zemeckis",
        species: ["Drama", "Romantik"],
        img: "ForrestGump.jpg"
    },
    {
        name: "The Dark Knight",
        year: 2008,
        producer: "Christopher Nolan",
        species: ["Aksiyon", "Drama"],
        img: "TheDarkKnight.jpg"
    },
    {
        name: "Forrest Gump",
        year: 1994,
        producer: "Robert Zemeckis",
        species: ["Drama", "Romantik"],
        img: "ForrestGump.jpg"
    }, {
        name: "The Dark Knight",
        year: 2008,
        producer: "Christopher Nolan",
        species: ["Aksiyon", "Drama"],
        img: "TheDarkKnight.jpg"
    },

];






const newContentdata = filmListesi.map(film => {
    const speciesText = film.species && Array.isArray(film.species) ? film.species.join(" / ") : "N/A";
    return ` 
    <div class="card" style="width: 18rem">
    <img src="${film.img}" />
    <div class="card-content">
      <h3>${film.name}</h3>
      <p>${film.year}</p>
      <p>${film.producer}</p>
      <p>${speciesText}</p>
    </div>
  </div>`;

}).join("");

console.log(newContentdata);


const cardList = document.querySelector("#cardList");
console.log(cardList);
cardList.innerHTML = newContentdata;