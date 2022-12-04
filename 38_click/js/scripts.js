var btn = document.querySelector('#bnt');

console.log(btn);

btn.addEventListener('click', function() {

    console.log('clicou');

    console.log(this);

    this.style.color = 'red';

});


// click afetando outro evento
var titulo = document.querySelector('#titulo');

titulo.addEventListener('click', function(){
    var subtitulo = document.querySelector('.subtitulo');
    subtitulo.style.color = 'red';
});


// duplo click 

var subtitulo = document.querySelector('.subtitulo');

subtitulo.addEventListener('dblclick', function() {
    lista.style.display = 'none';
    lista2.style.backgroundColor = 'blue';
    console.log('duplo click!!')
});