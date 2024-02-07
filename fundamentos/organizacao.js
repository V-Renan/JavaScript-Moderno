let mensagem = "Hello, world!";
let mensagemAluno;

console.log(mensagem);

function calculaMedia(n1, n2) {
    let soma = n1 + n2;
    media = soma / 2;
    if (media > 7) {
        mensagemAluno = `Aprovado! media: ${media}`;
        console.log(mensagemAluno);
    } else {
        mensagemAluno = `Reprovado! media: ${media}`;
        console.log(mensagemAluno);
        
    }
}
calculaMedia(7,8);
