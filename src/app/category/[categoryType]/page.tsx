import { TOKEN } from "@/app/util/constants";
import { MovieType } from "@/app/util/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Page = async ({
  params,
}: {
  params: Promise<{ categoryType: string }>;
}) => {
  const categoryType = (await params).categoryType;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${categoryType}?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    }
  );
  const dataAll = await data.json();
  console.log(dataAll);
  return <div>category:{categoryType}</div>;
};

export default Page;
