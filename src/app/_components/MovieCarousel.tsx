"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";

type Movie = {
  title: string;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
};

export const MovieCarousel = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );

      const data = await res.json();
      console.log(data);

      setMovies(data.results.slice(0, 5));
    };

    getMovies();
  }, []);

  return (
    <Carousel className="w-screen">
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="p-4">
              <Card className="p-0 overflow-hidden">
                <CardContent className="aspect-5/2 relative p-0">
                  <Image
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      movie.backdrop_path
                    }
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="w-[400px] h-[270px] absolute top-90 left-50">
                    <p className="text-white">Now Playing:</p>
                    <p className="text-white text-[36px]">{movie.title}</p>
                    <div className="flex gap-2 relative">
                      <img src="/star.png" className="w-[28px] h-[28px]" />
                      <p className="text-white text-[18px]">
                        {movie.vote_average}
                      </p>
                      <Button className="bg-white text-black absolute top-70 w-35 h-10">
                        {" "}
                        <Play className="" /> Watch Trailer
                      </Button>
                    </div>
                    <p className="text-white text-[15px]">{movie.overview}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute top-[50%] left-12" />
      <CarouselNext className="absolute top-[50%] right-12" />
    </Carousel>
  );
};
