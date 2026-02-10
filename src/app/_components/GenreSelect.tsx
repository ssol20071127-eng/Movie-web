"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type Genre = {
  id: number;
  name: string;
};

export const GenreSelect = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getGenres = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );

      const data = await res.json();

      setGenres(data.genres);
    };

    getGenres();
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[400px] space-y-4">
        <p className="">Genres</p>

        <div className="flex gap-2 flex-wrap">
          {genres.map((genre) => (
            <Badge variant="outline" key={genre.id}>
              {genre.name}
            </Badge>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
