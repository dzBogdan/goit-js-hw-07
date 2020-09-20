const SetValue = {
    Value:0,
    SetIncrement() {
        this.Value += 1;
    },
    SetDicrement() {
        this.Value -= 1;
    },
};

const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDicrement = document.querySelector('[data-action="decrement"]');
const spValue = document.querySelector('#value');

btnIncrement.addEventListener('click',function(){
    SetValue.SetIncrement();
    spValue.textContent = SetValue.Value;
});

btnDicrement.addEventListener('click',function(){
    SetValue.SetDicrement();
    spValue.textContent = SetValue.Value;
});


