function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, rejetc) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Queime, ')
    .then(frase => frase.concat('Cosmo!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))