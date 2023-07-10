import { notANumber, calculateIMC } from "./utils.js"
import {Modal} from "./modal.js"  
import { Alert } from "./alert-error.js"
import { textToggle } from "./textToggle.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => Alert.close()
inputHeight.oninput = () => Alert.close()

form.onsubmit = event => {
  event.preventDefault()

  let Weight = inputWeight.value
  let Height = inputHeight.value

  const errorChecking = notANumber(Weight) || notANumber(Height)
  
  if(errorChecking){
    Alert.open()
    return
  }

  Alert.close()

  const result = calculateIMC(Weight, Height)
  displayResultMessage(result)

  const box = result
  textToggle(box)

  inputWeight.value = ""
  inputHeight.value = ""
}

function displayResultMessage(result){
  const Message = `Seu IMC é de ${result}`

  Modal.message.innerText = Message 
  Modal.open()
}



