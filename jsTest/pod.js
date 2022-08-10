var select = document.querySelector('select')
var para = document.querySelector('p')

select.addEventListener('change', type);

function type(){

    var choice = select.value;

    if(choice === "Route1"){
        para.textContent = (Math.floor(Math.random() *(9 - 1 + 1)))+1;
    }
    else if(choice === "Route2"){
        para.textContent = (Math.floor(Math.random() *(15 - 10 + 1)))+10;
    }
    else if(choice === "Route3"){
        para.textContent = (Math.floor(Math.random() *(25 - 16 + 1)))+16;
    }
    else if(choice === "Route4"){
        para.textContent = (Math.floor(Math.random() *(36 - 27 + 1)))+27;
    }
    else if(choice === "Route5"){
        para.textContent = '';
    }
    else{
        para.textContent = '';
    }
}

var somethingbutton = document.querySelector('botaodealgo')

function activechoice(){
    var act1 = document.getElementById(para)
    act1.firstChild.nodeValue = (Math.floor(Math.random() *(9 - 1 + 1)))+1;
}

function typeactive(){
    if ("Route1"){
        activechoice.onclick;{
            somethingbutton
        }
    }
    else if("Route2"){
        para.textContent = (Math.floor(Math.random() *(15 - 10 + 1)))+10;
    }
    else if("Route3"){
        para.textContent = (Math.floor(Math.random() *(25 - 16 + 1)))+16;
    }
    else if("Route4"){
        para.textContent = (Math.floor(Math.random() *(36 - 27 + 1)))+27;
    }
    else if("Route5"){
        para.textContent = (Math.floor(Math.random() *(49 - 38 + 1)))+38;
    }
    else{
        para.textContent = ''
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
                clickadaResposta.textContent = (Math.floor(Math.random() *(50 - 20 + 1))) + 20
            }
            else{
                clickadaResposta.textContent = ''
            }
}