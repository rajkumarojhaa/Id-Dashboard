import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return <p className="text-red-500">Error: Movie data not found!</p>;
  }

  return (
    <Link to={`/movie/${movie.id}`} className="block">
    <Card className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 rounded-lg border border-transparent  bg-transparent">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0  bg-transparent rounded-lg"></div>

      {/* Movie Content */}
      <div className="relative z-10">
        {/* Movie Poster */}
        <img
          src={movie.poster || "https://via.placeholder.com/300"}
          alt={movie.title || "No Title"}
          className="w-full h-64 object-fit rounded-xl"
        />

        {/* Movie Details Section */}
        <div className="p-4">
          {/* Movie Title */}
          <h3 className="text-white text-sm font-semibold mb-2">
            {movie.title || "Unknown Title"}
          </h3>

          {/* Movie Genres */}
          <div className="flex flex-wrap gap-1">
            {Array.isArray(movie.genre) ? (
              movie.genre.map((genre, index) => (
                <Badge key={index} className="bg-white/20 text-white px-2 py-1 rounded-lg">
                  {genre}
                </Badge>
              ))
            ) : (
              <p className="text-white text-sm">No Genres Available</p>
            )}
          </div>

          {/* Movie Rating */}
          <div className="flex items-center mt-2 text-yellow-500">
            <Star className="w-4 h-4" />
            <span className="ml-2 text-white">{movie.rating || "No Rating Available"}</span>
          </div>
        </div>
      </div>
    </Card>
  </Link>
  );
};

export default MovieCard;
