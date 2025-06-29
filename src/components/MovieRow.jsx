import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold px-4 mb-2">{title}</h2>
      <div className="flex overflow-x-auto gap-4 px-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
