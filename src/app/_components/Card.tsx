import Image from "next/image";
import { MovieType } from "../util/types";

export const Card = ({ movie, index }: { movie: MovieType; index: number }) => {
  return (
    <div className=" w-[230px]  " key={index}>
      <Image
        width={1000}
        height={1000}
        className="w-[100%]"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
      />
      <div className="">
        <p>⭐️ {movie?.vote_average}</p>
        <p>{movie?.original_title}</p>
      </div>
    </div>
  );
};
