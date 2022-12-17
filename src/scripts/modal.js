const btnRef = document.querySelector('[data-js="btn-open-modal"]')
const overlayModalRef = document.querySelector('[data-js="overlay-modal"]')
const modalRef = document.querySelector('[data-js="modal"]')
const exitBtnRefs = document.querySelectorAll('[data-exit]')

function closeModal() {
    overlayModalRef.classList.remove('overlay-modal--active')
    modalRef.classList.remove('modal--active')
    overlayModalRef.classList.add('overlay-modal--fade')
}

btnRef.addEventListener('click', function () {
    overlayModalRef.classList.add('overlay-modal--active')
    modalRef.classList.add('modal--active')
    overlayModalRef.classList.remove('overlay-modal--fade')
})

exitBtnRefs.forEach(function (exitBtn) {
    exitBtn.addEventListener('click', function () {
        closeModal();
    })
})
