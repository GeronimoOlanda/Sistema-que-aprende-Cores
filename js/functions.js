var engine = {
    "cores":['green', 'purple','pink','red','yellow','black','orange','gray'],
    "hexadecimais":{
        'green':'#02EF00',
        'purple':'#790093',
        'pink':'F02A7E',
        'red':'#90808',
        'yellow':'#E7D703',
        'black':'#141414',
        'orange':'#F16529',
        'gray':'#EBEBEB',
        },
        "moedas":0
}

const Audiomoeda = new Audio('../audio/moeda.mp3');
const audioErrou = new Audio('../audio/errou.mp3');

function sortearCor(){
    var IndexcorSorteada = Math.floor(Math.random()*engine.cores.length);
    var legendaCorDaCaixa = document.getElementById('cor-na-caixa');
    var nomeCorSorteada = engine.cores[IndexcorSorteada];
    
    legendaCorDaCaixa.innerText = engine.cores[IndexcorSorteada].toUpperCase()    
    
    return engine.hexadecimais[nomeCorSorteada]
}

function aplicaCorNaCaixa(nomeDaCor){
    var caixaDasCores = document.getElementById('cor-atual');
    caixaDasCores.style.backgroundColor = nomeDaCor;
    caixaDasCores.style.backgroundImage = "url('../img/caixa-fechada.png')";
    caixaDasCores.style.backgroundSize="100%";
}

function atualizarPontuacao(valor){
    var pontuacao = document.getElementById('pontuacao-atual')

    engine.moedas += valor;
    if(valor < 0){
       
    audioErrou.play();
    }else{
    Audiomoeda.play();
    }
    pontuacao.innerText = engine.moedas;
}

aplicaCorNaCaixa(sortearCor());

//speechRecognition
var btnGravador = document.getElementById('btn-responder');
var transcricaoAudio = "";
var respostaCorreta = ""; 

if(window.SpeechRecognition || window.webkitSpeechRecognition){
    var speechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    var gravador = new speechAPI();
    gravador.continuous = false;
    gravador.lang ="en-US";
    gravador.onstart = function(){
        btnGravador.innerText = "Estou Ouvindo";
        btnGravador.style.backgroundColor = "white";
        btnGravador.style.color = "black";
    }
    gravador.onend = function(){
        btnGravador.innerText = "Responder";
        btnGravador.style.backgroundColor = "transparent";
        btnGravador.style.color = "white";
    }
    gravador.onresult = function(event){
        transcricaoAudio = event.results[0][0].transcript.toUpperCase();
        respostaCorreta = document.getElementById('cor-na-caixa').innerText.toUpperCase();
        if(transcricaoAudio === respostaCorreta){
            atualizarPontuacao(1)
        }else{
            atualizarPontuacao(-1);
        }
        aplicaCorNaCaixa(sortearCor());
        console.log(transcricaoAudio)
    }

}else{
    alert('Navegador não tem suporte')
}

btnGravador.addEventListener('click',function(){
    gravador.start();
})