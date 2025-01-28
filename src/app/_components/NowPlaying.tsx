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
      className="w-[100%] h-[600px] m-auto "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-[100%] h-[600px]">
        {data.map((movie: MovieType, index: number) => (
          <CarouselItem key={index}>
            <Card className="w-[100%] h-[600px]">
              <CardContent className=" flex items-center h-[100%] w-[100%] relative flex-col">
                <img
                  src={
                    `https://image.tmdb.org/t/p/` +
                    "original" +
                    `${movie.backdrop_path}`
                  }
                  className="w-[100%] h-[600px] relative "
                />
                <div className="absolute text-white left-[140px] bottom-[100px]">
                  <div className="flex flex-col gap-10">
                    <div>
                      <p className="text-[16px]">Now playing:</p>
                      <p className="text-[36px] font-bold">
                        {movie.original_title}
                      </p>
                      <div className="flex items-center">
                        <p className="text-[18px] font-semibold ">
                          ⭐️ {movie?.vote_average.toFixed(1)}
                        </p>
                        <p className="text-[16px] text-[#71717A]">/10</p>{" "}
                      </div>
                    </div>
                    <div>
                      <p className="w-[302px] ">{movie.overview}</p>
                    </div>
                    <Button className="text-[#18181B]" variant={`secondary`}>
                      <Play />
                      Watch Trailer
                    </Button>
                  </div>
                </div>
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
