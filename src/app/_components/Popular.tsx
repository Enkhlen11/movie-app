import { TOKEN } from "../util/constants";
import { MovieType } from "../util/types";
import { ArrowButton } from "./Button";
import { MovieCard } from "./MovieCard";
export default async function Popular() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return (
    <div className="max-w-[1200px] m-auto ">
      <div className="flex justify-between  items-center m-auto ">
        <p className="text-[24px] font-semibold mb-[32px]">Popular</p>
        <div className="flex justify-center items-center">
          <ArrowButton linkUrl={"popular"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-[12px]">
        {data.results?.slice(0, 10).map((movie: MovieType, index: number) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
}
