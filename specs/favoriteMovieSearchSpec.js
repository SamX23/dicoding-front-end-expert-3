import FavoriteMovieSearchPresenter from "../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter";
import FavoriteMovie from "../src/scripts/data/favoritemovie-idb";

describe("Searching movies", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div id="movie-search-container">
            <input id="query" type="text">
            <div class="movie-result-container">
                <ul class="movies">
                </ul>
            </div>
        </div>
        `;
  });

  it("should be able to capture the query typed by the user", () => {
    spyOn(FavoriteMovie, "searchMovies");
    const presenter = new FavoriteMovieSearchPresenter({
      favoriteMovies: FavoriteMovie,
    });

    const queryElement = document.getElementById("query");
    queryElement.value = "film a";
    queryElement.dispatchEvent(new Event("change"));

    expect(presenter.latestQuery).toEqual("film a");
  });

  it("should ask the model to search for liked movies", () => {
    spyOn(FavoriteMovie, "searchMovies");
    const presenter = new FavoriteMovieSearchPresenter({
      favoriteMovies: FavoriteMovie,
    });

    const queryElement = document.getElementById("query");
    queryElement.value = "film a";
    queryElement.dispatchEvent(new Event("change"));

    expect(FavoriteMovie.searchMovies).toHaveBeenCalledWith("film a");
  });
});
