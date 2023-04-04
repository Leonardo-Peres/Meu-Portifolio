//responsive header
function menuShow(){
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open')
    } else{
    menuMobile.classList.add('open')
  }
}

//animation on scroll
ScrollReveal({ 
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('#photo', { delay: 500, origin: 'rigth' });
ScrollReveal().reveal('.text', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.icon', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('#about', { delay: 500, origin: 'rigth', interval: 500 });
ScrollReveal().reveal('.myInformations', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.divisoriesText', { delay: 500, origin: 'rigth', interval: 200 });
ScrollReveal().reveal('.title', { delay: 500, origin: 'left', interval: 800 });
ScrollReveal().reveal('#technologies', { delay: 500, origin: 'rigth', interval: 500 });
ScrollReveal().reveal('.subtitle', { delay: 500, origin: 'left', interval: 500 });
ScrollReveal().reveal('.forEachImage', { delay: 500, origin: 'bottom', interval: 200});
ScrollReveal().reveal('h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('#certificates', { delay: 500, origin: 'rigth', interval: 500 });
ScrollReveal().reveal('#contactArea', { delay: 500, origin: 'rigth'});
ScrollReveal().reveal('.contentbox', { delay: 500, origin: 'rigth'});
ScrollReveal().reveal('.inputs', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('#submit', { delay: 500, origin: 'bottom', interval: 200 });





