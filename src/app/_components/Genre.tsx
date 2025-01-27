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
export async function Genre() {
  const genre = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await genre.json();
  // console.log("genre", data);
  const movies = data.genres;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex ">
        <ChevronDown />
        Genre
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-[577px] h-[333px] ">
        <DropdownMenuLabel className="text-[24px] font-semibold ">
          Genres
        </DropdownMenuLabel>
        <p>See lists of movies by genre</p>
        <div className="flex flex-wrap border-t-2 gap-3 pt-[4px]">
          {movies.map((data: GenreType, index: number) => {
            return (
              <div className="">
                <div className="rounded-[9px] border-[1px] flex justify-center items-center p-[5px] ">
                  {data.name} <ChevronRight className="w-[20px]" />
                </div>
              </div>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
