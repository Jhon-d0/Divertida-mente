//dom

const btraiva = document.querySelector("#btraiva")
const btalegria = document.querySelector("#btalegria")
const btnojinho = document.querySelector("#btnojinho")
const btTristeza = document.querySelector("#btTristeza")
const imagemdocentro = document.querySelector("#alvo")
const cordefundo=document.body.style.background


//evento

btraiva.addEventListener("click", raiva)
btalegria.addEventListener("click", alegria)
btnojinho.addEventListener("click",nojinho)
btTristeza.addEventListener("click", Tristeza)
imagemdocentro.addEventListener("click", voltar)


//funções

function raiva(){
    red="#FF6347"
    document.body.style.background=red
    alvo.src="imagens/01 (1).png"

}
function alegria(){
    yellow="#FFD700"
    document.body.style.background=yellow
    alvo.src="imagens/02 (1).png"
}
function nojinho(){
    green="#00FF00"
    document.body.style.background=green
    alvo.src="imagens/03 (1).png"
}
function Tristeza(){
    blue="#4169E1"
    document.body.style.background=blue
    alvo.src="imagens/04 (1).png"
}
function voltar(){
    document.body.style.background=cordefundo
    alvo.src="imagens/silhueta.png"
}