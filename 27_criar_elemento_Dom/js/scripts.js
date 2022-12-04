// inserir elementpo no body

var novoTexto = document.createElement('h1'); 

var text = document.createTextNode('Este é o novo texto inserido');

novoTexto.appendChild(text);

console.log(novoTexto);

var body = document.querySelector('body');

body.appendChild(novoTexto);


// inserir em um container

var container = document.getElementById('container');

console.log(container);

var el = document.createElement('span');

el.appendChild(document.createTextNode('Inserindo elemento em um container!'));

container.appendChild(el);





