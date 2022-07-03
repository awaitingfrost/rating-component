const container = document.querySelector(".container");
const thankyou = document.querySelector(".thankyou");
const submitBtn = document.querySelector(".container--submit");
const ratings = document.querySelector(".ratings");
const ratingNo = document.querySelector(".rating-no");

const showThankyou = () => {
  thankyou.classList.remove("d-none");
  container.classList.add("d-none");
};

const getRatingValue = (e) => {
  if (e.target.classList.contains("rating")) {
    const ratingNumber = Number(e.target.dataset.value);
    ratingNo.innerHTML = ratingNumber;
  }
};

submitBtn.addEventListener("click", showThankyou);
ratings.addEventListener("click", getRatingValue);
