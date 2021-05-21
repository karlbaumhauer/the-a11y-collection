# The a11y Collection | Flip Card
In this example you will learn everything you need to know while implementing a lovely flip card into your website.

## HTML
### Example snippets
#### HTML
```html
<div class="flip-card" role="button" aria-label="click to read more" tabindex="0">
  <div class="flip-card-inner" tabindex="-1">
    <div class="flip-card-front" tabindex="-1">
        <!-- only a spcae as alt-text to indicate screenreaders that image content is nothing important. -->
      <img src="https://picsum.photos/400/500" alt=" ">
    </div>
    <div class="flip-card-back" tabindex="-1">
      <p tabindex="-1">
        Some long text which can even be too long for the flip card size and requires scrolling inside the back of the flip card.
      </p>
    </div>
  </div>
</div>
```

#### CSS
```css
.flip-card-back p:focus-visible {
  /* High contrast mode ignores box-shadow. Set outline to transparent to enable focus indication to high contras mode users. */
  outline-color: transparent;
  box-shadow: inset 0 0 3px 2px white;
}
```
#### JS
```javascript
const flipCard = document.querySelector('.flip-card');
const flipCardText = document.querySelector('.flip-card-back p');
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
```

### ARIA attributes
- Set `aria-label` on the flip card to let screenreaders tell the user what to do.

## Keyboard
| Key | Function |
|------------------|-----------------------------------------|
| <kbd>enter</kbd> | Triggers the flip card flipping toggle. |
| <kbd>space</kbd> | Triggers the flip card flipping toggle. |

## Focus Styles
The best to do would be: _leave it like it is❗️❗️❗️_
Users need it and you woun't be able to make it look nice on all browsers.

> I was thinking about changing the visuals for focus, but after replying to a couple of comments here, I realised the issue of cross-browser consistency is NOT an issue for 99.99% of users, who only use the one browser across all sites, and so NEVER see any inconsistency at all!. Therefore, each user should be left to use their preferred browser's default :focus css, as that is the ONLY criteria for consistency for THEM. If it irks you to see the inconsistencies when cross-browser testing, just let it go. No user does such tests.
[PantanjaliS on disq.us](http://disq.us/p/1fi6hzl)

If you still have the need, feeling or pressure to change it, make sure you don't mess with the users who need it.
As shown in the CSS snippet, leave the browsers outline as transparent for the users with high contrast mode and use `box-shadow` to style your own outline. This brings a few adavantages:
* transparent outlines will be ignored by high contrast modes
* box-shadow will be ignored by high contrast modes
* box-shadow will apply to border-radius

`💡` Safari ignores all that!!!😤 There is currently no way to overwrite Safaris own User-Agent-Styles.

`💡💡` The pseudo class `:focus-visible` alows you to set styles only for keyboard actions -> no outlines or focus styles for mouse interactions.

## Focus Management / Tab Order
As the card has 2 sides and you want the user only to tab on the currently visible side of the card, you need to prevent the tab order from the currently NOT visible side of the card. In addition to that, if the content is bigger than the card itself, the user need to scroll inside the card.
Therefore:
* The flip card itself, as a button role, has a `tabindex="0"`
* The inner card text has an initial `tabindex="-1"`
* Make sure the tabindex switches when the card gets flipped. See JS snippet above


## Examples
TODO