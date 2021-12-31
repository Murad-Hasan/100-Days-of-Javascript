const btn = document.querySelector('.btn');
const number = document.querySelector('.random_number')


btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    number.innerHTML = `${randomNumber}`;
    number.style.color = '#ea1164';
})
