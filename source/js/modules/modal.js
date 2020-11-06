export default function getModal() {

  let body = document.querySelector('body');
  let wrapper = document.querySelector('.wrapper__modal');
  let modal = document.querySelector('.modal');
  let modalClose = document.querySelector('.modal__close');
  let btns = document.querySelectorAll('.btn');
  let aboutMore = document.querySelector('[data-id="btn-about"]');

  function open() {
    wrapper.classList.remove('visually-hidden');
    wrapper.classList.add('overlay');
    body.classList.add('is-modal-open');
    return modal;
  }

  function close() {
    wrapper.classList.add('visually-hidden');
    wrapper.classList.remove('overlay');
    body.classList.remove('is-modal-open');
  }

  aboutMore.addEventListener('click', () => {
    open();
  });

  modalClose.addEventListener('click', () => close());

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
