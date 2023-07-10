export function textToggle(result){
  const titleLow = document.querySelector('.onText')

  if (result < 18.5){
    titleLow.innerText = `[Abaixo do peso| 
      IMC abaixo de 18,5] `
  }
  if(result >= 18.6 && 24.9){
    titleLow.innerText = `[Peso ideal (parabéns)| 
      entre 18,6 e 24,9]  `
  }
  if(result >= 25.0 && 29.9){
    titleLow.innerText = `[Levemente acima do peso| 
      entre 25,0 e 29,9]  `
  }
  if(result >= 30 && 34.9){
    titleLow.innerText = `[Obesidade grau I | 
      entre 30,0 e 34,9]  `
  }
  if(result >= 35 && 39.9){
    titleLow.innerText = `[Obesidade grau II (severa) | 
      entre 35,0 e 39,9]  `
  }
  if(result > 40){
    titleLow.innerText = `[Obesidade III (mórbida) | 
      acima de 40]  `
  }

  
  }
  