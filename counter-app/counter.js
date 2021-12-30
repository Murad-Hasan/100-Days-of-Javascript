// const sub = document.querySelector('.counter__button-minas');
// const reset = document.querySelector('.counter__button-reset');
// const add = document.querySelector('.counter__button-plus');


const counter = document.querySelector('.count');
const buttons = document.querySelector('.counter__buttons')
// console.log(buttons.innerHTML);

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('counter__button-plus')) {
        counter.innerHTML ++;
        setColor()
    }if (e.target.classList.contains('counter__button-minas')) {
        counter.innerHTML --;
        setColor()
    }if (e.target.classList.contains('counter__button-reset')) {
        counter.innerHTML = "0";
        setColor()
    }
});

function setColor () {
    if (counter.innerHTML > 0) {
        counter.style.color = 'green';
    } else if (counter.innerHTML < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'black';
    }
}


// sub.addEventListener('click', () => {
//     counter.innerHTML --;
// })
// reset.addEventListener('click', () => {
//     counter.innerHTML = "0";
// })
// add.addEventListener('click', () => {
//     counter.innerHTML ++;
// })