const nav = document.querySelector('#header');

window.addEventListener('scroll', () => {
  let y = window.pageYOffset;
  y > 200 ? nav.classList.add('js-header-bg') : nav.classList.remove('js-header-bg');
});