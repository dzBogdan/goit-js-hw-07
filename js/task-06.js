const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur',onLostFocus);

function onCliar(){
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');   
}

function onLostFocus(event){
 
 inputEl.classList.remove('valid');
 inputEl.classList.remove('invalid');

 const arrChars = event.currentTarget.value;
 
 if (arrChars.length <= 6 ){
 inputEl.classList.add('valid');
 }
 else{
 inputEl.classList.add('invalid');
 }
}
