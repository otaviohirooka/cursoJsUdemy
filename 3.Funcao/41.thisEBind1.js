const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar();//conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
//função bind amarra um determinado objeto para ele ser o dono da execução de um metodo, quando ele eh chamado
falarDePessoa();