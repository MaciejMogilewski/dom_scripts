const hamburgerRef = document.querySelector('[data-js="hamburger-btn"]');

hamburgerRef.addEventListener('click', function (){
    hamburgerRef.classList.toggle('drawer__hamburger--active')
    hamburgerRef.closest('[data-js="drawer"]').classList.toggle('drawer--active')
    hamburgerRef.closest('[data-js="overlay"]').classList.toggle('overlay--active')
});
