const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputRef.addEventListener("input", fn1);
function fn1(element) {
    text.style.fontSize = `${element.target.value}px`;
};