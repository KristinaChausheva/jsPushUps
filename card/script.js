const bars = document.querySelector(".fa-bars")
const header = document.querySelector(".header")
const img = document.querySelector(".img")
const actionContainer = document.querySelector(".actions-container")
const description = document.querySelector(".mc-description")

const rotate = () => {
  setTimeout(() => {
    bars.classList.remove("fa-bars")
    bars.classList.add("fa-arrow-left")
  }, 500)

  header.classList.add("header-active")
  header.classList.remove("header")

  img.classList.add("img-active")
  img.classList.remove("img")

  actionContainer.classList.add("actions-container-active")
  actionContainer.classList.remove("actions-container")

  description.classList.add("mc-description-active")
  description.classList.remove("mc-description")
}
bars.addEventListener("click", rotate)
