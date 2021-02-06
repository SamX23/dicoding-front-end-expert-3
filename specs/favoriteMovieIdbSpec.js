import { itActsAsFavoriteMovieModel } from "./contract/favoriteMovieContract";
import FavoriteMovies from "../src/scripts/data/favoritemovie-idb";

describe("Favorite Movie Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteMovies.getAllMovies()).forEach(async (movie) => {
      await FavoriteMovies.deleteMovie(movie.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteMovies);
});
