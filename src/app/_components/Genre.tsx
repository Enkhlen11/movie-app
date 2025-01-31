"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { TOKEN } from "../util/constants";
import { MovieType } from "../util/types";
import { GenreType } from "../util/genre";
import { ChevronRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Genre() {
  const [movies, setMovies] = useState<GenreType[]>();
  useEffect(() => {
    const getData = async () => {
      const genre = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await genre.json();
      setMovies(data.genres);
    };
    getData();
  }, []);

  // const movies = data.genres;
  // console.log("genre", data);
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-[97px] h-[36px] px-4 py-2 border-[1px] rounded-md text-[14px] gap-2">
        <ChevronDown className="w-[16px]" />
        Genre
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-[577px] h-[333px] ">
        <DropdownMenuLabel className="text-[24px] font-semibold ">
          Genres
        </DropdownMenuLabel>
        <p className="mb-[4px] text-[16px]">See lists of movies by genre</p>
        <div className="flex flex-wrap border-t-2 gap-3 pt-[4px]">
          <ToggleGroup type="multiple" className="flex flex-wrap">
            {movies?.map((data: GenreType, index: number) => {
              return (
                <ToggleGroupItem
                  onClick={() => router.push(`/genres?genresId=${data?.id}`)}
                  value={data.id.toString()}
                >
                  <div key={index}>
                    <div className="rounded-[9px] font-semibold text-[12px]  px-[4px] border-[1px] flex justify-center items-center mt-[4px] gap-2">
                      {data.name} <ChevronRight className="w-[16px]" />
                    </div>
                  </div>
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
