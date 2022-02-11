let dismissibleCard = document.querySelector(".dismissible-card");
let dismissBtn = document.querySelector(".dismiss-btn");
const hideCard = () => dismissibleCard.style.display = "none";
dismissBtn.addEventListener('click',hideCard);



