"use client";
import { useEffect, useState } from "react";
import { MovieType } from "@/app/util/types";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GenreType } from "../util/genre";
import { discoverMovies, getGenres } from "./_utils/genre-utils";
import { MovieCard } from "../_components/MovieCard";

export default function Page() {
  const [genres, setGenres] = useState<GenreType[]>();
  const [filterGenres, setFilterGenres] = useState<MovieType[]>();
  const [totalResults, setTotalResults] = useState<number>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const genresId = searchParams.get("genresId");

  useEffect(() => {
    discoverMovies(setFilterGenres, setTotalResults, genresId);
    getGenres(setGenres);
  }, [genresId]);

  return (
    <div className="max-w-[1200px] m-auto flex gap-5 mt-[34px]">
      <div>
        <p className="text-[30px] font-bold mt-[35px] mb-[25px]">
          Search filter
        </p>
        <div className="w-[387px] h-[352px] flex flex-col gap-5 ">
          <div>
            <p className="text-[24px] font-bold">Genres</p>
            <p className="text-[16px]">See list of movies by genre</p>
          </div>
          <div className="flex flex-wrap w-[387px] h-[272px]">
            <ToggleGroup
              onValueChange={(values) =>
                router.push(`/genres?genresId=${values}`)
              }
              type="multiple"
              className="flex flex-wrap justify-between items-center "
            >
              {genres?.map((data: GenreType, index: number) => {
                return (
                  <ToggleGroupItem
                    value={data.id.toString()}
                    key={index}
                    className="rounded-[9px] font-semibold text-[12px]  px-[4px] border-[1px] flex justify-center items-center mt-[4px] gap-2"
                  >
                    {data.name} <ChevronRight className="w-[16px]" />
                  </ToggleGroupItem>
                );
              })}
            </ToggleGroup>
          </div>
        </div>
      </div>
      <div className="flex ">
        <p className="text-[20px] font-semibold">{totalResults} titles</p>
        <div className="flex flex-wrap gap-[32px]">
          {filterGenres?.map((movie: MovieType, id: number) => {
            return <MovieCard movie={movie} key={id} />;
          })}
        </div>
      </div>
      {/* <Pagination /> */}
    </div>
  );
}
