const button = document.getElementById("button")
const tab = document.querySelector(".tab")

button.addEventListener("click", function () {
  this.classList.toggle("active")

  tab.style.transform = "translateX(-300px)"

  if (button.classList.contains("active")) {
    this.innerHTML = "close"

    tab.style.transform = "translateX(0)"

    window.addEventListener("mousemove", function (e) {
      button.style.left = e.clientX - 50 + "px"
      button.style.top = e.clientY - 50 + "px"
    })
  } else {
    this.innerHTML = "button!"
  }
})
