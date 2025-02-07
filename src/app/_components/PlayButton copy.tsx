import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TOKEN } from "../util/constants";
import { PlayIcon } from "lucide-react";
import { TrailerType } from "../util/trailerType";
async function PlayButton({ movieId }: { movieId: number }) {
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
  // console.log("video", trailer);
  const useTrailer = trailer.results.find((video: TrailerType) => {
    return video.type === "Trailer";
  });
  // console.log(trailerVideos);
  return (
    <Dialog>
      <DialogTrigger className="flex absolute ">
        <p className="flex border-[1px] rounded-full   w-[40px] h-[40px] justify-center items-center">
          <PlayIcon />
        </p>
        <p>Play trailer </p>
        <p>1:30</p>
      </DialogTrigger>
      <DialogContent className="p-0 border-0 max-w-xl w-[460px] h-[300px]">
        <div>
          <iframe
            width="480"
            height="320"
            src={`https://www.youtube.com/embed/${useTrailer.key}`}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default PlayButton;
