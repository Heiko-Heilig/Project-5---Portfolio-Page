document.getElementById('menu-icon').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    const contentWrapper = document.getElementById('content-wrapper');

    navMenu.style.right = '0px';
    contentWrapper.classList.add('tilted-content');
});

document.getElementById('return-icon').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    const contentWrapper = document.getElementById('content-wrapper');

    navMenu.style.right = '-300px';
    contentWrapper.classList.remove('tilted-content');
});