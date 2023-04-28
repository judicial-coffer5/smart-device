const popupElements = document.querySelectorAll('[data-popup-element]');
const popup = document.querySelector('[data-modal]');

const modalTabActions = () => {
  for (let i = 0; i < popupElements.length; i++) {
    const currentElement = popupElements[i];
    const nextElement = popupElements[i + 1] || popupElements[0];
    const prevElement = popupElements[i - 1] || popupElements[popupElements.length - 1];

    currentElement.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();
        prevElement.focus();
      }
    });

    currentElement.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && !e.shiftKey) {
        e.preventDefault();
        nextElement.focus();
      }
    });
  }

  popup.addEventListener('open', function () {
    popupElements[0].focus();
  });
};

export {modalTabActions};
