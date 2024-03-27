let listaAmigos = [];

function adicionar(){
    //Função que irá adicionar um nome na lista de amigos
    let novoAmigo = document.getElementById('nome-amigo').value;
    if (listaAmigos.includes(` ${novoAmigo}`)){
        alert('Amigo já Adicionado!');
        return;
    }
    if(document.getElementById('nome-amigo').value == ''){
        alert('Digite um nome de amigo');
        return;
    }
    listaAmigos.push(` ${novoAmigo}`);
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = listaAmigos;
}

function sortear(){
    // Função que embaralha os nomes dentro da Lista

    if(listaAmigos.length == 1){
        alert('Apenas um nome inserido, adicione mais nomes');
        return;
    }
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = listaAmigos.length; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        [listaAmigos[i-1], listaAmigos[j]] = [listaAmigos[j],listaAmigos[i-1]];
    }
    
    for(i=0; i < listaAmigos.length;i++){
        if(i < listaAmigos.length-1){
            sorteio.innerHTML = `${sorteio.innerHTML + listaAmigos[i]} --> ${listaAmigos[i + 1]}<br>`;
        }
        else{
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[listaAmigos.length-1] + ' --> ' + listaAmigos[0];
        }
    }
}

function reiniciar(){
    listaAmigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}
