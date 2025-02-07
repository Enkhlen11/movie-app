import { ArrowRight } from "lucide-react";
import Link from "next/link";

export async function ArrowButton({ linkUrl }: { linkUrl: string }) {
  return (
    <Link
      href={`/details/${linkUrl}`}
      className=" flex justify-between items-center"
    >
      <div className="flex max-w-[1280px] m-auto">
        <button className="flex justify-between items-center">
          <p className="font-medium  hover:border-black hover:border-b-[1px]">
            See more
          </p>
          <ArrowRight />
        </button>
      </div>
    </Link>
  );
}
