"use client";

import { useState } from "react";
import { Header } from "./_components/Header";
import { MovieCarousel } from "./_components/MovieCarousel";
import { MovieSection } from "./_components/MovieSection";
import { MovieCard } from "./_components/MovieCard";



export const moviesections: MovieSection[] = [
  {
    title: "Upcoming",
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  },
  {
    title: "Popular",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  },
  {
    title: "Top Rated",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  },
];

type MovieSection = {
  title: string;
  url: string;
};

export default function Home() {
  return (
    <div className="w-screen flex flex-col ">
      <Header />
      <MovieCarousel />
      <div className="flex flex-col gap-13 items-center ">
        {moviesections.map((s, index) => {
          return <MovieSection key={index} />;
        })}
      </div>
    </div>
  );
}
