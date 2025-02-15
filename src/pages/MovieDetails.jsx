import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../api/movieService";
import { Button } from "@/components/ui/button";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovies().then((movies) => {
      const foundMovie = movies.find((m) => String(m.id) === id); // Convert to string for match
      setMovie(foundMovie);
    });
  }, [id]);

  if (!movie) return <p className="text-center text-white">Loading...</p>;

   // Convert runtime to hours and minutes
   const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div
      className="relative min-h-screen flex flex-col  p-8"
      style={{
        backgroundImage: `url(${movie.poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

      <div className="relative z-10 mt-10 flex flex-col lg:flex-row    bg-opacity-60 p-8 rounded-lg shadow-lg">
        {/* Movie Poster */}
        <div className="sm:w-full lg:w-[30%] h-[450px] rounded-xl shadow-lg overflow-hidden">
          <img
            src={movie.poster || "https://via.placeholder.com/500"}
            alt={movie.title}
            className="w-full h-full object-fit"
          />
        </div>
        
        {/* Movie Details */}
        <div className="lg:ml-10 mt-4 lg:mt-0 text-gray-300 w-full lg:w-[70%]">
          <h1 className="text-3xl font-bold">{movie.title} ({movie.year})</h1>
          <p className="mt-2 text-white text-lg">Runtime: {formatRuntime(movie.runtime)}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {movie.genre.map((genre, index) => (
              <span
                key={index}
                className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Movie Plot */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-300">Plot:</h3>
            <p className="text-white text-sm leading-relaxed">{movie.plot || "No plot available."}</p>
          </div>

          {/* Movie Language */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-300">Language:</h3>
            <p className="text-white text-sm">{movie.language || "Unknown"}</p>
          </div>

          {/* Movie Actors */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-300">Actors:</h3>
            <p className="text-white text-sm">{movie.actors?.join(", ") || "Not available"}</p>
          </div>

          <Button
            className="mt-6 bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate(`/download/${id}`)}
          >
            Download Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
