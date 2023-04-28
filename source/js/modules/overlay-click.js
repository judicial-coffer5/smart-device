const overlayElement = document.querySelector('[data-modal]');

const closeModal = (e) => {
  if (e.target === overlayElement) {
    overlayElement.classList.remove('is-open');
    overlayElement.classList.add('is-hidden');
  }
};

const overlayClick = () => {
  overlayElement.addEventListener('click', (e) => closeModal(e));
};

export {overlayClick};
