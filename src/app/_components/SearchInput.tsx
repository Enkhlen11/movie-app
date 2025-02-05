"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { TOKEN } from "../util/constants";

const SearchInput = () => {
  const [value, setValue] = useState();
  const searchValue = async () => {
    const setValue = await fetch(
      ` https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${1}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await setValue.json();
  };
  useEffect(() => {
    SearchInput();
  }, []);
  const searchHandler = (e) => {
    const search = e.target.value;
    setValue(search);
  };
  console.log(value);
  return (
    <Popover>
      <PopoverTrigger className=" flex w-[355px] rounded-[8px] px-[12px] gap-10 items-center bg-[#fffff] border-[1px] focus:border-black ">
        <SearchIcon className="text-muted-foreground" />
        <Input
          onChange={searchHandler}
          placeholder="Search"
          className=" border-none px-3 focus:outline "
        />
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};
export default SearchInput;
