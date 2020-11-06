export default function getToggle() {

  let toggleMain = document.querySelector('.main-nav__toggle'),
      navList = document.querySelector('.main-nav__list'),
      nav = document.querySelector('.main-nav'),
      body = document.querySelector('body');

  function changeMenu() {
    toggleMain.classList.toggle('active');
    navList.classList.toggle('d-none');

    if (toggleMain.classList.contains('active')) {
      nav.classList.add('main-nav--adaptive');
      body.classList.add('is-modal-open');

    } else {
      nav.classList.remove('main-nav--adaptive');
      body.classList.remove('is-modal-open');
    }
  }

  toggleMain.addEventListener('click', () => {
    changeMenu();
  });

  body.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      changeMenu();
    }
  });

  body.addEventListener('click', (e) => {
    if(e.target.classList.contains('main-nav__item') && toggleMain.classList.contains('active')) {
      changeMenu();
    };
  });

}
