const phoneInputs = document.querySelectorAll('[data-tel-input]');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g, '');
};

const onPhonePaste = (e) => {
  let input = e.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let pasted = e.clipboardData || window.clipboardData;
  if (pasted) {
    let pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
      return;
    }
  }
};

const onPhoneInput = (e) => {
  let input = e.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let selectionStart = input.selectionStart;
  let formattedInputValue = '';
  if (!inputNumbersValue) {
    input.value = '';
    return;
  }
  if (input.value.length !== selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputNumbersValue;
    }
    return;
  }
  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
    let firstSymbols = '+7';
    formattedInputValue = input.value = firstSymbols + ' ';
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += ' ' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += ' ' + inputNumbersValue.substring(9, 11);
    }
  }
  input.value = formattedInputValue;

  if (inputNumbersValue.length < 11) {
    input.setCustomValidity('Введите корректный номер телефона');
  } else {
    input.setCustomValidity('');
  }
};

const onPhoneKeyDown = (e) => {
  let inputValue = e.target.value.replace(/\D/g, '');
  if (e.keyCode === 8 && inputValue.length === 1) {
    e.target.value = '';
  }
};

const phoneInputActions = () => {
  for (let phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
};

export {phoneInputActions};
