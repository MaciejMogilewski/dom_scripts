const btnRef = document.querySelector('#showCode');
const codeRef = document.querySelector('.show-code__code');

function toggleText(){
   if (btnRef.innerText === 'POKAŻ KOD'){
       btnRef.innerText = 'Schowaj kod';
   }else {
       btnRef.innerText = 'Pokaż kod';
   }
};

btnRef.addEventListener('click', function (){
    toggleText();
    codeRef.classList.toggle('show-code__code--hidden');
});
