import { TOKEN } from "@/app/util/constants";
import { MovieType } from "@/app/util/types";
import { Card } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

export default async function page({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  const responseSimilar = await fetch(
    `https://api.themoviedb.org/3/movie/${categoryId}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await responseSimilar.json();

  return (
    <div className="max-w-[1200px] m-auto  ">
      <div>
        <p className="text-[30px] my-[32px] font-semibold">More like this</p>
      </div>
      <div className="flex flex-wrap gap-[32px] ">
        {data.results.map((movie: MovieType, index: number) => {
          return (
            <Link href={`/product/${movie.id}`}>
              <Card key={index}>
                <div>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width={229.73}
                    height={340}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <div className=" flex items-center">
                    <p>⭐️ {movie.vote_average.toFixed(1)}</p>
                    <p className="text-[#71717A] text-[12px]">/10</p>
                  </div>
                  <h2 className="text-[18px]">{movie.original_title}</h2>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
