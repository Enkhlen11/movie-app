import { ArrowButton } from "@/app/_components/Button";
import PlayButton from "@/app/_components/PlayButton";
import SimilarMore from "@/app/_components/SimilarSeeMore";
import { TOKEN } from "@/app/util/constants";
import { CreditType } from "@/app/util/credits";
import { GenreType } from "@/app/util/genre";
import { MovieType } from "@/app/util/types";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
  // const responseVideos = await fetch(
  //   `https://api.themoviedb.org/3/movie/${productId}/videos?language=en-US`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${TOKEN}`,
  //       "Content-type": "application/json",
  //     },
  //   }
  // );
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
  // console.log(data);
  const dataStar = await responseStar.json();
  // console.log(dataStar);
  // const dataVideos = await responseVideos.json();
  // console.log(dataVideos);
  const dataSimilar = await similarData.json();
  // console.log(dataSimilar);
  const dataList = await genrelist.json();
  // console.log(dataList);
  return (
    //style
    <div className="w-[1280px] m-auto">
      <h1 className="text-[24px] font-semibold">{data.original_title}</h1>
      <h2 className="text-[14px]">{data.release_date}</h2>
      {/* <p>{data.adult ? "R" : "PG"}</p>
      <p>Rating</p>
      <p>{formatVoteAverage(data.runtime)}</p>

      <p>{formatVoteAverage2(data.vote_average)}</p> */}
      <div className="flex gap-8 relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="w-[290px] h-[428px]"
          width={229.73}
          height={340}
          alt=""
        />
        <Image
          src={
            `https://image.tmdb.org/t/p/` + "original" + `${data.backdrop_path}`
          }
          className="w-[760px] h-[428px]"
          width={1000}
          height={1000}
          alt=""
        />
        {/* <div>
          <iframe
            className="w-[760px] h-[428px]"
            width="874"
            height="492"
            src={`https://www.youtube.com/embed/${dataVideos.results[0].key}`}
          ></iframe>
        </div> */}
        <div className="absolute ">
          <PlayButton movieId={productId} />
        </div>
      </div>
      <div>
        <div className="flex gap-8 my-[20px]">
          {data.genres.map((genre: GenreType, index: number) => {
            return (
              <div
                key={index}
                className="border-[1px] rounded-xl px-4 font-semibold"
              >
                {genre.name}
              </div>
            );
          })}
        </div>
        <p className="text-[16px] w-[100%]">{data.overview}</p>
        <div className="border-b-[1px] text-[16px]  flex gap-16">
          <p className="text-[16px] w-[64px] font-bold">Director</p>
          <div>
            {dataStar.cast.slice(0, 1).map((movie: CreditType, id: number) => {
              return (
                <div key={id} className="text-[16px]">
                  {movie.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-b-[1px] text-[16px] flex gap-16">
          <p className="text-[16px] w-[64px] font-bold"> Writers</p>
          <div>
            {dataStar.crew.slice(0, 1).map((movie: CreditType, id: number) => {
              return (
                <div key={id} className="text-[16px]">
                  {movie.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-b-[1px] text-[16px]  flex gap-16">
          <p className="w-[64px] font-bold">Stars</p>
          <div>
            {dataStar.cast
              .slice(0, 5)
              .map((movie: CreditType, index: number) => {
                return (
                  <div key={index} className="text-[16px]">
                    · {movie.name}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-[24px] font-semibold">More like this</p>
          <SimilarMore linkUrl={productId} />
        </div>
        <div className="flex gap-8 mt-20 mb-20">
          {dataSimilar.results
            .slice(0, 5)
            .map((movie: MovieType, id: number) => {
              return (
                <Link href={`/product/${movie.id}`}>
                  <Card key={id}>
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
    </div>
  );
}
