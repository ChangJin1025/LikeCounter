const heart = document.getElementById('heart');
const counter = document.getElementById('counter');

let count = 0;

heart.addEventListener('click', () => {
  count++;
  counter.textContent = count;

  // Animate heart briefly
  heart.classList.add('clicked');
  setTimeout(() => {
    heart.classList.remove('clicked');
  }, 200);
});
