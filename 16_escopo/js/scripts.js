var nome = 'josué';    //escopo *GLOBAL* 

var idade = 18;   //escopo *GLOBAL*

console.log(nome + ' ' + idade)



function teste() {

    var x = 20;   //escopo *LOCAL*

    console.log(x)

}

teste();