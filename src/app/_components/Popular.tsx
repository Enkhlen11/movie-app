import { TOKEN } from "../util/constants";
import { MovieType } from "../util/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowButton } from "./Button";
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
  // console.log(data); /// cheejil
  return (
    <div className="max-w-[1280px] m-auto mb-[32px]">
      <div className="flex justify-between  items-center m-auto">
        <p className="text-[24px] font-semibold ">Popular</p>
        <p className="flex justify-center items-center">
          <ArrowButton linkUrl={"populer"} />
        </p>
      </div>
      <div className="flex flex-wrap gap-[32px]">
        {data.results?.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <div>
              <Link href={`/product/${movie.id}`} key={index}>
                <Card>
                  <CardContent key={index}>
                    <div>
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
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
