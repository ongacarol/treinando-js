/*Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula. */

const MONTHS = {
    "1": "Janvier",
    "2": "Février",
    "3": "Mars",
    "4": "Avril",
    "5": "Mai",
    "6": "Juin",
    "7": "Juillet",
    "8": "Août",
    "9": "Septembre",
    "10": "Octobre",
    "11": "Novembre",
    "12": "Décembre",
    "default": prompt("Digitou errado"), //PQ ESSE APARECE PRIMEIRO??
  };
  
  const input = prompt("Digite um valor de 1 a 12:"); 
  
  console.log(MONTHS[input] ? MONTHS[input] : MONTHS["default"]);

  alert(`O mês referente a ${input} é ${MONTHS[input]}.`);

  // fiz um if ternário, tô vendo aqui se no dicionário de meses existe o que o usuario digitou, se existe eu printo o que o usuário digitou, de nao existe eu printo um valor default ou erro (esse finalzinho não precisava mas é bom ter um caso pra fallback)