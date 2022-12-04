// criar elemento

var el = document.createElement('div');   //createElemet => criar algum elemento

el. classList = 'div-criada';  //criar class pelo js

console.log(el);

var container = document.querySelector('#container');   //selecionar elemeto do body

// inserindo elemento filho;
container.appendChild(el);


//inserBefore - insere antes

var el2 = document.createElement('div');   //createElemet => criar algum elemento

el2.classList = 'div-belfore';   //criar class pelo js

var el3 = document.querySelector('#container .div-criada');  //selecionar elemeto do body

console.log(el3);

container.insertBefore(el2, el3);