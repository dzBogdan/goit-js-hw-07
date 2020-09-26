const inputEl = document.querySelector('#font-size-control');
const spanEl  = document.querySelector('#text');

spanEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input',onRanzh);

function onRanzh(){

    spanEl.style.fontSize = `${inputEl.value}px`;
    
    
}