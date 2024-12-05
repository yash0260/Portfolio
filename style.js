$('.carousel').carousel()
document.getElementById('mobile-menu').addEventListener('click', function () {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('show');
});
