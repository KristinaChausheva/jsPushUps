const bars = document.querySelector(".fa-bars")
const header = document.querySelector(".header")
const img = document.querySelector(".img")
const actionContainer = document.querySelector(".actions-container")
const description = document.querySelector(".mc-description")

const arrow = document.querySelector(".fa-arrow-left")

var superToggle = function (element, class0, class1) {
  element.classList.toggle(class0)
  element.classList.toggle(class1)
}

const move = () => {
  setTimeout(() => {
    // superToggle(arrow, "fa-arrow-left", "fa-bars")
    superToggle(bars, "fa-bars", "fa-arrow-left")
  }, 500)

  superToggle(header, "header", "header-active")
  superToggle(img, "img", "img-active")
  superToggle(actionContainer, "actions-container", "actions-container-active")
  superToggle(description, "mc-description", "mc-description-active")
}

bars.addEventListener("click", move)
