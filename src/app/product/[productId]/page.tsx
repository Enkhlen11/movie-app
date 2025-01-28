import { TOKEN } from "@/app/util/constants";
import { creditType } from "@/app/util/credits";
import { trailerType } from "@/app/util/trailerType";
import { MovieType } from "@/app/util/types";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default async function page1({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${productId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseStar = await fetch(
    `https://api.themoviedb.org/3/movie/${productId}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseVideos = await fetch(
    `https://api.themoviedb.org/3/movie/${productId}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    }
  );
  const similarData = await fetch(
    ` https://api.themoviedb.org/3/movie/${productId}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    }
  );
  const genrelist = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  // console.log("genre", data);
  // function formatVoteAverage(vote: number) {
  //   const hours = Math.floor(vote / 60);
  //   const minutes = vote % 60;
  //   return `${hours}h ${minutes}min`;
  // }

  // function formatVoteAverage2(vote: number) {
  //   return (Math.floor(vote * 10) / 10).toString().replace(".", ".");
  // }

  const data = await response.json();
  console.log(data);
  const dataStar = await responseStar.json();
  // console.log(dataStar);
  const dataVideos = await responseVideos.json();
  // console.log(dataVideos);
  const dataSimilar = await similarData.json();
  // console.log(dataSimilar);
  const dataList = await genrelist.json();
  // console.log(dataList);
  return (
    //style
    <div className="max-w-[1280px] m-auto">
      <div className="w-[1280px] ">
        <h1 className="text-[24px], font-semibold">{data.original_title}</h1>
        <h2 className="text-[14px]">{data.release_date}</h2>
        {/* <p>{data.adult ? "R" : "PG"}</p>
        <p>Rating</p>
        <p>{formatVoteAverage(data.runtime)}</p>

        <p>{formatVoteAverage2(data.vote_average)}</p> */}
        <div className="flex gap-8">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            className="w-[290px] h-[428px]"
            width={229.73}
            height={340}
            alt=""
          />
          {/* <p>{dataList.}</p> */}
          <div>
            <div>
              <iframe
                className="w-[760px] h-[428px]"
                width="874"
                height="492"
                src={`https://www.youtube.com/embed/${dataVideos.results[0].key}`}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-[5px]">
          <p className="">kino janar turul baina </p>
          <p className="text-[16px] w-[100%]">{data.overview}</p>
          <div className="border-b-[1px] text-[16px]  flex gap-16">
            <p className="text-[16px] w-[64px] font-bold">Director</p>
            <p>
              {dataStar.cast
                .slice(0, 1)
                .map((movie: creditType, id: number) => {
                  return <div>{movie.name}</div>;
                })}
            </p>
          </div>
          <div>
            <h2 className="border-b-[1px] text-[16px] flex gap-16">
              <p className="text-[16px] w-[64px] font-bold"> Writers</p>
              {dataStar.crew
                .slice(0, 1)
                .map((movie: creditType, id: number) => {
                  return <div>{movie.name}</div>;
                })}
            </h2>
          </div>
          <div>
            <h2 className="border-b-[1px] text-[16px]  flex gap-16">
              <p className="w-[64px] font-bold">Stars</p>
              {dataStar.cast
                .slice(0, 5)
                .map((movie: creditType, index: number) => {
                  return <div>·{movie.name}</div>;
                })}
            </h2>
          </div>
        </div>
        <div className="flex gap-8 mt-20 mb-20">
          {dataSimilar.results
            .slice(0, 5)
            .map((movie: MovieType, id: number) => {
              return (
                <Card>
                  <div className="">
                    <div className="">
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
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
