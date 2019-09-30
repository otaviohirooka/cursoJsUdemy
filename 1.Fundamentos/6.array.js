const valores = [7.7, 8.9, 4.3];
console.log(valores[2]);
console.log(valores[3]);//undefined

valores[3] = 10;//agora array tem 4 elementos
console.log(valores[3]);

console.log(valores.length);//retorna número de elementos do array

valores.push({id: 3}, false, null, 'teste');//add elementos no array
console.log(valores);

console.log(valores.pop());//retira último elemento do array
console.log(valores);

delete valores[0];
console.log(valores);

console.log(typeof valores);//tipo object