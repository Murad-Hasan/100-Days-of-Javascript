const btn = document.querySelector('.btn');
const number = document.querySelector('.random_number')
const reset = document.querySelector('.reset')
const backgroundColorChange = document.querySelector('.changeBg')

btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    number.innerHTML = `${randomNumber}`;
    number.style.color = '#ea1164';
})

//background color change
const backgroundColorCode = () => {
    const colorCode = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = `#${colorCode}`;
}
//content color change
const contentColorCode = () => {
    const colorCode = Math.random().toString(16).substring(2, 8);
    document.querySelector('.content').style.backgroundColor = `#${colorCode}`;
}

backgroundColorChange.addEventListener('click', backgroundColorCode)
btn.addEventListener('click', contentColorCode)

reset.addEventListener('click', () => {
    number.innerHTML = '0';
    number.style.color = '#0c0c0c';
})
