
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

function toggleSearch() {
  const searchBar = document.getElementById("searchBar");
  const searchIcon = document.querySelector(".search-icon");

  const isVisible = searchBar.style.display === "block";

  searchBar.style.display = isVisible ? "none" : "block";

  if (window.innerWidth <= 768) {
    searchIcon.classList.toggle("hide", !isVisible);
  }
}


document.addEventListener("click", function (event) {
  const searchBar = document.getElementById("searchBar");
  const searchIcon = document.querySelector(".search-icon");

  if (
    searchBar &&
    searchBar.style.display === "block" &&
    !searchBar.contains(event.target) &&
    !searchIcon.contains(event.target)
  ) {
    searchBar.style.display = "none";
    if (window.innerWidth <= 768) {
      searchIcon.classList.remove("hide");
    }
  }
});

