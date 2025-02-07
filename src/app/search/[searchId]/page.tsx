"use client";

import { useEffect, useState } from "react";
import { getGenres, getMovies } from "./_utils/search-utils";
import { GenreType } from "@/app/util/genre";
import { MovieType } from "@/app/util/types";
import { MovieCard } from "@/app/_components/MovieCard";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname();
  const searchValue = pathName.split("/");
  // "/search/sonic"=> ["","search","sonic"]
  // console.log("pathName", searchValue);
  const [genres, setGenres] = useState<GenreType[] | null>(null);
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  useEffect(() => {
    getGenres(setGenres);
    getMovies(searchValue[2], setMovies);
  }, []);
  console.log("data", movies);
  return (
    <div className="flex">
      <div>
        {movies?.map((movie: MovieType, id: number) => {
          return (
            <div key={id}>
              <MovieCard movie={movie} key={id} />
            </div>
          );
        })}
      </div>
      <div>
        {genres?.map((genre: GenreType, index: number) => {
          return <div key={genre.id}>{genre.name}</div>;
        })}
      </div>
    </div>
  );
}
