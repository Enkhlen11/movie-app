"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MovieType } from "../util/types";

import { Play } from "lucide-react";

export function NowPlaying({ data }: { data: MovieType[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[100%] h-[600px] m-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-[100%] h-[600px]">
        {data.map((movie: MovieType, index: number) => (
          <CarouselItem key={index}>
            <Card className="w-[100%] h-[600px]">
              <CardContent className="aspect-square h-[100%] w-[100%] relative ">
                <div className="absolute text-white">
                  <p>Now playing:</p>
                  <p>{movie.original_title}</p>
                  <p>⭐️ {movie?.vote_average}</p>
                  <p>{movie.overview}</p>
                  <Button variant={`secondary`}>
                    <Play />
                    Watch Trailer
                  </Button>
                </div>
                <img
                  src={
                    `https://image.tmdb.org/t/p/` +
                    "original" +
                    `${movie.backdrop_path}`
                  }
                  className="w-[100%] h-[600px] "
                />
                <CarouselPrevious className="absolute top-1/2 translate-y-1/2 left-11" />
                <CarouselNext className="absolute top-1/2 translate-y-1/2 right-11" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
