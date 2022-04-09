const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const badges = document.querySelectorAll(".badges");
badges.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("badge");
  })
);

const badgesSecondary = document.querySelectorAll(".badges");
badgesSecondary.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("badge--secondary");
  })
);