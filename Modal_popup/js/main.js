const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

//open modal
function openModal() {
    modal.style.display = "block";
}
//close modal
function closeModal() {
    modal.style.display = "none";
}

//open modal after load file after 1000ms
window.addEventListener("load", function () {
    setTimeout(openModal, 1000);
});

window.hideWarning = false;
window.addEventListener("beforeunload", (event) => {
    if (!hideWarning) {
        event.preventDefault();
        event.returnValue = "";
    }
});
