const movieList = document.querySelector(".movieslist");
const userinput = document.querySelector(".userinput");
const movieForm=document.querySelector(".movieformcontainer")
// all the movies store here
const moviesData = [
  {
    name: "OMG ",
    isWatched: false,
  },
];

//function to create user interface of movielist
function createUi(movies = [], rootElement) {
  rootElement.innerHTML = "";
  movies.forEach((movie, index) => {
    let movieContainer = document.createElement("div");
    movieContainer.classList.add("flex");

    let input = document.createElement("input");
    input.id = index;
    input.type = "checkbox";
    if (movie.isWatched === true) {
      input.checked = true;
    }
    // change checkbox
    input.addEventListener("change", revertcheckbox);

    let moviename = document.createElement("p");
    moviename.innerText = movie.name;

    let cancleButton = document.createElement("span");
    cancleButton.innerText = "❌";
    cancleButton.setAttribute("data-id", index);
    cancleButton.addEventListener("click", deleteMovie);

    movieContainer.append(input, moviename, cancleButton);
    rootElement.append(movieContainer);
  });
}

createUi(moviesData, movieList);

//once a user press enter movies should be updated in
// movie list

movieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    moviesData.push({
      name: userinput.value,
      isWatched: false,
    });
    userinput.value=""
    createUi(moviesData, movieList);
});

//revert checkbox
function revertcheckbox(event) {
  let id = event.target.id;
  moviesData[id].isWatched = !moviesData[0].isWatched;
}

// delete a movie

function deleteMovie(event) {
  let id = event.target.dataset.id;
  moviesData.splice(id, 1);
  createUi();
}