const inputEl = document.querySelector('#name-input');
const spanEl  = document.querySelector('#name-output');

inputEl.addEventListener('input',onInput);

function onInput(event){
    if(event.currentTarget.value === ''){
        spanEl.textContent = 'незнакомец';
    }else {
          spanEl.textContent = event.currentTarget.value;
    }

}