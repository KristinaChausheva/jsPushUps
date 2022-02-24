const input = document.querySelector("#email")
const tick = document.querySelector(".tick")

const emailReg = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"

input.addEventListener("change", (e) => {
  e.preventDefault()
  let currentValue = e.target.value

  if (currentValue.match(emailReg)) {
    input.style.borderColor = "green"
    tick.style.opacity = "1"
  } else {
    tick.style.opacity = "0"
    input.style.borderColor = "black"
  }
})
