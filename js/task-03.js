const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  
  const siteUl = document.querySelector('#gallery')

  const navUl = images.map(image => {
  
  const navItem  = document.createElement('li')
  navItem.classList.add('img__item');

  const navImg = document.createElement('img');
  navImg.src = image.url;
  navImg.alt = image.alt;
  navImg.width= 300;
  navImg.height = 300;

  navItem.appendChild(navImg);
  return navItem;
  });

  siteUl.append(...navUl);