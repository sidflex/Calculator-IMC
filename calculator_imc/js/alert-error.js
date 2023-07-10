const Alert = {
  elementError: document.querySelector('.alert-error'),

  open(){Alert.elementError.classList.add('open')},
  close(){Alert.elementError.classList.remove('open')}
}

export {Alert}