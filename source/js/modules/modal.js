export default function getModal() {

  let body = document.querySelector('body');
  let wrapper = document.querySelector('.wrapper__modal');
  let modal = document.querySelector('.modal__inner');
  let modalClose = document.querySelector('.modal__close');
  let btns = document.querySelectorAll('.btn');
  let btnMore = document.querySelector('[data-id="btn-about"]');
  let btnClose = document.querySelector('[data-id="btn-close"]');
  let toggleMain = document.querySelector('.main-nav__toggle');

  function open() {
    modal.scrollTo(0, 0);

    wrapper.classList.remove('visually-hidden');
    wrapper.classList.add('overlay');
    body.classList.add('is-modal-open');
    toggleMain.style.display = 'none';
  }

  function close() {
    wrapper.classList.add('visually-hidden');
    wrapper.classList.remove('overlay');
    body.classList.remove('is-modal-open');
    toggleMain.style.display = '';
  }

  btnMore.addEventListener('click', () => {
    open();
  });

  modalClose.addEventListener('click', () => close());
  btnClose.addEventListener('click', () => close());

  body.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      close();
      btns.forEach(el => el.blur());
    }
  });

  body.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('is-modal-open')) {
      close();
    };
  });
}
