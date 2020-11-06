export default function getToggle() {

  let toggleMain = document.querySelector('.main-nav__toggle'),
      navList = document.querySelector('.main-nav__list'),
      nav = document.querySelector('.main-nav'),
      body = document.querySelector('body');

  function openMenu() {
    toggleMain.classList.add('active');
    nav.classList.add('main-nav--adaptive');
    body.classList.add('is-modal-open');
    navList.classList.remove('d-none');
  }

  function closeMenu() {
    toggleMain.classList.remove('active');
    nav.classList.remove('main-nav--adaptive');
    body.classList.remove('is-modal-open');
    navList.classList.add('d-none');
  }

  function changeMenu() {
    if (toggleMain.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggleMain.addEventListener('click', () => {
    changeMenu();
  });

  body.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      closeMenu();
    }
  });

  body.addEventListener('click', (e) => {
    if(e.target.classList.contains('main-nav__item') && toggleMain.classList.contains('active')) {
      changeMenu();
    };
  });
}
