// evento de mouseover
var titulo = document.querySelector('#titulo');

titulo.addEventListener('mouseover', function() {

    this.style.backgroundColor = 'yellow';
    this.style.color = 'blue';

});


// evento de mouseout
var titulo = document.querySelector('#titulo');

titulo.addEventListener('mouseout', function() {

    this.style.backgroundColor = 'white';
    this.style.color = 'black';

});


// afetar outro elemento com mouseover
var subtitulo = document.querySelector('.subtitulo');

subtitulo.addEventListener('mouseover', function(){

    var legenda = document.querySelector('#legenda');
    legenda.classList.remove('hide');
})
 
subtitulo.addEventListener('mouseout', function(){

    var legenda = document.querySelector('#legenda');
    legenda.classList.add('hide');
})