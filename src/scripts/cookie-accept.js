const acceptBtnRef = document.querySelector('[data-js="accept-btn"]');
const cookiesBarRef = document.querySelector('[data-js="cookies-bar"]');

function checkCookieAccept() {
    const cookiesAccept = localStorage.getItem('cookiesAccept');
    if (!cookiesAccept) {
        cookiesBarRef.classList.add('active')
    }
}

checkCookieAccept();

acceptBtnRef.addEventListener('click', function (){
    cookiesBarRef.classList.remove('active')
    localStorage.setItem('cookiesAccept', 'true')
})
