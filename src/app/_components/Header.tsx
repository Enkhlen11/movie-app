import { ModeToggle } from "@/components/ui/mode-toggle";
import { Search } from "lucide-react";
import FilmLogo from "./FilmLogo";
import { Input } from "@/components/ui/input";
export function Header() {
  return (
    <div className="flex">
      <div className="flex">
        <FilmLogo />
        <p className="italic text-[16px] text-[#4338CA] font-bold ">Movie Z</p>
      </div>
      <div className="flex w-[355px] rounded-[8px] px-[12px] gap-10 items-center bg-[#71717A]">
        <Search />
        <Input />
      </div>
      <ModeToggle />
    </div>
  );
}
