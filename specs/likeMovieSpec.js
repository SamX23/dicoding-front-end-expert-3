import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteMovieIdb from "../src/scripts/data/favoritemovie-idb";

describe("Liking A Movie", () => {
  it("should show the like button when the movie has not been liked before", async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      movie: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="like this movie"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the movie has not been liked before", async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      movie: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="unlike this movie"]')
    ).toBeFalsy();
  });

  it("should be able to like the movie", async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      movie: {
        id: 1,
      },
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const movie = await FavoriteMovieIdb.getMovie(1);

    expect(movie).toEqual({ id: 1 });
  });
});
