import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function SimilarMore({ linkUrl }: { linkUrl: string }) {
  return (
    <Link href={`/category/${linkUrl}`}>
      <Button
        variant={"secondary"}
        className="flex justify-between items-center mt-8 max-w-[1280px] m-auto "
      >
        <p>see more</p>
        <ArrowRight />
      </Button>
    </Link>
  );
}
