import { TOKEN } from "@/app/util/constants";
import { MovieType } from "@/app/util/types";
import Image from "next/image";

export default async function page1({
  params: { produntId },
}: {
  params: { produntId: string };
}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${produntId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseStar = await fetch(
    `https://api.themoviedb.org/3/movie/${produntId}/credits?language=en-US`,
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
        <h1>{data.original_title}</h1>
        <h2>{data.release_date}</h2>
        {/* <p>{data.adult ? "R" : "PG"}</p>
        <p>Rating</p>
        <p>{formatVoteAverage(data.runtime)}</p>

        <p>{formatVoteAverage2(data.vote_average)}</p> */}
        <img
          className="w-[290px] h-[428px]"
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          alt=""
        />

        <p>{data.overview}</p>
      </div>
    </div>
  );
}
