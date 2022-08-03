
const refs = {
  valueToInput: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  divsContainer: document.querySelector('#boxes'),
};
let startBoxSizing = 30;
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateCounterInValueInput (value) {
  refs.valueToInput.setAttribute('counter', value.currentTarget.value);
};

let allDivsEl = [];
function onCreateBoxes() {
 
  for (let i = 1; i <= refs.valueToInput.getAttribute('counter'); i += 1) {
    startBoxSizing += 10;
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('box-item');
    createdDiv.style.width = `${startBoxSizing}px`;
    createdDiv.style.height = `${startBoxSizing}px`;
    createdDiv.style.backgroundColor = `${getRandomHexColor()}`;
    createdDiv.style.marginBottom = '10px';
    allDivsEl.push(createdDiv);
    refs.divsContainer.append
  }
  refs.divsContainer.append(...allDivsEl);
};

function onDestroyBoxes () {
  refs.divsContainer.innerHTML = '';
  // refs.valueToInput.removeAttribute('counter');
  refs.valueToInput.value = '';
  allDivsEl = [];
  startBoxSizing = 30;
};

refs.valueToInput.addEventListener('input', onCreateCounterInValueInput);
refs.createBtn.addEventListener('click', onCreateBoxes);
refs.destroyBtn.addEventListener('click',onDestroyBoxes);
