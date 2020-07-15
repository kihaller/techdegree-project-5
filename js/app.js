/* jshint esversion: 6 */

// Change fade duration
lightbox.option({
  fadeDuration: 150,
  imageFadeDuration: 150,
  disableScrolling: false,
});

const largeScreen = window.matchMedia("(min-width: $breakpoint-tablet)");

if (largeScreen) {
  lightbox.option({
    disableScrolling: true,
  });
}

/* ============================================= */
/* Search Bar functionality */
/* ============================================= */

//Retrieve all images at the beginning
const allImages = document.getElementsByClassName("images");
console.log(allImages);

// Called on every keystroke
function checkInput(event) {
  console.log("checkInput function called.");

  const searchTerm = document.getElementById("input").value.toLowerCase();
  console.log("Currently in search bar: " + searchTerm);

  for (let image of allImages) {
    const dataSearch = image.getAttribute("data-search").toLowerCase();
    const searchTermInImage = dataSearch.includes(searchTerm);
    console.log(searchTermInImage);

    if (searchTermInImage) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  }
}

// Register event listener that calls checkInput function every time user types sth. in input field
document.getElementById("input").addEventListener("keyup", checkInput);
