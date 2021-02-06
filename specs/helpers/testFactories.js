import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import FavoriteMovies from "../../src/scripts/data/favoritemovie-idb";

const createLikeButtonPresenterWithMovie = async (movie) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteMovies: FavoriteMovies,
    movie,
  });
};

export default createLikeButtonPresenterWithMovie;
