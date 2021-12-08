let detailsContainer = document.getElementsByClassName("branch-action-item");
console.log(detailsContainer);

if (detailsContainer[1].classList.contains("open")) {
  detailsContainer[1].children[2].setAttribute("style", "max-height: 100%");
}
