import { TOKEN } from "@/app/util/constants";
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
  console.log(dataStar);
  return (
    //style
    <div>
      <div>
        <h1 className="text-[24px], font-semibold">{data.original_title}</h1>
        <h2 className="text-[14px]">{data.release_date}</h2>
        {/* <p>{data.adult ? "R" : "PG"}</p>
        <p>Rating</p>
        <p>{formatVoteAverage(data.runtime)}</p>

        <p>{formatVoteAverage2(data.vote_average)}</p> */}
        <img
          className="w-[290px] h-[428px]"
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          alt=""
        />
        <div className="flex flex-col  gap-[5px]">
          <p>kino janar turul baina </p>
          <p className="text-[16px]">{data.overview}</p>
          <h2 className="border-b-[1px] text-[16px] font-bold">Director</h2>
          <h2 className="border-b-[1px] text-[16px] font-bold">Writers</h2>
          <h2 className="border-b-[1px] text-[16px] font-bold">Stars</h2>
        </div>
      </div>
    </div>
  );
}
