import { TOKEN } from "./util/constants";
import { MovieType } from "./util/types";
import response from "./util/response";
import { Header } from "./_components/Header";
import { ArrowButton } from "./_components/Button";
import { NowPlaying } from "./_components/NowPlaying";
import Popular from "./_components/Popular";
import Footer from "./_components/Footer";
import UpComing from "./_components/UpComing";
export default async function Home() {
  // const popular = await response("/movie/popular?language=en-US&page=1");
  const upComing = await response("/movie/upcoming?language=en-US&page=1");
  const topRated = await response("/movie/top_rated?language=en-US&page=1");
  return (
    <div>
      <Header />
      <NowPlaying />
      <ArrowButton />
      <UpComing />
      <Popular />
      <Footer />
      top rated bich
      {/* <div className="grid grid-cols-6 gap-x-40 gap-10 max-w-[1280px] m-auto ">
        {upComing.results.map((movie: MovieType, index: number) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div> */}
      {/* <div className="flex justify-between">
        <p className="text-[24px] font-semibold">Popular </p>
      </div> */}
      {/* <div className="grid grid-cols-6 gap-x-40 gap-10 max-w-[1280px] m-auto ">
        {popular.results.map((movie: MovieType, index: number) => {
          console.log(popular);
          return <MovieCard movie={movie} key={index} />;
        })}
      </div> */}
      {/* <div className="grid grid-cols-6 gap-x-40 gap-10 max-w-[1280px] m-auto ">
        {topRated.results.map((movie: MovieType, index: number) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div> */}
    </div>
  );
}
