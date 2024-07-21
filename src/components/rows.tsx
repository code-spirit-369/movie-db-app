import Row from "@/components/row";
import GenreRow from "@/components/genre-row";
import { fetchPopular, fetchTopRated, fetchUpcoming } from "@/actions/actions";

export default async function Rows() {
  const popularMovies = await fetchPopular();
  const topRatedMovies = await fetchTopRated();
  const upcomingMovies = await fetchUpcoming();

  return (
    <div className="py-6 md:py-12 flex flex-col gap-y-10 md:gap-y-20">
      {/* Popular Row */}
      <Row title="Popular Now" data={popularMovies.results} />

      {/* Top Rated Row */}
      <Row title="Top Rated" data={topRatedMovies.results} />

      {/* Coming Soon Row */}
      <Row title="Coming Soon" data={upcomingMovies.results} />

      {/* Genre Row */}
      <GenreRow />
    </div>
  );
}
