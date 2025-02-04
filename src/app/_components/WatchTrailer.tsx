"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TOKEN } from "../util/constants";
import { PlayIcon } from "lucide-react";
import { TrailerType } from "../util/trailerType";
import { useEffect, useState } from "react";
function WatchTrailer({ movieId }: { movieId: number }) {
  const [key, setKey] = useState("");
  async function setMovieId() {
    const trailerVideos = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "application/json",
        },
      }
    );
    const trailer = await trailerVideos.json();
    const useTrailer = trailer.results.find((video: TrailerType) => {
      return video.type === "Trailer";
    });
    console.log(useTrailer);
    setKey(useTrailer.key);
  }

  useEffect(() => {
    setMovieId();
  }, [movieId]);
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center ">
        <p className="flex w-[40px] h-[40px] justify-center items-center ">
          <PlayIcon />
        </p>
        <p className="font-medium t-[14px]">Watch Trailer </p>
      </DialogTrigger>
      <DialogContent className="p-0 border-0 max-w-xl w-[460px] h-[300px]">
        <div>
          <iframe
            width="480"
            height="320"
            src={`https://www.youtube.com/embed/${key}`}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default WatchTrailer;
