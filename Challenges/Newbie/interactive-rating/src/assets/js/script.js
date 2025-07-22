const submitBtn = document.getElementById('submit-btn')
const ratingBtns = document.querySelectorAll('.rating-btn')
const feedbackContainer = document.getElementById('feedback-container')
const thanksContainer = document.getElementById('thanks-container')
const rateDisplay = document.getElementById('rate')

let selectedRating = null

function ratingClick(event) {
  selectRating(event.target)
}

function selectRating(btn) {
  ratingBtns.forEach((btn) => btn.classList.remove('selected'))
  btn.classList.add('selected')
  selectedRating = btn.textContent
}

function submitClick(event) {
  event.preventDefault()
  if (selectedRating) {
    showThanksScreen()
  } else {
    alert('Please select a rating before submitting.')
  }
}

function showThanksScreen() {
  feedbackContainer.classList.add('hidden')
  thanksContainer.classList.remove('hidden')
  rateDisplay.textContent = selectedRating
}

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', ratingClick)
})

submitBtn.addEventListener('click', submitClick)
