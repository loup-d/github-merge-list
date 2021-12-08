window.addEventListener(
  "load",
  () => {
    setTimeout(showButtonState, 500);
  },
  false
);

function showButtonState() {
  let btn = document.getElementsByClassName(
    "js-details-target btn-link float-right"
  );

  btn[btn.length - 1].addEventListener("click", () => {
    let detailsContainer =
      document.getElementsByClassName("branch-action-item");
    if (detailsContainer[1].classList.contains("open")) {
      detailsContainer[1].children[2].removeAttribute(
        "style",
        "max-height: 100%"
      );
    } else {
      detailsContainer[1].children[2].setAttribute("style", "max-height: 100%");
    }
  });
}
