
function toggleAnswer(element) {
    const question = element;
    const answer = question.querySelector('.faq-answer');
    const icon = question.querySelector('.icon');

    if (answer.style.display === 'block' || answer.style.display === '') {
        answer.style.display = 'none';
        icon.textContent = '+';
        icon.style.backgroundColor = 'rgb(17, 17, 82)';
        question.style.borderRadius = '50px';
    } else {
        answer.style.display = 'block';
        icon.textContent = '-';
        icon.style.backgroundColor = 'red';
        icon.style.paddingBottom = '10px';
        question.style.borderRadius = '5px';
    }
}
