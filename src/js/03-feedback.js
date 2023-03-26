import throttle from 'lodash.throttle'

const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('[name="email"]');
const messageInputEl = document.querySelector('[name="message"]');

let feedbackFormData = {};

if (localStorage.getItem("feedback-form-state")) {
   feedbackFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
   emailInputEl.value = feedbackFormData[emailInputEl.name];
   messageInputEl.textContent = feedbackFormData[messageInputEl.name];
}

function handleInput(event) {
   event.target.parentNode.lastChild.textContent = '';
   event.target.parentNode.style.color = 'inherit';
   feedbackFormData[event.target.name] = event.target.value;
   localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormData));
}

function handleIsFieldfilledIn(fieldEl) {
   if (!fieldEl.value.trim()) {
      fieldEl.parentNode.lastChild.textContent = `The ${fieldEl.name} field cannot be empty`;
      fieldEl.parentNode.style.color = 'red';
      return false

   } else {
      return true
   }
}

emailInputEl.addEventListener("input", throttle(handleInput, 500));
messageInputEl.addEventListener("input", throttle(handleInput, 500));

function handleSubmit(event) {
   event.preventDefault();


   if (!handleIsFieldfilledIn(emailInputEl) || !handleIsFieldfilledIn(messageInputEl)) {
      if (!handleIsFieldfilledIn(messageInputEl) || !handleIsFieldfilledIn(emailInputEl)) {
         return
      }
   }
   else {
      feedbackFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
      console.log(feedbackFormData);
      event.currentTarget.reset();
      messageInputEl.textContent = '';
      localStorage.removeItem("feedback-form-state");
      feedbackFormData = {};
   }
}

formEl.addEventListener("submit", handleSubmit);




