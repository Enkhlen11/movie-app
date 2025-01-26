import { TOKEN } from "../util/constants";
import { MovieType } from "../util/types";
import Image from "next/image";
import Link from "next/link";
export default async function UpComing() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Autorization: `Bearer${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  //   console.log(data);
  return (
    <div className="max-w-[1280px] flex m-auto flex-wrap gap-[32px] mb-[32px]">
      {data.results?.slice(0, 10).map((movie: MovieType, index: number) => {
        ///cheejil
        return (
          <Link href={`/product/${movie.id}`} key={index}>
            <div
              key={index}
              className="w-[230px] h-[439px] flex flex-col p-2 items-start rounded-lg bg-gray-800 "
            >
              <div className="">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  width={229.73}
                  height={340}
                  alt=""
                />
                <div className="flex">
                  <img src="star.svg" alt="" />

                  {/* <p>{formatVoteAverage(movie.vote_average)}</p> */}
                  <p>/10</p>
                </div>
                <h2>{movie.original_title}</h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
