let adviceId = document.querySelector("#advice-id");
let advice = document.querySelector("#advice");
let button = document.querySelector("#btn");

window.onload = showQuote()

button.addEventListener('click', showQuote)

async function showQuote() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  adviceId.innerHTML = data.slip.id;
  advice.innerHTML = data.slip.advice;
  button.classList.add("transparent")
  setTimeout(() => {
    button.classList.remove("transparent")
  }, 2000);
}
