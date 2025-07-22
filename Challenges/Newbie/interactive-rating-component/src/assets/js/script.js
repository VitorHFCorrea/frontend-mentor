const submitBtn = document.getElementById('submit-btn');
const ratingBtns = document.querySelectorAll('.rating-btn');
const feedbackContainer = document.getElementById('feedback-container');
const thanksContainer = document.getElementById('thanks-container');
const rateDisplay = document.getElementById('rate');

let selectedRating = null;

ratingBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    ratingBtns.forEach(btn => btn.classList.remove("selected"));
    btn.classList.add("selected");
    selectedRating = btn.textContent;
  })
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  if (selectedRating){
    feedbackContainer.classList.add('hidden');
    thanksContainer.classList.remove('hidden');
    rateDisplay.textContent = selectedRating;
  }
  else {
    alert('Please select a rating before submitting.');
  }
})




