window.addEventListener('load', function () {
  const flipCard = document.querySelector('.flip-card');
  const flipCardText = document.querySelector('.flip-card-back p');

  // TODO: prevent auto tabbing from 'back' link to card

  flipCard.addEventListener('click', function () {
    // remove focus from card elements befor flipping on mouse click -> prevents outlines to be visible on flipping the card.
    flipCardText.blur();
    flipCard.blur();
    // then flip the card.
    flipCard.classList.toggle('flipped');
  })

  flipCard.addEventListener('keydown', function (e) {
    const keyD = e.key !== undefined ? e.key : e.keyCode;

    if ((keyD === 'Enter' || keyD === 13) || (['Spacebar', ' '].indexOf(keyD) >= 0 || keyD === 32)) {
      e.preventDefault();
      flipCard.classList.toggle('flipped');
    }

    if (flipCard.classList.contains('flipped')) {
      // set focus to inner card text.
      flipCard.blur();
      flipCardText.focus();
      // give users the possibility to tab into inner text and remove card from tab order.
      flipCardText.setAttribute('tabindex', '0');
      flipCard.setAttribute('tabindex', '-1');
    } else {
      setTimeout(() => {
        // set focus back to the card itself.
        flipCard.focus();
        flipCardText.blur();
        // remove inner card text and add card itself back to tab order.
        flipCardText.setAttribute('tabindex', '-1');
        flipCard.setAttribute('tabindex', '0');
      }, 800) // align timeout with the transition time of flipping the card. Otherwise the outline will be visible while flipping the card -> looks strange.
    }
  })
})
