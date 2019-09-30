function tratarErroELancar(erro) {
    //throw new Error('...');
    //throw 10;
    //throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
    }
}

function imprimiNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Eduardo' } //erro de digitação que será tratado
imprimiNomeGritado(obj);