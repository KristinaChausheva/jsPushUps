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

const moveForward = () => {
  setTimeout(() => {
    superToggle(bars, "fa-bars", "fa-arrow-left")
    // bars.classList.remove("fa-bars")
    // bars.classList.toggle("fa-arrow-left")
  }, 500)

  superToggle(header, "header", "header-active")
  // header.classList.add("header-active")
  // header.classList.remove("header")

  superToggle(img, "img", "img-active")
  // img.classList.add("img-active")
  // img.classList.remove("img")

  superToggle(actionContainer, "actions-container", "actions-container-active")
  // actionContainer.classList.add("actions-container-active")
  // actionContainer.classList.remove("actions-container")

  superToggle(description, "mc-description", "mc-description-active")
  // description.classList.add("mc-description-active")
  // description.classList.remove("mc-description")
}

// const moveBack = () => {
//   // setTimeout(() => {}, 500)
//   console.log("fdesfs")
//   superToggle(arrow, "fa-arrow-left", "fa-bars")
//   // arrow.classList.remove("fa-arrow-left")
//   // arrow.classList.toggle("fa-bars")
// }

bars.addEventListener("click", moveForward)
// arrow?.addEventListener("click", moveBack)
