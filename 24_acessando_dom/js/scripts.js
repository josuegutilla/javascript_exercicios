// TAG: document.getElementByTagName: 

var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis);   //se quiser ver um elemento especifico: [3] dentro dos ();


// ID: document.getElementById
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);


// class
var itensDALista = document.getElementsByClassName('item');
console.log(itensDALista[2]);   //se quiser ver um elemento especifico: [3] dentro dos ();
