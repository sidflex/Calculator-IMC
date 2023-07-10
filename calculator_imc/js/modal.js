export const Modal ={
  whapper: document.querySelector('.modal-whapper'),
  card: document.querySelector('.modal card'),
  message: document.querySelector('.modal .title span'),

  buttonClose:  document.querySelector('.modal button.close'),

  open(){Modal.whapper.classList.add("open")},
  close(){Modal.whapper.classList.remove("open")}
}
Modal.buttonClose.onclick = event => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
  if(event.key == 'Escape')
    Modal.close()
}