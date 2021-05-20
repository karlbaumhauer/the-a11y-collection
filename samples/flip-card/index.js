window.addEventListener('load', function () {
  const flipCard = document.querySelector('.flip-card');
  console.log(flipCard);
  flipCard.addEventListener('click', function () {
    flipCard.classList.toggle('flipped');
  })
})
