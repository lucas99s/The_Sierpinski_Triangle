let modalContainer = document.getElementsByClassName('modal-container')
let modal = document.getElementsByClassName('modal')
let modalTitle = document.getElementsByClassName('modal-title')
let modalBody = document.getElementsByClassName('modal-body')

let speedInput = document.getElementById('speed')
let speedLabel = document.getElementById('speedL')
let modalRules = document.getElementById('rules')
let shape = document.getElementById('shape')

let active = []

for(let i = 0; i < modal.length; i++) {
    active[i] = false
}

function showModal(id) {
    if(active[id] == false) {
        active[id] = true
        modal[id].style.top = '150px'
        modal[id].style.padding = '25px 50px'
        modal[id].style.width = '500px'
        modal[id].style.height = '360px'
        modalBody[id].style.opacity = '1'
        modalBody[id].style.height = '260px'
        modalTitle[id].style.width = '100%'
        modalTitle[id].style.opacity = '1'
    } else {
        active[id] = false
        modal[id].style.top = '-15px'
        modal[id].style.padding = '15px 0px 5px 14px'
        modal[id].style.width = '60px'
        modal[id].style.height = '50px'
        modalBody[id].style.opacity = '0'
        modalBody[id].style.height = '0'
        modalTitle[id].style.width = '0'
        modalTitle[id].style.opacity = '0'
    }
}

function selectVerify() {
    if(document.getElementById('execution').value == 'i') {
        speedInput.style.opacity = 0
        speedInput.style.height = 0
        speedLabel.style.opacity = 0
        speedLabel.style.height = 0
        speedLabel.style.margin = 0
    } else {
        speedInput.style.opacity = 1
        speedInput.style.height = "25px"
        speedLabel.style.opacity = 1
        speedLabel.style.height = "16px"
        speedLabel.style.margin = "10px 0 5px"
    }
}

function shapeSelect() {
    if(shape.value == 'q' || shape.value == 'p' || shape.value == 'h') {
        modalRules.innerHTML = `
        <hr>
        <p>Para todas as demais formas, existe apenas uma diferença comparado as regras do Triângulo de Sierpinkski.</p>

        <p>Na regra N°3 para formar o fractal triangular, devemos apenas escolher um dos três pontos originais, mas se aplicarmos essa mesma regra para as demais formas, os pontos formarão um caos ao invés de um fractal.</p>
        <p>Para resolver esse problema, devemos colocar uma condição para a escolha desse ponto, sendo possível a formação do fractal. Essa condição é: </p>
        <p>Escolher um dos pontos originais desde que não seja o mesmo selecionado no cálculo anterior.</p>
        `
    } else {
        modalRules.innerHTML = `
        <hr>
        <p>Existem 4 regras simples para formar o Triângulo de Sierpinski.</p>

        <p>Regra #1: Defina três pontos de forma que eles formem um triângulo. Chamaremos eles de "pontos originais" apenas para futuras referências.</p>
        <p>Regra nº 2: Coloque um ponto aleatório em qualquer lugar da tela.</p>
        <p>Regra nº 3: A partir do ponto que você acabou de criar, selecione um dos pontos originais e crie um novo ponto na metade da distância entre eles.</p>
        <p>Regra nº 4: Repita a Regra nº 3 a partir do último ponto criado.</p>
        `
    }
}

function reset() {
    location.reload()
}