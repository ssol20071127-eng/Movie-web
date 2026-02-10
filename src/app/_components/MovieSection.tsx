"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Movie } from "./Movie";

export type Movies = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Response = {
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
};

type MoviesSectionProps = {
  category: string;
  title: string;
};

export const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzg5NjJkNmQ0N2E0YjFhYmE5ZWRhN2NhZDNjMmJjMSIsIm5iZiI6MTc2MzYwNTcwNC41NzcsInN1YiI6IjY5MWU3Y2M4ZDczNDFjNDAxZDIxYTNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mhp7Z3DsGeO5E8Oxk0D4nerJqeHkWRdsizGxIeqTVWE`,
            },
          }
        );
        const data = await res.json();
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="w-540 h-[36px] flex items-center justify-center pl-20  ">
      <div className="w-full text-black flex justify-between ">
        <p>Upcoming</p>
        <p className="flex">
          See More <ArrowRightIcon />{" "}
        </p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
