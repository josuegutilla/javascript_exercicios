//toLowerCase: todasa letras minúsculas;

//toUpperCase: todas letrs MAIÚSCULAS;

var frase = 'Está frase que vamos Modificar '

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());


// trim: tira o espaço do começo da frase

var nome = '      Josué   '
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);


//split: transformar em um array ou mandar como array;

console.log(frase.split(' '));


var tags = 'PHP, JavaScript, HTML, CSS, Node.Js' 

console.log(tags.split(','));

