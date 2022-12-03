const btnsRef = document.querySelectorAll('.show-code__btn');

function toggleText(btnRef){
   if (btnRef.value === 'Pokaż kod'){
       btnRef.value = 'Schowaj kod';
   }else {
       btnRef.value = 'Pokaż kod';
   }
}

btnsRef.forEach(function (btnRef){
    btnRef.addEventListener('click', function (){
        toggleText(btnRef);
        btnRef.nextElementSibling.classList.toggle('show-code__code--hidden');
    })
})

