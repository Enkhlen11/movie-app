"use client";
import { useEffect, useState } from "react";
type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export default function Home() {
  const [movies, setMovies] = useState<MovieType[] | undefined>();

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODk2ZmM0MDAyNjgzOGYxMDgxODE3ZTkzYzNhMDM4ZSIsIm5iZiI6MTczNzM0MjI0Ny4xOTEsInN1YiI6IjY3OGRiZDI3NjhlMGQ4NzM2MzZlMWExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wl3C8841nWh_9RLFjnKLRMH2ZXaPdU46spcQ1YCnWtk";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.results) {
      setMovies(data.results);
    }
  };

  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);
  console.log({ movies });
  return (
    <div>
      {movies?.map((movie, index) => {
        return (
          <div key={index}>
            hello: {movie?.original_title}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
