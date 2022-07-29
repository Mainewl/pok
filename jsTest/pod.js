var select = document.querySelector('select')
var para = document.querySelector('p')

select.addEventListener('change', type);

function type(){

    var choice = select.value;

    if(choice === "Fire"){
        para.textContent = 'PARABENS VOCE ACHOU UM SAPATO';
    }
    else if(choice === "Water"){
        para.textContent = 'PARABENS VOCE ACHOU UM TERNO';
    }
    else if(choice === "Leaf"){
        para.textContent = 'PARABENS VOCE ACHOU UMA GRAVATA';
    }
    else if(choice === "Psychi"){
        para.textContent = 'PARABENS VOCE ACHOU UMA CALÇA';
    }
    else if(choice === "Ghost"){
        para.textContent = 'PARABENS VOCE ACHOU UMA CAMISA SOCIAL';
    }
    else{
        para.textContent = '';
    }
}


var click = document.getElementById('mato');
var clickResposta = document.getElementById('encontrado')
var seleto = document.querySelector('select')


    click.onclick = function (test) {
        var clickEfecto = seleto.value;
            if (clickEfecto = 'mato') {
                clickResposta.textContent = 'Você encontrou:';
            }
            else{
                clickResposta.textContent = ''
            }
    }

var clickada = document.getElementById('numeros');
var clickadaResposta = document.getElementById('resultado')
var seletor = document.querySelector('select')
// var achado = [('Voce encontrou'(Math.random()))];
// var numeros = document.getElementById('listaPokemon')

    clickada.onclick = function(numerologia) {
        var clickadaEfecto = seletor.value;
            if(clickadaEfecto = 'numeros'){
                clickadaResposta.textContent = (Math.floor(Math.random() *(100 - 0 + 1)))
            }
            else{
                clickadaResposta.textContent = ''
            }
    }
