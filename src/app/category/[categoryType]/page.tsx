import { ArrowButton } from "@/app/_components/Button";
import { TOKEN } from "@/app/util/constants";
import { MovieType } from "@/app/util/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Page = async ({
  params,
}: {
  params: Promise<{ categoryType: string }>;
}) => {
  const categoryType = (await params).categoryType;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${categoryType}?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    }
  );
  const dataAll = await data.json();
  console.log(dataAll);
  return (
    <div className="max-w-[1280px] m-auto ">
      <div className="flex justify-between  items-center m-auto">
        <p className="text-[24px] font-semibold ">Up coming</p>

        <ArrowButton linkUrl={"upcoming"} />
      </div>
      <div className=" flex m-auto flex-wrap gap-[32px] mb-[32px]">
        {dataAll.results
          ?.slice(0, 10)
          .map((movie: MovieType, index: number) => {
            return (
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
                        <h2 className="text-[18px] ">{movie.original_title}</h2>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Page;
