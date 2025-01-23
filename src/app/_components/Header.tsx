import { ModeToggle } from "@/components/ui/mode-toggle";
import { Search } from "lucide-react";
import FilmLogo from "./FilmLogo";
export function Header() {
  return (
    <div className="flex">
      <div className="flex">
        <FilmLogo />
        <p className="text-[16px] text-[#4338CA] font-bold ">Movie Z</p>
      </div>
      <div className="flex w-[355px] rounded-[8px] px-[12px] gap-10 items-center bg-[#71717A]">
        <Search />{" "}
        <input className=" outline-none" type="text" placeholder="Search" />
      </div>
      <ModeToggle />
    </div>
  );
}
