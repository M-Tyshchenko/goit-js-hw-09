import Notiflix from 'notiflix';
Notiflix.Notify.init({
  useIcon: false,
});

const formEl = document.querySelector('.form');
let firstDelay = null;
let delayStep = null;
let amount = null;

formData();

// події при натисканні кнопки сабміту-------------------------
formEl.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault(); 

  let delay = firstDelay;
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay);
    delay += delayStep;
  }  
}
//-------------------------------------------------------------

// відслідковую введені дані в поля форми----------------------
formEl.addEventListener('change', formData);

function formData() {
  firstDelay = Number(formEl.elements.delay.value);
  
  delayStep = Number(formEl.elements.step.value);
  
  amount = Number(formEl.elements.amount.value);
}
//-------------------------------------------------------------


// функція створення промісу-----------------------------------
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  promise.then(value => {
  Notiflix.Notify.success(value);
}).catch(error => {
  Notiflix.Notify.failure(error);
});
}
//-------------------------------------------------------------
