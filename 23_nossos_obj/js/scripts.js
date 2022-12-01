let pessoa = {
    nome: 'Josué',
    idade: 18,
    falar: function() {
        console.log('Olá, como vai sua mãe?');
    }, 
    soma: function(a, b, c) {
        return a * b - c;
    }
}

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.falar();

var soma = pessoa.soma(10, 5, 9);
console.log(soma);