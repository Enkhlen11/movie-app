import { TOKEN } from "../util/constants";
import { MovieType } from "../util/types";
import { ArrowButton } from "./Button";
import { MovieCard } from "./MovieCard";

export default async function UpComing() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return (
    <div className="max-w-[1200px] m-auto mt-[32px]">
      <div className="flex justify-between  items-center m-auto mb-[32px]">
        <p className="text-[24px] font-semibold ">Up coming</p>
        <ArrowButton linkUrl={"upcoming"} />
      </div>
      <div className=" flex m-auto flex-wrap gap-[12px] mb-[32px]">
        {data.results?.slice(0, 10).map((movie: MovieType, index: number) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
}
