const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;

            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });


}
navSlide();

const bioForm = document.querySelector('.form');
// event delegation
const bioBtn = document.querySelector('.btn-content');

const updateBio = () => {


    bioBtn.addEventListener('click', () => {

        bioForm.classList.add('showForm');
    })
}

const bioCancel = () => {
    const cancelBtn = document.querySelector('.cnlBtn');
    cancelBtn.addEventListener('click', () => {
        bioForm.classList.remove('showForm');
    })
}

