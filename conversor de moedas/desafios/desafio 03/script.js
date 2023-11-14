/*
Desafios desta aula!
Deseja ir além? Experimente estes desafios:

Desenvolver um conversor de temperaturas entre Fahrenheit, Kelvin e Celsius;
*/



let userName = prompt("Qual é o seu nome?")
let option
while (option != 4) {
  option = Number(
    prompt(
      `
      Seja bem vindo(a) ${userName} ao conversor de temperatura!
      Digite a opção desejada:
      1. Converter celsius em fahrenheit e kelvin.
      2. Converter fahrenheit em celsius e kelvin.
      3. Converter kelvin em fahrenheit e celsius.
      4. Sair do programa.
      `
    )    
  )

  switch(option) {
    case 1:
    let celsius = Number(prompt("Quantos graus Celsius você deseja converter?"))
    alert(
      `
      A conversão de ${celsius} graus celsius é:
      Em fahrenheit: ${(celsius * 1.8 + 32).toFixed(2)}°F.
      Em kelvin: ${(celsius + 273.15).toFixed(2)}K.
      `
    )
    break;
    case 2:
    let fahrenheit = Number(prompt("Quantos graus Fahrenheit você deseja converter?"))
    alert(
      `
      A conversão de ${fahrenheit} graus fahrenheit é:
      Em celsius: ${((fahrenheit - 32) / 1.8).toFixed(2)}°C.
      Em kelvin: ${((fahrenheit + 459.67) / 1.8).toFixed(2)}K.
      `
    )
    break;
    case 3:
      let kelvin = Number(prompt("Quantos graus Kelvin você deseja converter?"))
      alert(
        `
        A conversão de ${kelvin} kelvins é:
        Em celsius: ${(kelvin - 273.15).toFixed(2)}°C.
        Em fahrenheit: ${((kelvin - 273.15) * 1.8 + 32).toFixed(2)}°F.
        `
      )
    break;
    case 4:
      alert("Obrigado pela visita, volte sempre!")    
    break;
    default:
      alert("Opção inválida :(")
  }
}