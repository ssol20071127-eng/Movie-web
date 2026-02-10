import { Input } from "@/components/ui/input";
import { Moon } from "lucide-react";
import { GenreSelect } from "./GenreSelect";

export const Header = () => {
  return (
    <div className="w-screen border-b">
      <div className="container flex mx-auto py-4 items-center">
        <img src="./moviezlight.png" alt="movie" className="object-contain" />

        <div className="flex gap-3 flex-1 justify-center">
          <GenreSelect />
          <Input className="w-[400px]" />
        </div>

        <Moon />
      </div>
    </div>
  );
};
