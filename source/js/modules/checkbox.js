const checkboxElements = document.querySelectorAll('[data-checkbox]');

const checkboxToggle = (e) => {
  const targetCheckbox = e.target;
  const field = targetCheckbox.closest('[data-checkbox-field]');
  const checkboxIcon = field.querySelector('[data-checkbox-icon]');
  const checkboxInput = field.querySelector('[data-checkbox-input]');

  if (checkboxInput.checked) {
    checkboxInput.checked = false;
    checkboxIcon.classList.remove('is-checked');
    checkboxIcon.classList.add('is-hidden');
  } else {
    checkboxInput.checked = true;
    checkboxIcon.classList.remove('is-hidden');
    checkboxIcon.classList.add('is-checked');
  }
};

const onCheckboxClick = () => {
  checkboxElements.forEach((item) => {
    item.addEventListener('click', (e) => checkboxToggle(e));
  });
};

export {onCheckboxClick};
