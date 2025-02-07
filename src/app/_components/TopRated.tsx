import Link from "next/link";
import { TOKEN } from "../util/constants";
import { MovieType } from "../util/types";
import Image from "next/image";
import { ArrowButton } from "./Button";
import { MovieCard } from "./MovieCard";
export default async function TopRated() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const datas = await response.json();

  return (
    <div className="max-w-[1200px] m-auto mt-[32px]">
      <div className="flex justify-between  items-center mb-[32px]">
        <p className="text-[24px] font-semibold ">Top rated</p>
        <div className="flex">
          <ArrowButton linkUrl={"top_rated"} />
        </div>
      </div>
      <div className=" flex m-auto flex-wrap gap-[12px] mb-[32px]">
        {datas.results?.slice(0, 10).map((movie: MovieType, index: number) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
}
