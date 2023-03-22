const buttonElements = document.querySelectorAll('[data-button]');
const listElements = document.querySelectorAll('[data-list]');
const iconElements = document.querySelectorAll('[data-button-icon]');

const listToggle = (e) => {
  const targetButton = e.target;
  const section = targetButton.closest('[data-section]');
  const buttonIcon = section.querySelector('[data-button-icon]');
  const list = section.querySelector('[data-list]');

  if (list.classList.contains('is-hidden')) {

    listElements.forEach((item) => {
      item.classList.add('is-hidden');
    });

    iconElements.forEach((item) => {
      item.setAttribute('xlink:href', './img/sprite.svg#plus');
    });

    list.classList.add('is-open');
    list.classList.remove('is-hidden');
    buttonIcon.setAttribute('xlink:href', './img/sprite.svg#minus');
  } else {

    listElements.forEach((item) => {
      item.classList.add('is-hidden');
    });

    iconElements.forEach((item) => {
      item.setAttribute('xlink:href', './img/sprite.svg#plus');
    });

    list.classList.add('is-hidden');
    list.classList.remove('is-open');
    buttonIcon.setAttribute('xlink:href', './img/sprite.svg#plus');
  }
};

const footerActions = () => {
  buttonElements.forEach((button) => {
    button.addEventListener('click', (e) => listToggle(e));
  });
};

export {footerActions};