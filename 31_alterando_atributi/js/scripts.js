// adicionando atributo:

var titulo = document.querySelector('#titulo ');

titulo.setAttribute('class', 'testando-atributo');

console.log(titulo);

var botao = document.querySelector('#btn');

bnt.setAttribute('disabled', 'disabled');

console.log(bnt);

var subtitulo = document.querySelector('.subtitulo');

subtitulo.setAttribute('id', 'titulo-2');

console.log(subtitulo);


// remover atributo: 

var lista = document.querySelector('#lista')

lista.removeAttribute('id');