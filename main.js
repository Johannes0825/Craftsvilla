const feedbackBtn = document.getElementById("feedback-link");
const modal = document.getElementById("feedback-modal");
const overlay = document.getElementById("modal-overlay");
const sendBtn = document.getElementById("send-btn");
const galleriImg = document.getElementById("galleri-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let imgNum = 1;

const openModal = () => {
   modal.classList.add("modal-visible");
   overlay.classList.add("modal-visible");
   console.log("clicked");
   console.log("Modal-elementet er:", modal);
   console.log("Overlay-elementet er:", overlay);
};

const closeModal = () => {
   modal.classList.remove("modal-visible");
   overlay.classList.remove("modal-visible");
};

feedbackBtn.addEventListener("click", openModal);
sendBtn.addEventListener("click", closeModal);

const nextImg = () => {
   if (imgNum === 4) imgNum = 0;
   imgNum++;
   galleriImg.src = `../img/galleri${imgNum}.jpg`;
};

const prevImg = () => {
   if (imgNum === 1) imgNum = 5;
   imgNum--;
   galleriImg.src = `../img/galleri${imgNum}.jpg`;
};

prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);
