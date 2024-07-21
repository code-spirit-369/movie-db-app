import Link from "next/link";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="relative w-full h-96 bg-[#333] rounded-lg overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 text-gray-300">
          <h3 className="text-xl font-semibold">{movie.title}</h3>
          <p className="text-sm mt-1">{movie.release_date.split("-")[0]}</p>
        </div>
      </div>
    </Link>
  );
}
