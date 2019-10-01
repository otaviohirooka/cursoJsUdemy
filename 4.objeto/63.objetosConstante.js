//costante pessoa só pode ser atribuida uma unica vez porem pode alterar o conteudo do atributo nome
const pessoa = { nome: 'Xhaka' };
pessoa.nome = 'Dokho';
console.log(pessoa);

//pessoa = { nome: 'Milo' };

Object.freeze(pessoa);//objeto congelado, linhas 9, 10 e 11 não acontecerão
pessoa.nome = 'Afrodite';
pessoa.end = 'Casa de peixes';
delete pessoa.nome;

console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Mu'});
console.log(pessoaConstante);