import { Button } from "@/components/ui/button";
import { ArrowRight, Link2 } from "lucide-react";
import Link from "next/link";
export function ArrowButton() {
  return (
    <div className="flex justify-between items-center mt-8 max-w-[1280px] m-auto ">
      <p className="text-[24px] font-semibold">Popular</p>

      <Button>
        see more
        <ArrowRight />
      </Button>
    </div>
  );
}
