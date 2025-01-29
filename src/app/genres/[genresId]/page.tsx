import { TOKEN } from "@/app/util/constants";

const Genres = async ({
  params,
}: {
  params: Promise<{ generesType: string }>;
}) => {
  const genresType = (await params).generesType;
  const genre = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await genre.json();
  // console.log("genre", data);
  const movies = data.genres;
  return <div>{movies.id}</div>;
};
