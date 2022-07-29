var click = document.getElementById('mato');
var clickResposta = document.getElementById('encontrado')
var select = document.querySelector('select')
var random = document.getElementById('listaPokemon')


    click.onclick = function (test) {
        var clickEfecto = select.value;
            if (clickEfecto = 'mato') {
                clickResposta.textContent = 'Você encontrou:';
            }
            else{
                clickResposta.textContent = ''
            }
    }