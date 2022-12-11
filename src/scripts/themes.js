const themeSwitcherRef = document.querySelector('[data-js="theme-switch"]');

function readTheme() {
    const theme = localStorage.getItem('theme');

    if(theme === 'dark'){
        document.body.classList.add('dark-theme');
        themeSwitcherRef.checked = true;
    }
};

readTheme();

themeSwitcherRef.addEventListener('change', function () {
    document.body.classList.toggle('dark-theme');
    if(themeSwitcherRef.checked){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

