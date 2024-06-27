document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.header__main-ham-menu');
    const hamMenuClose = document.querySelector('.header__main-ham-menu-close');
    const smMenu = document.querySelector('.header__sm-menu');
    const smMenuLinks = document.querySelectorAll('.header__sm-menu-link a');

    hamMenu.addEventListener('click', () => {
        smMenu.classList.add('open');
        hamMenu.classList.add('d-none');
        hamMenuClose.classList.remove('d-none');
    });

    hamMenuClose.addEventListener('click', () => {
        smMenu.classList.remove('open');
        hamMenu.classList.remove('d-none');
        hamMenuClose.classList.add('d-none');
    });

    smMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            smMenu.classList.remove('open');
            hamMenu.classList.remove('d-none');
            hamMenuClose.classList.add('d-none');
        });
    });
});
