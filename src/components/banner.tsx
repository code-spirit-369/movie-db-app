import { genres } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { fetchNowPlaying } from "@/actions/actions";

export default async function Banner() {
  const banners = await fetchNowPlaying();

  if (!banners.results) {
    return <div>Loading...</div>;
  }

  const bannerNumber = Math.floor(Math.random() * banners.results.length);

  const banner: Movie = banners.results[bannerNumber];

  return (
    <div
      className="relative h-[540px] w-full"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${banner.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute z-10 flex flex-col ml-4 md:ml-8 pt-40 text-white">
        <h1 className="uppercase text-5xl md:text-7xl lg:text-8xl font-bold text-gray-300">
          {banner.original_title}
        </h1>

        <div className=" mt-2 md:mt-4 flex items-center gap-x-2 md:gap-x-4 text-gray-300 text-xs md:text-base">
          <p>{banner.release_date.split("-")[0]}</p>

          {" • "}

          <p>English</p>

          {" • "}

          <div className="flex items-center gap-x-1 md:gap-x-2">
            {banner.genre_ids.map((genreId: number) => (
              <Badge key={genreId} variant="outline" className="text-gray-300">
                {genres.find((genre) => genre.id === genreId)?.name}
              </Badge>
            ))}
          </div>
        </div>

        <p className="mt-4 md:mt-8 text-base md:text-lg max-w-96 md:max-w-4xl">
          {banner.overview}
        </p>
      </div>

      <div className="absolute inset-0 bg-[#111] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
    </div>
  );
}
