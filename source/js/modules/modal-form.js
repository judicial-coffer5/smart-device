const modalElement = document.querySelector('[data-modal]');
const modalButtons = document.querySelectorAll('[data-modal-button]');
const nameInput = document.querySelector('[data-input="name"]');

const openModal = () => {
  if (modalElement.classList.contains('is-hidden')) {
    modalElement.classList.remove('is-hidden');
    modalElement.classList.add('is-open');
    nameInput.focus();
    document.body.style.overflow = 'hidden';
  } else {
    modalElement.classList.remove('is-open');
    modalElement.classList.add('is-hidden');
    document.body.style.overflow = '';
  }
};

const closeModal = (e) => {
  if (e.key === 'Escape') {
    modalElement.classList.remove('is-open');
    modalElement.classList.add('is-hidden');
  }
};

const onModalButtonClick = () => {
  modalButtons.forEach((item) => {
    item.addEventListener('click', openModal);
    document.addEventListener('keydown', closeModal);
  });
};

export {onModalButtonClick};
