import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const currentDate = new Date();
flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});
const dateInput = document.querySelector("#datetime-picker")._flatpickr;

const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute("disabled", "disabled"); 


// if (dateInput > currentDate) {
//     startBtn.removeAttribute("disabled"); 

// }
//Notiflix.Notify.failure('Please, choose a date in the future');