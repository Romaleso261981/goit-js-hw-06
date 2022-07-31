const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector('#value');

decBtn.addEventListener("click", decrementValue);
incBtn.addEventListener("click", incrementValue);

let counterValue = 0

function incrementValue () {
    counterValue += 1
    spanValue.textContent = counterValue
   
}

function decrementValue () {
    counterValue -= 1
    spanValue.textContent = counterValue
}


