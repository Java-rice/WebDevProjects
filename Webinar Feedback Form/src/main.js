document.addEventListener('DOMContentLoaded', function() {
    var continueButton = document.querySelector('.page-container.active button');
    
    continueButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Clicked CONTINUE');
    });
});
