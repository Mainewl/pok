var select = document.querySelector('select')
var para = document.querySelector('p')

select.addEventListener('change', setWeather);

function setWeather(){
    var choice = select.value;

    if(choice === "Fire"){
        para.textContent = 'PARABENS VOCE ACHOU UM CHARIZARD';
    }
    else if(choice === "Water"){
        para.textContent = 'PARABENS VOCE ACHOU UM BLASTOISE';
    }
    else if(choice === "Leaf"){
        para.textContent = 'PARABENS VOCE ACHOU UM VENOSSAUR';
    }
    else if(choice === "Psychi"){
        para.textContent = 'PARABENS VOCE ACHOU UM GARDEVOIR';
    }
    else if(choice === "Ghost"){
        para.textContent = 'PARABENS VOCE ACHOU UM GENGAR';
    }
    else{
        para.textContent = '';
    }
}