//const buttons = document.querySelectorAll('button');
const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.style.fontSize = "20px";
startBtn.style.padding = "10px 20px";
startBtn.style.textTransform = "uppercase";

stopBtn.style.fontSize = "20px";
stopBtn.style.padding = "10px 20px";
stopBtn.style.textTransform = "uppercase";
stopBtn.setAttribute("disabled", "disabled");

startBtn.addEventListener('click', (evt) => {
    startBtn.setAttribute("disabled", "disabled");
    stopBtn.removeAttribute("disabled");
    timerId = setInterval(() => {bodyEl.style.backgroundColor = getRandomHexColor();}, 1000);
    
})

stopBtn.addEventListener('click', (evt) => {
    stopBtn.setAttribute("disabled", "disabled");
    startBtn.removeAttribute("disabled");
    clearInterval(timerId);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
