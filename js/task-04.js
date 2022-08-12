let counterValue = 0;
const decrementEl = document.querySelector("button[data-action='decrement']");
const incrementEl = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");

const countDecrement = function() {
    counterValue -= 1;
    myValue.textContent = counterValue;
};

const countIncrement = function() {
    counterValue += 1;
    myValue.textContent = counterValue;
};


decrementEl.addEventListener("click", countDecrement);
incrementEl.addEventListener("click", countIncrement);