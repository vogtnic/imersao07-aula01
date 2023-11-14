/* Desafios desta aula!
    Deseja ir além? Experimente estes desafios:

    - Adicionar outras moedas para converter;
    - Retornar o nome do usuário

*/


// cotação pelo google no dia 13/11/2023
let cotacaoRealEuro = 5.25; // cotação do real para euro
let cotacaoRealDolar = 4.91; // cotação do dólar para euro
let cotacaoBitcoinReal = 180.669; // cotação da bitcoin para real
let cotacaoBitcoinDolar =  36.762; // cotação da bitcoin para dolar
let cotacaoBitcoinEuro = 34.346; //cotação da bitcoin para euro

// valor de 1 real para dólar e euro
let umRealParaDolar = 0.20;
let umRealParaEuro = 0.19;

// valor de 1 real, dólar e euro em bitcoins
let umRealBitcoin = 0.0000056;
let umDolarBitcoin = 0.000027;
let umEuroBitcoin = 0.000029;

let option
let userName = prompt('Olá, qual é o seu nome?')
//criando o menu de opções
while (option != 4) {
  option = Number(
    prompt(
      `
      Seja bem-vindo(a) ${userName}! Digite o número da opção desejada:
      
      1. Cotação atual do dólar e euro para real.
      2. Cotação atual da bitcoin para real, dólar e euro.
      3. Calcular valor desejado.
      4. Sair do programa.
      `
    )
  )

  switch (option) {
    case 1:
      alert(
        `
        Ótima escolha ${userName}!
        A cotação atual do dólar em real é: R$${cotacaoRealDolar}.
        A cotação atual do euro em real é: R$${cotacaoRealEuro}.
        `
      )
      break;
      
    case 2:
      alert(
        `
        Perfeita escolha ${userName}!
        O valor da conversão da bitcoin para real, dólar e euro
        é respectivamente:
        1 Bitcoin = R$${cotacaoBitcoinReal}.
        1 Bitcoin = US$${cotacaoBitcoinDolar}.
        1 Bitcoin = €${cotacaoBitcoinEuro}.
        `
      )
      break;

    case 3:
        let conversion
        while (conversion != 6) {
          conversion = Number(
            prompt(
              `
              Olá ${userName}, escolha a opção desejada para calcular
              a conversão:
              1. Real para dólar.
              2. Real para euro.
              3. Real para bitcoin.
              4. Dólar para bitcoin.
              5. Euro para bitcoin.
              6. Voltar ao menu principal.
              `
            )
          )
          if (conversion === 1) {
            let realEmDolar = prompt("Digite o valor em real para ser convertido em dólar.")
            alert(
              `
                O valor da conversão é: US$ ${(umRealParaDolar * realEmDolar).toFixed(2)}
              `
            )
          }
          else if (conversion === 2) {
            let realEmEuro = prompt("Digite o valor em real para ser convertido em euro.")
            alert(
              `
                O valor da conversão é: € ${(umRealParaEuro * realEmEuro).toFixed(2)}
              `
            )
          }
          else if (conversion === 3) {
            // solicitando ao usuário o número desejado de reais para conversão em bitcoins
            let realEmBitcoin = prompt("Digite o valor em real para ser convertido em bitcoin.")
            // calculando valor de bitcoins com o número desejado de reais
            let calculatorRealBitcoin = umRealBitcoin * realEmBitcoin
            // se o resultado da conversão for maior ou igual a 1 ele usa apenas 2 casas decimais depois da virgula, se não for ele usa até 6 casas decimais
            if (calculatorRealBitcoin >= 1){
              alert(
                `
                  O valor da conversão é: ₿ ${(calculatorRealBitcoin).toFixed(2)}
                `
              )
            } else {
              alert(
                `
                  O valor da conversão é: ₿ ${(calculatorRealBitcoin).toFixed(6)}
                `
                )
            }
            
          }
          else if (conversion === 4) {
            // solicitando ao usuário o número desejado de dólares para conversão em bitcoins
            let dolarEmBitcoin = prompt("Digite o valor em dólar para ser convertido em bitcoin.")
            // calculando valor de bitcoins com o número desejado de dólares
            let calculatorDolarBitcoin = umDolarBitcoin * dolarEmBitcoin
             // se o resultado da conversão for maior ou igual a 1 ele usa apenas 2 casas decimais depois da virgula, se não for ele usa até 6 casas decimais
            if (calculatorDolarBitcoin >= 1) {
              alert(
                `
                  O valor da conversão é: ₿ ${(calculatorDolarBitcoin).toFixed(2)}
                `
              )
            } else {
              alert(
                `
                  O valor da conversão é: ₿ ${(calculatorDolarBitcoin).toFixed(6)}
                `
                )              
            }
            
          }
          else if (conversion === 5) {
            // solicitando ao usuário o número desejado de euros para conversão em bitcoins
            let euroEmBitcoin = prompt("Digite o valor em euro para ser convertido em bitcoin.")
            // calculando valor de bitcoins com o número desejado de euros
            let calculatorEuroBitcoin = umEuroBitcoin * euroEmBitcoin
            // se o resultado da conversão for maior ou igual a 1 ele usa apenas 2 casas decimais depois da virgula, se não for ele usa até 6 casas decimais
            if (calculatorEuroBitcoin >= 1) {
            alert(
              `
                O valor da conversão é: ₿ ${(calculatorEuroBitcoin).toFixed(2)}
              `
            )
          } else {
            alert(
              `
                O valor da conversão é: ₿ ${(calculatorEuroBitcoin).toFixed(6)}
              `
              )
          }
          }
          else if (conversion === 6) {
            alert("Voltando em 3, 2, 1....")
          }
          else {
            alert("Opção inválida :(")
          }
        }
    break;

    case 4:
      alert("Obrigado pela visita, até a próxima!")
    break;

    default:
      alert("Opção inválida :(")
  }
}