import Link from "next/link";
import Image from "next/image";

type Props = {
  data?: Movie[];
  title: string;
};

export default function Row({ data, title }: Props) {
  return (
    <section className="h-80 flex flex-col md:flex-row px-6 md:px-12">
      <div className="uppercase flex flex-col justify-between md:w-96">
        <h2 className="text-2xl md:text-5xl max-w-xs font-semibold text-[#E50914]">
          {title}
        </h2>

        <div className="flex justify-between items-center">
          <p className="mt-1 md:mt-0 text-xs md:text-sm uppercase text-gray-300 tracking-wider">
            Scroll To Next ⟶
          </p>
        </div>
      </div>

      <div className="mt-4 md:ml-12 md:mt-0 flex overflow-y-hidden overflow-x-scroll gap-x-4 w-full no-scrollbar">
        {data &&
          data.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={500}
                className="object-cover min-w-40 md:min-w-64 cursor-pointer"
              />
            </Link>
          ))}
      </div>
    </section>
  );
}
