import { ModeToggle } from "@/components/ui/mode-toggle";
import { Search } from "lucide-react";
import FilmLogo from "./FilmLogo";
import { Input } from "@/components/ui/input";
import { Genre } from "./Genre";
export function Header() {
  return (
    <div className="flex max-w-[1280px] justify-center justify-between items-center m-auto ">
      <div className="flex">
        <FilmLogo />
        <p className="italic text-[16px] text-[#4338CA] font-bold ">Movie Z</p>
      </div>
      <Genre />
      <div className="flex w-[355px] rounded-[8px] px-[12px] gap-10 items-center bg-[#71717A]">
        <Search />
        <Input />
      </div>
      <ModeToggle />
    </div>
  );
}
