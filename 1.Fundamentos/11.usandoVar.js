//criando variavel var em escopo que não é function,
// está variável ir para o escopo global
{
    {
        {
            {
                var sera = 'Sera??';
                console.log(sera);
            }
        }
    }
}
console.log(sera);

//criando variavel var em escopo que É function,
// está variável ficará no escopo da function
function teste() {
    var local = 123;
    console.log(local);
}

teste();
console.log(local);