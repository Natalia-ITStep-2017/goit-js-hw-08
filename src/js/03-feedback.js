import _ from 'lodash.throttle'

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
  feedbackFormData[event.target.name] = event.target.value;
 localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormData));
}

emailInputEl.addEventListener("input", _(handleInput, 500));
messageInputEl.addEventListener("input", _(handleInput, 500));

function handleSubmit(event) {
   event.preventDefault();
  feedbackFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
  console.log(feedbackFormData);
  event.currentTarget.reset();
  messageInputEl.textContent = '';
  localStorage.removeItem("feedback-form-state");
  feedbackFormData = {};
}

formEl.addEventListener("submit", handleSubmit);




