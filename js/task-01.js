const ulEl = document.querySelector('#categories');
const allUlEl = ulEl.querySelectorAll('.item');

for (const UlEl of allUlEl) {
    const h2El = UlEl.querySelector('h2')
    const ilEl = UlEl.querySelectorAll('li');

    console.log('Категория: ',h2El.textContent);
    console.log('Количество элементов: ',ilEl.length);
    
}