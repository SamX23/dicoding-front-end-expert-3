import FavoriteMovies from "../../data/favoritemovie-idb";
import FavoriteMovieSearchView from "./liked-movies/favorite-movie-search-view";
import FavoriteMovieShowPresenter from "./liked-movies/favorite-movie-show-presenter";
import FavoriteMovieSearchPresenter from "./liked-movies/favorite-movie-search-presenter";

const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovies });
    new FavoriteMovieSearchPresenter({
      view,
      favoriteMovies: FavoriteMovies,
    });
  },
};

export default Like;
