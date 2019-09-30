function Pessoa() {
    this.idade = 0;

    const self = this;
    setInterval(function() {
        self.idade++;
        console.log(this.idade);
    }.bind(self), 1000)//1 segundo
}

new Pessoa 