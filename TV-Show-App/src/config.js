const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const THUMBNAIL_BASE_URL = "https://image.tmdb.org/t/p/w300";
const API_KEY = "b8ac68445a470146f0262ef67a832614";
const API_BASE_URL = "https://api.themoviedb.org/3";

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGFjNjg0NDVhNDcwMTQ2ZjAyNjJlZjY3YTgzMjYxNCIsInN1YiI6IjY1MTE3N2NhM2E0YTEyMDBlMjk1OGZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OJwUelX-x3llxD2aWEMA3Amx5tiHdw2vz5Vkc9SQhQ",
  },
};

export { IMAGE_BASE_URL, API_BASE_URL, OPTIONS, THUMBNAIL_BASE_URL };
