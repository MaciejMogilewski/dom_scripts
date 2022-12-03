const formRef = document.querySelector('#contactForm');
const requiredInputsRef = document.querySelectorAll('.contact-form [required]');

formRef.addEventListener('submit', function(event){
    event.preventDefault();

    requiredInputsRef.forEach(function(input){
        if (input.value === '') {
            input.classList.add('contact-form__input--error');
            input.nextElementSibling.innerText = 'To pole jest wymagane!'
        }else {
            input.classList.remove('contact-form__input--error');
            input.nextElementSibling.innerText = '';
        }
    })
});

requiredInputsRef.forEach(function (input) {
    input.addEventListener('keyup', function(){
        if (input.value.length > 2){
            input.classList.remove('contact-form__input--error');
            input.nextElementSibling.innerText = '';
        }else {
            input.classList.add('contact-form__input--error');
            input.nextElementSibling.innerText = 'To pole jest wymagane!'
        }
    })
})