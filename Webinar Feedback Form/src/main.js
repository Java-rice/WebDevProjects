document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form[data-multi-step]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            this.submit();
        }
    });

    var submitAnotherButton = document.getElementById('submit-another');
    if (submitAnotherButton) {
        submitAnotherButton.addEventListener('click', function(event) {
            event.preventDefault();
            resetForm();
        });
    }
});

const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...multiStepForm.querySelectorAll('[data-step]')];
let currentStep = formSteps.findIndex(step => step.classList.contains('active'));

if (currentStep < 0) {
    currentStep = 0;
    showCurrentDataStep();
}

multiStepForm.addEventListener('click', e => {
    if (e.target.matches('[data-next]')) {
        e.preventDefault();
        if (currentStep === 0) {
            if (!validateForm()) {
                return;
            }
        }
        currentStep += 1;
    } else if (e.target.matches('[data-previous]')) {
        e.preventDefault();
        currentStep -= 1;
    } else if (e.target.matches('[type="submit"]')) { 
        e.preventDefault();
        submitForm();
    }
    showCurrentDataStep();
});



function validateForm() {
    // Get the values of the input fields for the first step
    var name = document.querySelector('.page-container.active input[name="name"]').value.trim();
    var mobileNumber = document.querySelector('.page-container.active input[name="mobile_number"]').value.trim();
    var email = document.querySelector('.page-container.active input[name="email"]').value.trim();
    
    // Mobile Number and Email Format
    var mobileNumberPattern = /^\d{11}$/; // 11 Digits
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard Email Format

    // Check if the name, mobile number, and email are filled
    if (name === '' || mobileNumber === '' || email === '') {
        alert('Please fill out all required fields.');
        return false; // If any of the fields are empty, return false
    } else if (!mobileNumberPattern.test(mobileNumber)) {
        alert('Please enter a valid mobile number.');
        return false; // If mobile number doesn't match the pattern, return false
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false; // If email doesn't match the pattern, return false
    } else {
        return true; // If all conditions pass, return true
    }
}

function showCurrentDataStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);

        let svgElement = document.querySelector(`#circle-${index}`);
        if (svgElement) {
            let textElement = svgElement.querySelector('text');
            if (index < currentStep) {
                svgElement.classList.replace('circle-active', 'circle-visited');
                textElement.classList.replace('text-active', 'text-visited');
                textElement.classList.add('text-inactive');
            } else if (index === currentStep) {
                svgElement.classList.replace('circle-visited', 'circle-active');
                svgElement.classList.replace('circle-inactive', 'circle-active');
                textElement.classList.replace('text-visited', 'text-active');
                textElement.classList.replace('text-inactive', 'text-active');
                textElement.classList.add('text-active');

             
            } else {
                svgElement.classList.replace('circle-active', 'circle-inactive');
                textElement.classList.replace('text-active', 'text-inactive');
                textElement.classList.replace('text-visited', 'text-inactive');
                textElement.classList.add('text-inactive');
            }
        }
    });
}


function submitForm() {
    var name = multiStepForm.elements['name'].value;
    var mobileNumber = multiStepForm.elements['mobile_number'].value;
    var email = multiStepForm.elements['email'].value;

    var webinarName = multiStepForm.elements['webinar_name'].value;
    var webinarDate = multiStepForm.elements['date_webinar'].value;
    var informationDelivery = multiStepForm.elements['information_delivery'].value;
    var subjectPresentation = multiStepForm.elements['subject_presentation'].value;
    var webinarPace = multiStepForm.elements['webinar_pace'].value;
    var webinarDuration = multiStepForm.elements['webinar_duration'].value;
    var trainerKnowledge = multiStepForm.elements['trainer_knowledge'].value;

    var newKnowledge = multiStepForm.elements['new_knowledge'].value;
    var applyKnowledge = multiStepForm.elements['apply_knowledge'].value;
    var attendWebinar = multiStepForm.elements['attend_webinars'].value;
    var bestWebinar = multiStepForm.elements['best_webinar'].value;
    var worstWebinar = multiStepForm.elements['worst_webinar'].value;
    var suggestionsWebinar = multiStepForm.elements['suggestions_webinar'].value;


    console.log('Name:', name);
    console.log('Mobile Number:', mobileNumber);
    console.log('Email:', email);
    console.log('Webinar Name:', webinarName);
    console.log('Webinar Date:', webinarDate);
    console.log('Information Delivery Rating:', informationDelivery);
    console.log('Subject Presentation Rating:', subjectPresentation);
    console.log('Webinar Pace Rating:', webinarPace);
    console.log('Webinar Duration Rating:', webinarDuration);
    console.log('Trainer Knowledge Rating:', trainerKnowledge);
    console.log('New Knowledge Rating:', newKnowledge);
    console.log('Apply Knowledge Rating:', applyKnowledge);
    console.log('Attend Webinar Rating:', attendWebinar);
    console.log('Best thing about the Webinar:', bestWebinar);
    console.log('Worst thing about the Webinar:', worstWebinar);
    console.log('Suggestions:', suggestionsWebinar);

    var LastStep = document.querySelector('.page-container[data-step="3"]');
    if (LastStep) {
        formSteps.forEach(step => step.classList.remove('active'));
        LastStep.classList.add('active');
        currentStep = formSteps.indexOf(LastStep);
    }
}

function resetForm() {
    formSteps.forEach((step, index) => {
        step.classList.remove('active');
        const textInputs = step.querySelectorAll('input[type="text"]');
        textInputs.forEach(input => input.value = '');
        
        const radioInputs = step.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(input => input.checked = false);

        const dateInputs = step.querySelectorAll('input[type="date"]');
        dateInputs.forEach(input => input.value = '');

        const textareaInputs = step.querySelectorAll('textarea');
        textareaInputs.forEach(input => input.value = '');

        if (index === 0) {
            step.classList.add('active');
        }
    });
    
    const circles = document.querySelectorAll('.step-circle');
    circles.forEach((circle, index) => {
        if (index === 0) {
            circle.classList.add('circle-active');
        } else {
            circle.classList.remove('circle-active', 'circle-visited');
        }
    });
    currentStep = 0;
    showCurrentDataStep();
}




