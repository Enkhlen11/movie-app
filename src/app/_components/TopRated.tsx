import Link from "next/link";
import { TOKEN } from "../util/constants";
import { MovieType } from "../util/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowButton } from "./Button";
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
  // console.log(datas);
  return (
    <div className="max-w-[1200px] m-auto mb-[32px]">
      <div className="flex justify-between  items-center">
        <p className="text-[24px] font-semibold ">Top rated</p>
        <div className="flex">
          <ArrowButton linkUrl={"top_rated"} />
        </div>
      </div>
      <div className=" flex m-auto flex-wrap gap-[32px] mb-[32px]">
        {datas.results?.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <Link href={`/product/${movie.id}`} key={index}>
              <Card>
                <CardContent key={index}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    width={229.73}
                    height={340}
                    alt=""
                  />
                  <div className="p-2">
                    <div className="flex items-center">
                      <p>⭐️ {movie.vote_average.toFixed(1)}</p>
                      <p className="text-[#71717A] text-[12px]">/10</p>
                    </div>
                    <h2 className="text-[18px]">{movie.original_title}</h2>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
