//header toogle menu code

const navbarToggle = document.querySelector('#headerMenuToggle');
const navbar = document.querySelector('.header__navbar');
const navbarLinks = document.querySelectorAll('.header__navbar a')

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbarToggle.classList.toggle('active');
});

navbarLinks.forEach(link => {
    link.onclick = () => {
        if (window.innerWidth <= 768) {
            navbar.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        }
    }
})

// education list show/hide code

const educationList = document.querySelector('.education__list')
const readMoreButton = document.querySelector('#educationReadMore')

readMoreButton.onclick = () => {
    educationList.classList.toggle('shown')
    if (educationList.classList.contains('shown')) {
        readMoreButton.textContent = 'Свернуть'
    } else {
        readMoreButton.textContent = 'Читать далее'
    }
}

//-------------------------------

//faq list code

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__title');
    const arrow = item.querySelector('.faq__list-arrow svg');
    const arrowPath = item.querySelector('.faq__list-arrow svg path')
    const answer = item.querySelector('.faq__text');

    answer.style.display = 'none';
    question.addEventListener('click', () => {

        if (answer.style.display == 'none') {
            answer.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
            arrowPath.setAttribute('stroke', '#BB865F')
        } else {
            answer.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
            arrowPath.setAttribute('stroke', '#E6D1BF')
        }
    });
});

//-------------------------------------

// about-me code

const aboutMeTextContainer = document.querySelector('.about-me__text');
const aboutMeToggleButton = document.querySelector('#aboutMeReadMore');

aboutMeToggleButton.onclick = () => {
    aboutMeTextContainer.classList.toggle('shown')
    if (aboutMeTextContainer.classList.contains('shown')) {
        aboutMeToggleButton.textContent = 'Свернуть'
    } else {
        aboutMeToggleButton.textContent = 'Читать далее'
    }
}

