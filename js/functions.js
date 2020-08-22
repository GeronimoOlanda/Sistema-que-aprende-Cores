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
