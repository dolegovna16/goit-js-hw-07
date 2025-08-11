function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const buttonChange = document.querySelector('.change-color');
const numberColor = document.querySelector('.color');

buttonChange.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  numberColor.textContent = body.style.backgroundColor;
});