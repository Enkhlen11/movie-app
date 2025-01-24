import { TOKEN } from "./util/constants";
import { MovieType } from "./util/types";
import { MovieCard } from "./_components/MovieCard";
import response from "./util/response";
import { Header } from "./_components/Header";
import { ArrowButton } from "./_components/Button";
import { NowPlaying } from "./_components/NowPlaying";

export default async function Home() {
  const popular = await response("/movie/popular?language=en-US&page=1");
  const upComing = await response("/movie/upcoming?language=en-US&page=1");

  return (
    <div>
      <Header />
      <NowPlaying />
      <ArrowButton />
      <div className="grid grid-cols-6 gap-x-40 gap-10 max-w-[1280px] m-auto ">
        {upComing.results.map((movie: MovieType, index: number) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
      <div className="flex justify-between">
        <p className="text-[24px] font-semibold">Popular </p>
        {/* <Button>
          see more <ArrowRight />
        </Button> */}
      </div>
      <div className="grid grid-cols-6 gap-x-40 gap-10 max-w-[1280px] m-auto ">
        {popular.results.map((movie: MovieType, index: number) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
}
