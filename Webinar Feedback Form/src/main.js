document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form[data-multi-step]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            this.submit();
        }
    });
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
        // Check if the current step is the first step
        if (currentStep === 0) {
            if (!validateForm()) {
                return; // Stop further execution if validation fails
            }
        }
        currentStep += 1;
    } else if (e.target.matches('[data-previous]')) {
        e.preventDefault();
        currentStep -= 1;
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
            let textElement = svgElement.querySelector('.text-style'); // Targeting the text element
            // Adjusting classes for visited, active, and inactive statuses
            if (index < currentStep) {
                svgElement.classList.replace('circle-active', 'circle-visited');
                textElement.classList.replace('text-active', 'text-visited');
            } else if (index === currentStep) {
                svgElement.classList.replace('circle-visited', 'circle-active');
                svgElement.classList.replace('circle-inactive', 'circle-active');
                textElement.classList.replace('text-visited', 'text-active');
                textElement.classList.replace('text-inactive', 'text-active');
            } else {
                svgElement.classList.replace('circle-active', 'circle-inactive');
                textElement.classList.replace('text-active', 'text-inactive');
                textElement.classList.replace('text-visited', 'text-inactive');
            }
        }
    });
}



