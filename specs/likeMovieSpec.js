import FavoriteMovies from "../src/scripts/data/favoritemovie-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Movie", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the movie has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this movie"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the movie has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this movie"]')
    ).toBeFalsy();
  });

  it("should be able to like the movie", async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const movie = await FavoriteMovies.getMovie(1);

    expect(movie).toEqual({ id: 1 });

    FavoriteMovies.deleteMovie(1);
  });

  it("should not add a movie again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteMovies.putMovie({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    // tidak ada film yang ganda
    expect(await FavoriteMovies.getAllMovies()).toEqual([{ id: 1 }]);

    FavoriteMovies.deleteMovie(1);
  });

  it("should not add a movie when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteMovies.getAllMovies()).toEqual([]);
  });
});
