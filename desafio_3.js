const maior = (n) => {
  let maior = n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i] > maior) {
      maior = n[i];
    }
  }
  return maior;
};

const menor = (n) => {
  let menor = n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i] < menor) {
      menor = n[i];
    }
  }
  return menor;
};

const faturamentoDiario = [
  118, 537, 492, 483, 628, 955, 407, 605, 581, 18, 718, 97, 363, 153, 346, 16,
  822, 350, 32, 144, 486, 799, 732, 297, 77, 296, 116, 645, 774, 958, 0,
];

let soma = 0;
let cont = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] === 0) {
    continue;
  } else {
    soma = soma + faturamentoDiario[i];
  }
}

const media = (soma / faturamentoDiario.filter((num) => num !== 0).length.toFixed(2));

for (let i = 0; i < faturamentoDiario.length; i++) {
    if(faturamentoDiario[i] > media){
        cont++;
      }
}

console.log(`O menor valor de faturamento diário foi: ${menor(faturamentoDiario)} e o maior foi: ${maior(faturamentoDiario)} a média de faturamento diário foi: ${media.toFixed(2)} e ${cont} dias tiveram faturamento acima da média`);

