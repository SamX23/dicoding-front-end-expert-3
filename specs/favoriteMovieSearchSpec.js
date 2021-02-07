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
    const queryElement = document.getElementById("query");
    queryElement.value = "film a";
    // event pengguna tekan enter
    queryElement.dispatchEvent(new Event("change"));

    expect(new FavoriteMovieSearchPresenter().userQuery).toEqual("film a");
  });
});
