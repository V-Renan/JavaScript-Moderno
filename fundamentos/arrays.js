const valores = [7.7,8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // undefined.

valores[4] = 10;
console.log(valores);
console.log(valores.length); // Acessar a quantidade de elementos.

valores.push({id: 3}, false, null, 'teste'); // Funcao para adicionar elementos.
console.log(valores);

console.log(valores.pop()); // Funcao para retirar o ultimo elemento do array;
delete valores[0];
console.log(valores);

console.log(typeof valores);