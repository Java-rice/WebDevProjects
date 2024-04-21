document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form[data-multi-step]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm1() || validateForm2() || validateForm3()) {
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
        if (currentStep === 0) {
            if (!validateForm1()) {
                return;
            }
        }
        if (currentStep === 1) {
            if (!validateForm2()) {
                return;
            }
        }
        if (currentStep === 2) {
            if (!validateForm3()) {
                return;
            }
        }
        currentStep += 1;
        showCurrentDataStep();
        animateStepTransition();
    } else if (e.target.matches('[data-previous]')) {
        e.preventDefault();
        currentStep -= 1;
        showCurrentDataStep();
        animateStepTransition();
    } else if (e.target.matches('[type="submit"]')) { 
        e.preventDefault();
        if (currentStep === 2 && !validateForm3()) {
            return;
        }
        currentStep += 1;
        showCurrentDataStep();
        animateStepTransition();
        submitForm();
        animateStepTransition();
    }
});



function validateForm1() {
    
    var name = document.querySelector('.page-container.active input[name="name"]').value.trim();
    var mobileNumber = document.querySelector('.page-container.active input[name="mobile_number"]').value.trim();
    var email = document.querySelector('.page-container.active input[name="email"]').value.trim();
    
    
    var mobileNumberPattern = /^\d{11}$/; 
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (name === '' || mobileNumber === '' || email === '') {
        return false; 
    } else if (!mobileNumberPattern.test(mobileNumber)) {
        return false; 
    } else if (!emailPattern.test(email)) {
        return false; 
    } else {
        return true; 
    }
}

function validateForm2() {
    var webinar_name = document.querySelector('.page-container.active input[name="webinar_name"]').value.trim();
    var date_webinar = document.querySelector('.page-container.active input[name="date_webinar"]').value.trim();

    if (webinar_name === '' || date_webinar === '') {
        return false;
    }

    var radioGroups = document.querySelectorAll('.page-container.active .radio-field');
    for (var i = 0; i < radioGroups.length; i++) {
        var radioButtons = radioGroups[i].querySelectorAll('input[type="radio"]');
        var isSelected = Array.from(radioButtons).some(radioButton => radioButton.checked);
        if (!isSelected) {
            return false;
        }
    }
    return true;
}

function validateForm3() {
    var radioGroups = document.querySelectorAll('.page-container.active .radio-field');
    for (var i = 0; i < radioGroups.length; i++) {
        var radioButtons = radioGroups[i].querySelectorAll('input[type="radio"]');
        var isSelected = Array.from(radioButtons).some(radioButton => radioButton.checked);
        if (!isSelected) {
            return false;
        }
    }
    return true;
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
    const pageContainers = document.querySelectorAll('.page-container');
    pageContainers.forEach(container => {
        container.style.transition = 'opacity 0.5s ease-out'; 
        container.style.opacity = '0';
    });

    setTimeout(() => {
        pageContainers.forEach(container => {
            container.style.opacity = '1'; 
        });

        formSteps.forEach((step, index) => {
            step.classList.remove('active');
            const textInputs = step.querySelectorAll('input[type="text"]');
            textInputs.forEach(input => input.value = '');
            
            const radioInputs = step.querySelectorAll('input[type="radio"]');
            radioInputs.forEach(input => input.checked = false);

            const dateInputs = step.querySelectorAll('input[type="date"]');
            dateInputs.forEach(input => input.value = '');

            const email = step.querySelectorAll('input[type="email"]');
            email.forEach(input => input.value = '');

            const textareaInputs = step.querySelectorAll('textarea');
            textareaInputs.forEach(input => input.value = '');

            if (index === 0) {
                step.classList.add('active');
            }
        });
        
        const circles = document.querySelectorAll('.step-circle');
        circles.forEach((circles, index) => {
            if (index === 0) {
                circles.classList.add('circle-active');
            } else {
                circles.classList.remove('circle-active', 'circle-visited');
                circles.classList.add('circle-inactive');
            }
        });
        currentStep = 0;
        showCurrentDataStep();
    }, 500); 
}
function animateStepTransition() {
    const pageContainers = document.querySelectorAll('.page-container');
    pageContainers.forEach(container => {
        container.style.transition = 'opacity 0.5s ease-in'; 
        container.style.opacity = '0';
        setTimeout(() => {
            container.style.opacity = '1';
        }, 100); 
    });
}
