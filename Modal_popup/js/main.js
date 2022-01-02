const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
// modal.addEventListener('click', closeModal);


//open modal
function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
