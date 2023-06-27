import Notiflix from 'notiflix';
Notiflix.Notify.init({
 useIcon: false,
})

const formEl = document.querySelector('.form');
let formDataObj = {};

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submitted')
})

formEl.addEventListener('change', onFormInput);



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

function onFormInput(event) {
  formDataObj[event.target.name] = event.target.value;
  console.log(formDataObj);

  
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
