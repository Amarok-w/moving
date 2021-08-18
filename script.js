const navBox = document.querySelector('#nav__box');


navBox.addEventListener('change', el => {
  if (el.target.checked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
})


