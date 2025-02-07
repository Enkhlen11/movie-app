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

export async function discoverMovies(
  setFilterGenres: (_val: MovieType[]) => void,
  setTotalResults: (_val: number) => void,
  genresId: string | null
) {
  const discoverMovie = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genresId}&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "applycation.json",
      },
    }
  );
  const data = await discoverMovie.json();
  setFilterGenres(data.results);
  setTotalResults(data.total_results);
}
