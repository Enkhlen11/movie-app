import { GenreType } from "@/app/util/genre";
import { TOKEN } from "@/app/util/constants";
import { MovieType } from "@/app/util/types";

export async function getGenres(setGenres: (_val: GenreType[]) => void) {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  setGenres(data.genres);
}
export async function getMovies(
  value: string,
  setMovies: (_val: MovieType[]) => void
): Promise<void> {
  const setValue = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await setValue.json();
  setMovies(data.results);
}
