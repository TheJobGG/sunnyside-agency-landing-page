const menuIcon = document.querySelector('.hamburger-icon');

menuIcon.addEventListener('click', function(){
    const menu = document.querySelector('.menu-options');
    menu.classList.toggle('active');
});