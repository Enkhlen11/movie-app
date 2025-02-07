import Link from "next/link";
import { MovieType } from "../util/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const MovieCard = ({ movie }: { movie: MovieType }) => {
  return (
    <Link href={`/product/${movie.id}`}>
      <Card>
        <CardContent>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
        </CardContent>
      </Card>
    </Link>
  );
};
