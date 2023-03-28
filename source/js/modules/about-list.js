const descriptionElements = document.querySelectorAll('[data-about-description]');
const buttonElement = document.querySelector('[data-about-button]');

const descriptionToggle = () => {
  descriptionElements.forEach((item) => {
    if (item.classList.contains('is-open')) {
      item.classList.remove('is-open');
      descriptionElements[0].classList.add('is-mobile');
      descriptionElements[1].classList.add('is-hidden');
      descriptionElements[2].classList.add('is-hidden');
      buttonElement.textContent = 'Подробнее';
    } else {
      item.classList.remove('is-hidden');
      item.classList.remove('is-mobile');
      item.classList.add('is-open');
      buttonElement.textContent = 'Свернуть';
    }
  });
};

const onAboutButtonClick = () => {
  buttonElement.addEventListener('click', descriptionToggle);
};

export {onAboutButtonClick};
