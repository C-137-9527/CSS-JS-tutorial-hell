// camera viewport
const viewport = document.querySelector('.viewport');

viewport.scrollTo({ left: 500, top: 150, behavior: 'smooth' });

// --------------- CHARACTER -------------------
const character = document.querySelector('.character');
const playground = document.querySelector('.playground');

// control movement direction, initially no movement
let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;

// on press arrow key, activate direction
document.addEventListener('keydown', (e) => {
  if (!e.key.includes('Arrow')) return;

  e.preventDefault();

  // start walking animation
  character.classList.add('walking');

  // set active direction
  if (e.key === 'ArrowUp') moveUp = true;

  if (e.key === 'ArrowDown') moveDown = true;

  if (e.key === 'ArrowLeft') moveLeft = true;

  if (e.key === 'ArrowRight') moveRight = true;
});

// every 0 sec move character based on active direction
setInterval(() => {
  if (moveUp) {
    // get character current top position relative to playground
    const currentTop = character.offsetTop;

    // if character has reached top boundary, return
    if (currentTop <= 120) return;

    // keep moving up
    character.style.top = currentTop - 0.8 + 'px';

    // scroll viewport along with character
    viewport.scrollBy(0, -1);
  }

  if (moveDown) {
    // get character current top position relative to playground
    const currentTop = character.offsetTop;

    // if character has reached bottom boundary, return
    if (currentTop + character.offsetHeight >= playground.offsetHeight + 20)
      return;

    // keep moving down
    character.style.top = currentTop + 0.8 + 'px';

    // scroll viewport along with character
    viewport.scrollBy(0, 1);
  }

  if (moveLeft) {
    // get character current left position relative to playground
    const currentLeft = character.offsetLeft;

    // if character has reached left boundary, return
    if (currentLeft <= 25) return;

    // keep moving left
    character.style.left = currentLeft - 0.8 + 'px';

    // scroll viewport along with character
    viewport.scrollBy(-1, 0);
  }

  if (moveRight) {
    // get character current left position relative to playground
    const currentLeft = character.offsetLeft;

    // if character has reached right boundary, return
    if (currentLeft + character.offsetWidth >= playground.offsetWidth + 20)
      return;

    // keep moving right
    character.style.left = currentLeft + 0.8 + 'px';

    // scroll viewport along with character
    viewport.scrollBy(1, 0);
  }
}, 0);

// on release arrow key, inactivate direction
document.addEventListener('keyup', (e) => {
  if (!e.key.includes('Arrow')) return;

  if (e.key === 'ArrowUp') moveUp = false;

  if (e.key === 'ArrowDown') moveDown = false;

  if (e.key === 'ArrowLeft') moveLeft = false;

  if (e.key === 'ArrowRight') moveRight = false;

  // if has no active direction, remove walking animation
  if (!moveUp && !moveDown && !moveLeft && !moveRight)
    character.classList.remove('walking');
});

// generate html ele: grass and bricks
const grassBlocksLeft = document.querySelector('.grassBlocksLeft');
const grassBlocksRight = document.querySelector('.grassBlocksRight');
const brickBlocks = document.querySelector('.brickBlocks');

for (let i = 0; i < 35; i++) {
  grassBlocksLeft.innerHTML += `<div class='grassblock'></div>`;

  grassBlocksRight.innerHTML += `<div 
  class='grassblock'></div>`;

  brickBlocks.innerHTML += `<div class='brickBlock'></div>`;
}

// generate html ele: fence bars patterns
const fenceBars = document.querySelector('.fenceBars');
for (let i = 0; i < 12; i++) {
  fenceBars.innerHTML += `<div class='fenceBar-long'></div><div class='fenceBar-short'></div>`;
}
