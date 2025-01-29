import { TOKEN } from "./util/constants";
import { NowPlaying } from "./_components/NowPlaying";
import Popular from "./_components/Popular";
import UpComing from "./_components/UpComing";
import TopRated from "./_components/TopRated";
export default async function Home() {
  // const popular = await response("/movie/popular?language=en-US&page=1");
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const datas = await response.json();
  // console.log("datas", datas);
  return (
    <div>
      <NowPlaying data={datas.results} />
      <UpComing />
      <Popular />
      <TopRated />
    </div>
  );
}
