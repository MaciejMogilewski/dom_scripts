const hamburgerRef = document.querySelector('[data-js="hamburger-btn"]');
const overlayRef = document.querySelector('[data-js="overlay"]');

hamburgerRef.addEventListener('click', function (){
    overlayRef.classList.toggle('active');
    console.log(overlayRef)
});

