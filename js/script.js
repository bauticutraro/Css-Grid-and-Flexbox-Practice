const nav = document.querySelector('#header');

window.addEventListener('scroll', () => {
  let y = window.pageYOffset;
  if (y > 150) {
    nav.classList.add('js-header-bg');
  }
  else if (y === 0)
    nav.classList.remove('js-header-bg');
});