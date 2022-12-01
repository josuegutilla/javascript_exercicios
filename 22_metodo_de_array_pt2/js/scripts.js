// splice: addd elemento no meio de uma array ou remover;

var arr = [1,2,3,4,5];

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1);   //remover um elemento do meio de uma array;

console.log(arr);


//indexOf: achar o indice o elemento; 

console.log(arr.indexOf(5));


//join: tranforma array em strings 

var arr2 = ['o', 'rato', 'roeu', 'a', 'roupa'];
console.log(arr2.join(','));


//reverse: invete a ordem do array;

console.log(arr2.reverse());