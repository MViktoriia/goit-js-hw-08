import throttle from 'lodash.throttle'

const feedbackFormRef = document.querySelector(".feedback-form");
// const submitBtn = document.querySelector("button");
// console.log(submitBtn);
// submitBtn.disabled = true;

feedbackFormRef.addEventListener("input", throttle(onFormInput, 500));
feedbackFormRef.addEventListener("submit", onFormSubmit)

populateForm();

function onFormInput(event) {
           
    if (event.currentTarget) {
        localStorage.setItem("feedback-form-state", JSON.stringify({ email: event.currentTarget.email.value, message: event.currentTarget.message.value }));
       
        
    };
    
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();

};

function populateForm() {
    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (savedFormData) {
                        
        feedbackFormRef.elements.email.value = savedFormData.email;
        feedbackFormRef.elements.message.value = savedFormData.message;
    }

};

