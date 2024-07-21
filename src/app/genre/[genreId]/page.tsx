import { genres } from "@/constants";
import LoadMore from "@/components/load-more";
import MovieCard from "@/components/movie-card";
import { fetchMovieByGenre } from "@/actions/actions";

type Props = {
  params: {
    genreId: string;
  };
};

export default async function GenrePage({ params }: Props) {
  const genreId = params.genreId;
  const movies = await fetchMovieByGenre(genreId);

  return (
    <div className="p-12 pt-24 md:pt-32">
      <h2 className="text-2xl md:text-5xl max-w-md font-semibold text-white">
        {genres.find((genre) => genre.id === parseInt(genreId))?.name} Movies
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies &&
          movies.results.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>

      <LoadMore id={genreId} />
    </div>
  );
}
