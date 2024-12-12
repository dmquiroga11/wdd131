
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');


document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});


const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const nav = document.querySelector("#nav");
const open = document.querySelector("#openmenu");
const close = document.querySelector("#closemenu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});

