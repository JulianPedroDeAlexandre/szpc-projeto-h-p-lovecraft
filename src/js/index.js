
//Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel= document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Passo 2 - dar um jeito de identificar o clique do usua´rio no botão

botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', ()=>{
        //Passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //Passo 4 - marcar o botão clicado coo se estivesse selecionado
        botao.classList.add('selecionado');

        //Passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })

})