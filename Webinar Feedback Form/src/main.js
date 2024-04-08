function validateForm() {
    // Get the values of the input fields
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
    showCurrentStep();
}

multiStepForm.addEventListener('click', e => {
    if (e.target.matches('[data-next]')) {
        e.preventDefault();
        currentStep += 1;
    } else if (e.target.matches('[data-previous]')) {
        e.preventDefault();
        currentStep -= 1;
    }
    showCurrentStep();
});

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
    });
}
