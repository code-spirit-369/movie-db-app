"use server";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.TMDB_API_KEY;

export async function fetchNowPlaying() {
  const res = await fetch(
    `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export async function fetchPopular() {
  const res = await fetch(
    `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export async function fetchTopRated() {
  const res = await fetch(
    `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export async function fetchUpcoming() {
  const res = await fetch(
    `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export async function fetchMovieById(id: string) {
  const res = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export async function fetchRecomendations(id: string) {
  const res = await fetch(
    `${baseUrl}/movie/${id}/recommendations?api_key=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export async function fetchMovieByGenre(id: string, page = 1) {
  const res = await fetch(
    `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}&language=en-US&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}
