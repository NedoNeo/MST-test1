document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbur');
    const burger = document.querySelector('.nav-wrapper');
    const list = document.querySelector('.nuv-list');

 window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';   
  } else {
    navbar.style.backgroundColor = 'rgba(255 255 255 / 0%)';}});  

    if (window.matchMedia("(max-width: 1100px)").matches) {
      burger.addEventListener('click', () => {
        if(!list.classList.contains('active')) {
          list.style.display = 'flex';
          list.classList.add('active');
        } else {
          list.classList.remove('active');
          list.style.display = 'none';
        }
      })
    } 
    
  
}) 