import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formData = {

};

const refs = {
    form: document.querySelector(".feedback-form"),
}

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit)

populateForm();

function onFormInput(event) {
    console.log(event.target.name);
    console.log(event.target.value);

    formData[event.target.name] = event.target.value;
    console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

   
    
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();

};

function populateForm() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedFormData) {
        if (savedFormData.email) {
            
            refs.form.elements.email.value = savedFormData.email;
        }

        if (savedFormData.message) {
                        
            refs.form.elements.message.value = savedFormData.message;
        }

    }

    
   
};

