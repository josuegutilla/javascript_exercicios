// keydown:
document.addEventListener('keydown', function(e){

    if(event.key === 'Enter') {
      console.log('Apertou a tecla enter');
    }
});

// keyup:
document.addEventListener('keyup', function(e){

    if(event.key === 'Enter') {
      console.log('Soltou a tecla enter');
    }
});



// keydown 
document.addEventListener('keydown', function(e){
    if(event.key === 'j') {
        console.log('Josué lindão apertou a primeira letra do seu nome')
    }
});


//keyup 
document.addEventListener('keyup', function(e){
    if(event.key === 'j'){
        console.log('Josué soltou a primeira letra do seu nome');
    }
});