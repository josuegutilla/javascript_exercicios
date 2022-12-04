// criar elemento

var el = document.createElement('h3');

el.classList = 'test-classe';

var texto = document.createTextNode('Trocando de texto'); 

el.appendChild(texto);


//selecionar o elemento que quero trocar

var titulo = document.querySelector('#paragrafo');


// selecionando o pai do elemento
var pai = titulo.parentElement;

// trocando os elementos => replaceChild
pai.replaceChild(el, titulo);