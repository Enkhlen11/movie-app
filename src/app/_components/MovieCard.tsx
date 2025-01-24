import Image from "next/image";
import { MovieType } from "../util/types";
import { Card, CardContent } from "@/components/ui/card";
export const MovieCard = ({ movie }: { movie: MovieType }) => {
  return (
    <Card className=" w-[230px] rounded-lg">
      <CardContent>
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
      </CardContent>
    </Card>
  );
};
