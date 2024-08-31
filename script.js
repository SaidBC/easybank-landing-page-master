const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('show');
    if (hamburger.className.includes('active')) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = "scroll"
    }

})