function setTheme(event) {
    if (event.matches) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setTheme(event);
});

setTheme(window.matchMedia('(prefers-color-scheme: dark)'));
