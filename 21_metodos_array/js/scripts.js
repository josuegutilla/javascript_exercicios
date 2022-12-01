// length: da o numero de propriedades de uma array;

var arr = [1,2,3,4,5,6];

console.log(arr.length);


// push: add elemento no fim do array;

arr.push(7, 8, 9);
arr.push('josué gatão');
console.log(arr);

// pop: remove um elemento do fim do array; 

arr.pop();
console.log(arr);


//unshitf: add elemento no começo do array;

arr.unshift(0);
arr.unshift('teste');
console.log(arr);

//shitf: remove elemento no começo do array;
arr.shift();
console.log(arr);


//acessar o último elemento de uma array/
console.log(arr[arr.length - 1]);


//isArray: se é ou não um array;

console.log(Array.isArray(6));
console.log(Array.isArray(arr));





