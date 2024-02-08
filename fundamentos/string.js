const mensagem = "Hello, World";

console.log(mensagem.charAt(4));
console.log(mensagem.charCodeAt(3)); // Codigo na tabela unicode.
console.log(mensagem.indexOf('W'));

console.log(mensagem.substring(1)); // Vai ate o final a partir do index chamado.
console.log(mensagem.substring(0, 4)); // Nao inclui o index 4.

console.log(mensagem + '!');
console.log(mensagem.replace(',', '.'));

console.log('Ana,Maria,Pedro'.split(',')); // Gerando array com split.
