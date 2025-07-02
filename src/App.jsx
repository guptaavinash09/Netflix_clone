import Navbar from "./components/Navbar";
import MovieRow from "./components/MovieRow";
import movies from "./data/movies";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <Navbar />
      <MovieRow title="🔥 Trending Now" movies={movies} />
      <MovieRow title="⭐ Top Rated" movies={movies} />
      <MovieRow title="🎬 Action Hits" movies={movies} />
    </div>
  );


export default App;



function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <Navbar />
      <MovieRow title="🔥 Trending Now" movies={movies} />
      <MovieRow title="⭐ Top Rated" movies={movies} />
      <MovieRow title="🎬 Action Hits" movies={movies} />
    </div>
  );