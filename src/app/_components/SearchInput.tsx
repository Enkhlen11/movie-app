"use client";
import { Input } from "@/components/ui/input";
import { ArrowRight, SearchIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { TOKEN } from "../util/constants";
import { MovieType } from "../util/types";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const [movies, setMovies] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const searchValue = async () => {
      const setValue = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await setValue.json();

      setMovies(data.results);
    };
    searchValue();
  }, [value]);

  const searchHandler = (value: string) => {
    setValue(value);
  };
  // console.log("value", value);
  // console.log("data", movies);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Popover open={isActive} onOpenChange={handleClick}>
      <PopoverTrigger className=" flex w-[355px] rounded-[8px] px-[12px] gap-10 items-center bg-[#fffff] border-[1px] focus:border-black ">
        <SearchIcon className="text-muted-foreground" />
        <Input
          value={value}
          onChange={(e) => searchHandler(e.target.value)}
          placeholder="Search"
          className=" border-none px-3 focus:outline "
        />
      </PopoverTrigger>
      <PopoverContent
        onClick={handleClick}
        className="w-[553px]  flex flex-col justify-center items-center gap-5"
      >
        {movies.slice(0, 5).map((movie: MovieType, index: number) => {
          return (
            <Link key={index} href={`/product/${movie.id}`}>
              <Card className="w-[537px] h-[100px] p-2 border-b-1 rounded-[8px] bg-white hover:bg-[#edebeb] ">
                <CardContent key={index}>
                  <div className="flex">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                      width={229.73}
                      height={340}
                      alt=""
                      className="w-[67px] h-[100px]"
                    />
                    <div className="p-2">
                      <h2 className="text-[20px] font-semibold">
                        {movie.title}
                      </h2>
                      <div className="flex items-center mb-[4px]">
                        <p>⭐️ {movie.vote_average.toFixed(1)}</p>
                        <p className="text-[#71717A] text-[12px]">/10</p>
                      </div>
                      <div className="flex gap-[250px]">
                        <p className="w-[90px]">{movie.release_date}</p>
                        <button className="flex justify-between items-center">
                          <p className="font-medium  hover:border-black hover:border-b-[1px]">
                            See more
                          </p>
                          <ArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
        <Link href={`/search/${value}`}>
          <p className="font-medium">See all results for {value}</p>
        </Link>
      </PopoverContent>
    </Popover>
  );
};
export default SearchInput;
