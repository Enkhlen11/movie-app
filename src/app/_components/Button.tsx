import { Button } from "@/components/ui/button";
import { ArrowRight, Link2 } from "lucide-react";
import Link from "next/link";
import { TOKEN } from "../util/constants";

export async function ArrowButton({ linkUrl }: { linkUrl: string }) {
  return (
    <Link href={`/category/${linkUrl}`}>
      <div className="flex justify-between items-center mt-8 max-w-[1280px] m-auto ">
        <p className="text-[24px] font-semibold"></p>
        <Button variant={"secondary"}>
          see more
          <ArrowRight />
        </Button>
      </div>
    </Link>
  );
}
