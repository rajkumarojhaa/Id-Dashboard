import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../api/movieService";
import AnimatedBackground from "./AnimatedBackground";
import Footer from "./Footer";


const Layout = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  // Filtering movies based on search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen  text-white">
      <AnimatedBackground />
      <Navbar onSearch={setSearch} />
      <Outlet context={{ filteredMovies, movies }} />{" "}
      {/* Provide data to pages */}
      <Footer />
    </div>
  );
};

export default Layout;
