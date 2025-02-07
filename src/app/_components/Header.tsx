import ThemeChanger from "@/components/ui/themeChanger";
import FilmLogo from "./FilmLogo";
import Link from "next/link";
import { Genre } from "./Genre";
import SearchInput from "./SearchInput";

export function Header() {
  return (
    <div className="flex max-w-[1280px] mt-[20px]  justify-between items-center m-auto ">
      <Link href={`http://localhost:3000/`}>
        <div className="flex gap-1">
          <FilmLogo />
          <p className="italic text-[16px] text-[#4338CA] font-bold ">
            Movie Z
          </p>
        </div>
      </Link>
      <div className="flex gap-[12px]">
        <Genre />
        <SearchInput />
      </div>
      <ThemeChanger />
    </div>
  );
}
