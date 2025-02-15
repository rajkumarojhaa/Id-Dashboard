import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../api/movieService";

const DownloadLinks = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [downloadLink, setDownloadLink] = useState("");



  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movies = await getMovies(); // Fetch all movies
        

        const selectedMovie = movies.find((movie) => String(movie.id) === String(id));
       

        if (selectedMovie) {
          setDownloadLink(selectedMovie.downloadLinks);
        } else {
          console.warn("No movie found with ID:", id);
          setDownloadLink("");
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, [id]); // Runs every time movieId changes

  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="p-10 mt-16  text-center">
    <h2 className="text-2xl font-bold mb-10">Download Movie</h2>
    {downloadLink ? (
      <a
        href={downloadLink}
        download
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click Here
      </a>
    ) : (
      <p className="text-red-500">No download link available.</p>
    )}
  </div>
</div>

  );
};

export default DownloadLinks;




















// Code for links from api

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const DownloadLinks = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await axios.get(`https://api.example.com/movies/${id}`);
//         setMovie(response.data);
//       } catch (err) {
//         setError("Failed to load movie details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovie();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">{movie.title}</h1>
//       <p className="mt-2">{movie.description}</p>
      
//       <h2 className="mt-4 text-xl font-semibold">Download Links</h2>
//       <ul className="mt-2">
//         {movie.downloadLinks.map((link, index) => (
//           <li key={index} className="mt-2 text-blue-500 underline">
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               Download Link {index + 1}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DownloadLinks;
