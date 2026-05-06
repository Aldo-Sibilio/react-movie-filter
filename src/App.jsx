import { useState, useEffect } from "react";

function App() {

  // array film
  const movies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" }
  ];

  // stato select
  const [selectedGenre, setSelectedGenre] = useState("");

  // stato film filtrati
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(function () {

    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(function (movie) {
        return movie.genre === selectedGenre;
      });

      setFilteredMovies(filtered);
    }

  }, [selectedGenre]);

  return (
    <div>

      <h1>Lista Film</h1>

      <select
        value={selectedGenre}
        onChange={function (e) {
          setSelectedGenre(e.target.value);
        }}
      >
        <option value="">Tutti</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
            <ul>
        {filteredMovies.map(function (movie, index) {
          return (
            <li key={index}>
              {movie.title} - {movie.genre}
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default App;