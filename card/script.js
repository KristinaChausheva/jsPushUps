const bars = document.querySelector(".fa-bars")
const header = document.querySelector(".header")
const img = document.querySelector(".img")
const actionContainer = document.querySelector(".actions-container")
const description = document.querySelector(".mc-description")
const arrow = document.querySelector(".fa-arrow-left")

const social = document.querySelector(".social")
const socialLinks = document.querySelector(".social-links")

const superToggle = function (element, class0, class1) {
  element.classList.toggle(class0)
  element.classList.toggle(class1)
}

const move = (e) => {
  console.log(e.target)
  console.log(e.target.classList.contains("fa-bars"))
  if (e.target.classList.contains("fa-bars")) {
    setTimeout(() => {
      e.target.classList.replace("fa-bars", "fa-arrow-left")
    }, 500)
  }

  if (e.target.classList.contains("fa-arrow-left")) {
    setTimeout(() => {
      e.target.classList.replace("fa-arrow-left", "fa-bars")
    }, 500)
  }

  superToggle(header, "header", "header-active")
  superToggle(img, "img", "img-active")
  superToggle(actionContainer, "actions-container", "actions-container-active")
  superToggle(description, "mc-description", "mc-description-active")
  superToggle(social, "social", "social-active")
  superToggle(socialLinks, "socialLinks", "social-links-active")
}

const test = () => {
  console.log("test")
}

// actionContainer.addEventListener("click", move)
bars.addEventListener("click", move)
