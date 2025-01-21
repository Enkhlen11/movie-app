import { TOKEN } from "./util/constants";
import { MovieType } from "./util/types";
import { Card } from "./_components/Card";
export default async function Home() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return (
    <div className="grid grid-cols-6 gap-8 px-20">
      {data.results.map((movie: MovieType, index: number) => {
        return <Card movie={movie} index={index} />;
      })}
    </div>
  );
}
