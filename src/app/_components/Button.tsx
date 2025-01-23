import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function ArrowButton() {
  return (
    <div>
      <p className="text-[24px] font-semibold">Up coming</p>
      <Button>
        see more
        <ArrowRight />
      </Button>
    </div>
  );
}
