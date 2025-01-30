"use client";
import { TOKEN } from "@/app/util/constants";
import { GenreType } from "@/app/util/genre";
import { MovieType } from "@/app/util/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Genres() {
  const searchParams = useSearchParams();
  const genresId = searchParams.get("genresId");
  // const genresType = (await params).genresId;
  // console.log(genresType);
  console.log("genreIds", genresId)
  const [genres, setGenres] = useState();
  const [filterGenres, setFilterGenres] = useState();
  async function genre() {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const getGenres = await response.json();
    setGenres(getGenres);
  }
  async function discoverMovies() {
    const discoverMovie = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genresId}&page=1`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "applycation.json",
        },
      }
    );
    const getDiscoverMovie = await discoverMovie.json();
    setFilterGenres(getDiscoverMovie);
  }
  console.log("genres", genres);
  console.log("movies", filterGenres);

  useEffect(() => {
    discoverMovies(), genre();
  }, []);
  // const data = await genre.json();
  // const movies = data.genres;
  // // console.log("genre", data);

  // const genresData = await genrelId.json();
  // const genrelData = genresData.results;
  // console.log(genrelData);
  return (
    <div className="flex">
      <div>
        {genres?.genres.map((genre: GenreType, index: number) => {
          return (
            <div>
              <button onClick={genre.id}>{genre.name}</button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-[32px]">
        {filterGenres?.results?.map((movie: MovieType, id: number) => {
          return (
            <Link href={`/product/${movie.id}`} key={id}>
              <Card>
                <CardContent>
                  <div>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      width={229.73}
                      height={340}
                      alt=""
                    />
                    <div className="p-2">
                      <div className="flex items-center">
                        <p>⭐️ {movie.vote_average.toFixed(1)}</p>
                        <p className="text-[#71717A] text-[12px]">/10</p>
                      </div>
                      <h2 className="text-[18px] ">{movie.original_title}</h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
