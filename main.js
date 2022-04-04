const collapsibles = document.querySelectorAll(".footer-section");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible__expanded");
  })
);