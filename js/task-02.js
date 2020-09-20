const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

 const navUlEl = document.querySelector('#ingredients');

 const liElement = ingredients.map(ingredient => { 
    const  navEl = document.createElement('li');  
    navEl.textContent = ingredient;
    return navEl;
 } );
 
navUlEl.append(...liElement); 