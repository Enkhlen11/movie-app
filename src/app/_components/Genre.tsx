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
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/router";

export async function Genre() {
  const genre = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
}
const data = await genre.json();
const movies = data.genres;
console.log("genre", data);
const router = useRouter();
const style={color:router.}

const changeHandler = (values: string[]) => {router.push(`/genres?${data.id}`);}
    
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
          <ToggleGroup type="single" onValueChange={changeHandler}>
            {movies.map((data: GenreType, index: number) => {
              return (
                <ToggleGroupItem value={data.id.toString()}>
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
};
