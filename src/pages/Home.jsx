import { useOutletContext } from "react-router-dom";
import MovieCard from "../components/MovieCard";
// import AnimatedBackground from "../components/AnimatedBackground";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Home = () => {
  const { filteredMovies, movies } = useOutletContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.slice(0, 10).length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <div className="relative min-h-screen text-white">
      {/* <AnimatedBackground /> */}

      {/* Carousel Section */}
      <div className="w-full  overflow-hidden">
        <Carousel>
          <CarouselContent
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {movies.slice(0, 10).map((movie) => (
              <CarouselItem key={movie.id} className="min-w-full">
                <img
                  src={movie.poster || "https://via.placeholder.com/500"}
                  alt={movie.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Movie Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 p-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
