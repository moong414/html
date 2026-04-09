document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu_toggle');
  const sideWrap = document.querySelector('.side_wrap');
  const contentsWrap = document.querySelector('.contents_wrap');
  const closeBtn = document.querySelector('.close_btn');
  const overlay = document.querySelector('.overlay');

  function isNarrow() {
    return window.matchMedia('(max-width: 1540px)').matches;
  }

  function openMenu() {
    if (!isNarrow()) return;
    sideWrap.classList.add('open');
    contentsWrap.classList.add('menu_on');
    overlay.classList.add('on');
  }

  function closeMenu() {
    if (!isNarrow()) return;
    sideWrap.classList.remove('open');
    contentsWrap.classList.remove('menu_on');
    overlay.classList.remove('on');
  }

  menuToggle.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);

  window.addEventListener('resize', () => {
    if (!isNarrow()) closeMenu();
  });
});