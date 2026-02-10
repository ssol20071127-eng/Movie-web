import { Star } from "lucide-react";
import { Movie } from "./Movie";

type MovieCardProps = {
  movie: Movie;
  
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="w-80 p-6 rounded-4xl border">
      href={`/movie/${movie.id}`}
      className="block w-[230px] h-[439px] bg-gray-200 rounded-[10px] p-2
      transition-all duration-300 hover:scale-105 hover:shadow-xl
      cursor-pointer"
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        className="w-full h-[340px] rounded-[10px] object-cover"
      />
      <div className="flex items-center gap-1 mt-2">
        <span className="font-semibold flex gap-2">
          <Star className="text-yellow-500 w-5 h-5" />
          {movie.vote_average}
        </span>
        /10
      </div>
      <h1 className="text-black font-semibold mt-1">{movie.original_title}</h1>
    </div>
  );
};
