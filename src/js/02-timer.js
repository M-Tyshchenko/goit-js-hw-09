import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});
const fp = document.querySelector("#datetime-picker")._flatpickr;
let selectedDate = null;

const dateInput = document.querySelector('input#datetime-picker');

const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute("disabled", "disabled");

const daysTimer = document.querySelector('.value[data-days]');
const hoursTimer = document.querySelector('.value[data-hours]');
const minutesTimer = document.querySelector('.value[data-minutes]');
const secondsTimer = document.querySelector('.value[data-seconds]');

dateInput.addEventListener('change', () => {
  selectedDate = fp.selectedDates[0];
  if (selectedDate < Date.now()) {
    startBtn.setAttribute("disabled", "disabled");
    Notiflix.Notify.failure('Please, choose a date in the future');
  }
  else {
    startBtn.removeAttribute("disabled");
    Notiflix.Notify.success('You can press "Start" to start a timer');
  }
});

startBtn.addEventListener('click', () => {
   startBtn.setAttribute("disabled", "disabled");
  dateInput.setAttribute("disabled", "disabled");

  const timerId = setInterval(() => {
    const currentDate = Date.now();
    const deltaTime = selectedDate - currentDate;
    const time = convertMs(deltaTime);
    
    updateInterfaceTimer(time);
    
    if (secondsTimer.textContent === `00`) {
      clearInterval(timerId);
      dateInput.removeAttribute("disabled");
    }
  }, 1000);  
});

function updateInterfaceTimer({ days, hours, minutes, seconds }) {
  daysTimer.textContent = `${days}`;
  hoursTimer.textContent = `${ hours }`;
  minutesTimer.textContent = `${ minutes }`;
  secondsTimer.textContent = `${seconds}`;  
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

