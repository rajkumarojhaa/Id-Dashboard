import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Loader from "./components/Loader"; // Import Loader
import Layout from "./components/Layout"; // Import Layout

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const DownloadLinks = lazy(() => import("./pages/DownloadLinks"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before showing the content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Show loader for the specified time
  }

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="/download/:id" element={<DownloadLinks />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
