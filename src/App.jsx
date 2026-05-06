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