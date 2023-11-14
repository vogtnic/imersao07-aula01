/*Desafios desta aula!
  Deseja ir além? Experimente estes desafios:

  - Criar um conversor de quilômetros para anos-luz e descobrir o tempo necessário para viajar de uma estrela para outra
*/

let userName = prompt("Qual é o seu nome?")
let option
while (option != 5) {
  option = Number(
    prompt(
      `
      Seja bem vindo(a) ${userName} ao conversor de Anos-luz!
      Digite a opção desejada:
      1. Converter anos-luz em metros
      2. Converter anos-luz em quilômetros
      3. Sirius - A estrela mais brilhante
      4. As 3 maiores estrelas
      5. Sair do programa.
      `
    )
  )
  switch(option) {
    case 1:
      let anosLuzMetros = Number(prompt("Qual a quantidade de Anos-luz você gostaria de converter para metros?"))
      alert(
        `
        A quantidade necessária para percorrer é de: ${(anosLuzMetros * 9.460000000000000)} (quaseinfinitos) metros.
        `
      )
      break;
    case 2:
      let anosLuzKm = Number(prompt("Qual a quantidade de Anos-luz você gostaria de converter para quilômetros?"))
      alert(
        `
        A quantidade necessária para percorrer é de: ${(anosLuzKm * 9.460000000000)} (quaseinfinitos) quilômetros.
        `
      )
      break;
      case 3:
        const sirius = 8.611;
        alert(
          `
          Você sabia?
          A estrela Sirius é considerada, simultaneamente, a segunda estrela mais brilhante e a mais brilhante do céu noturno.
          A distância entre ela e a terra é de: ${sirius} Anos-luz.
          Em km's conta com a distância de: ${sirius * 9.460000000000}!
          `
        )
      break;
    case 4:
      const vyCanis = 4.892;
      const woh = 163.100;
      const cephei = 9.000;
      alert(
        `
        O Top 3 maiores estrelas:

        1. VY Canis Majoris: Essa hipergigante possui um brilho avermelhado, sendo 2.100 vezes maior que o Sol em diâmetro. Para  se ter ideia de sua magnitude, dentro dela caberia quase três bilhões de planetas iguais à Terra.
          A distância entre VY e a terra é: ${vyCanis} Anos-luz.
          Em km's conta com a distância de: ${vyCanis * 9.460000000000}!

        2. WOH G64: É outra hipergigante vermelha e possui um diâmetro de 2.000 sóis.
          A distância entre WOH G64 e a terra é: ${woh} Anos-luz.
          Em km's conta com a distância de: ${woh * 9.460000000000}!

        3. V354 Cephei: Essa estrela está classificada na categoria de supergigante e seu diâmetro é de 1.520 sóis.
          A distância entre V354 e a terra é: ${cephei} Anos-Luz.
          Em km's conta com a distância de: ${cephei * 9.460000000000}!
        `
      )
    break;
    case 5:
      alert("Obrigado pela visita, até logo!")
    break;
    default: 
      alert("Opção inválida :(")
  }
}


