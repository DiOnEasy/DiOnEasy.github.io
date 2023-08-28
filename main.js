// education list show/hide code

let educationListItem = document.querySelectorAll('.education__list-item')
let readMoreButton = document.querySelector('#educationReadMore')

function changeListItemDisplay() {
    for (i = 6; i < educationListItem.length; i++) {
        if (educationListItem[i].style.display !== 'none') {
            educationListItem[i].style.display = 'none';
            readMoreButton.innerHTML = "Читать далее"
        }
        else {
            educationListItem[i].style.display = '';
            readMoreButton.innerHTML = "Свернуть"
        }
    }
}
changeListItemDisplay()

readMoreButton.onclick = (() => {
    changeListItemDisplay();
})

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






