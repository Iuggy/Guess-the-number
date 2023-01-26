let numeroAL = Math.floor(Math.random() * 100) + 1;
console.log(numeroAL);

let palpites = document.getElementById('palpites');
let altoBaixo = document.getElementById('altoBaixo');
let ultimoResultado =document.getElementById('ultimoResultado');
let campoEntrada = document.getElementById('campoEntrada');
let enviaPalpite = document.getElementById('enviaPalpite');

let chances = 1 ;
let botaoReset;

function verificaPalpite(){
    const palpiteUsuario = Number(campoEntrada.value);
  if (chances === 1 ) {
    palpites.textContent = 'Palpites anteriores: ';
  }
  palpites.textContent += palpiteUsuario + ' ';

    if(palpiteUsuario === numeroAL){
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        altoBaixo.textContent = '';
        configFimDeJogo();
    }else if(chances === 10){
        ultimoResultado.textContent = 'Fim de Jogo!!!';
        altoBaixo.textContent = '';
        configFimDeJogo();
    }else{
        ultimoResultado.textContent ='Errado!'
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numeroAL){
            altoBaixo.textContent = 'Seu palpite está muito baixo';

        }else if(palpiteUsuario > numeroAL){
            altoBaixo.textContent = 'Seu palpite está muito Alto'
        }
    }
    chances++;
    campoEntrada.value = '';
    
}

enviaPalpite.addEventListener('click',verificaPalpite);

function  configFimDeJogo() {

    campoEntrada.disabled =true;
    enviaPalpite.disabled = true;
    botaoReset = document.createElement('button');
    botaoReset.textContent = 'Iniciar Novo Jogo';
    document.body.appendChild(botaoReset);
    botaoReset.addEventListener('click', reiniciarJogo);
}


function reiniciarJogo() {
    chances = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
        for (const resetPara of resetParas) {
          resetPara.textContent = '';
        }

        botaoReset.parentNode.removeChild(botaoReset);
        campoEntrada.disabled = false;
        enviaPalpite.disabled = false;
        campoEntrada.value = '';
        campoEntrada.focus();
        ultimoResultado.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
    