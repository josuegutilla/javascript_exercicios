var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);


// querySelectorAll: para add mais de um elemento;
var itensQuery = document.querySelectorAll('#lista2 li');  // # = id   e   . = class; 
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);


// querySelector: para add apenas um elemento; 
var lista = document.querySelector('#lista');
console.log(lista);

var span = document.querySelector('#paragrafo span');
console.log(span);

var span2 = document.querySelector('.span1');   // . (ponto) = class / # = id
console.log(span2);

