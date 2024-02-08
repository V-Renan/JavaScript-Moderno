const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // 1.0 no JavaScript e considerado como inteiro, diferentimente do java que seria um Double por exemplo.
console.log(Number.isInteger(peso2));

const avaliacai1 = 9.871;
const avaliacai2 = 6.871;

const total = avaliacai1 * peso1 + avaliacai2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed usado para exibir a quantidade de casas decimais exigida.
console.log(media.toString()); // Para converter para binario toString(2).
console.log(typeof media);