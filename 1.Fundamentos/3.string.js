const escola = "Cod3r";

console.log(escola.charAt(4)); //retorna letra do indice 4
console.log(escola.charCodeAt(3)); //retorna valor na tabela ascii da letra no indice 3
console.log(escola.indexOf('o')); //retorna indice que contem caracter 'o'
console.log(escola.substring(1)); //retorna valor a partir do indice 1

console.log(escola.substring(0, 3)); //retorna valor do indice 0, os proximos 3 índices
console.log('Escola '.concat(escola).concat("!"));//concatenando
console.log('Escola ' + escola + "!"); //concatenando

console.log(escola.replace(3, 'e')); // substitui letra no indice 3 por letra 'e'
console.log('Eduardo,Felipe,Luiz'.split(','));//gera um array onde delimita cada elemento com ','
