const navBox = document.querySelector('#nav__box');
const menu = document.querySelector('.menu');

navBox.addEventListener('change', el => {
  if (el.target.checked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
})

if (window.matchMedia("(max-width: 768px)")) {
  menu.addEventListener('click', () => {
    // console.log(!navBox.checked);
    navBox.checked = !navBox.checked;
    document.body.style.overflow = 'visible';  
  })
}
