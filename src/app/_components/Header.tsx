import { ModeToggle } from "@/components/ui/mode-toggle";
import { Search } from "lucide-react";
import FilmLogo from "./FilmLogo";
import { Input } from "@/components/ui/input";
import { Genre } from "./Genre";
export function Header() {
  return (
    <div className="flex max-w-[1280px]  justify-between items-center m-auto ">
      <div className="flex gap-1">
        <FilmLogo />
        <p className="italic text-[16px] text-[#4338CA] font-bold ">Movie Z</p>
      </div>
      <div className="flex gap-[12px]">
        <Genre />
        <div className="flex w-[355px] rounded-[8px] px-[12px] gap-10 items-center bg-[#fffff] border-[1px]">
          <Search />
          <Input
            placeholder="Search"
            className="border-none px-3  focus:outline-none"
          />
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}
