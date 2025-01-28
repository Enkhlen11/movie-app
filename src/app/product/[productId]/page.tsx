import { TOKEN } from "@/app/util/constants";
import { creditType } from "@/app/util/credits";
import { trailerType } from "@/app/util/trailerType";
import { MovieType } from "@/app/util/types";
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
  const dataVideos = await responseVideos.json();
  // console.log(dataVideos);
  const dataSimilar = await similarData.json();
  console.log(dataSimilar);
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
          <img
            className="w-[290px] h-[428px]"
            src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
            alt=""
          />
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
        <div>
          {dataSimilar.slice(0, 5).map((movie: MovieType, id: number) => {
            return <div>{movie.poster_path}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
