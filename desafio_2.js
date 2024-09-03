const numero = 5;
const numerosFibo = [];

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

for (let i = 0; i <= numero; i++) {
    numerosFibo.push(fibonacci(i));
}

if (numerosFibo.includes(numero)) {
    console.log(`O numero ${numero} pertence a sequencia`);
} else {
    console.log(`O numero ${numero} não pertence a sequencia`);
}
