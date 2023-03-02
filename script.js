let modalContainer = document.getElementsByClassName('modal-container')
let modal = document.getElementsByClassName('modal')
let modalTitle = document.getElementsByClassName('modal-title')
let modalHead = document.getElementsByClassName('modal-head')
let modalBody = document.getElementsByClassName('modal-body')
let closeModal = document.getElementsByClassName('close-modal')

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
        closeModal[id].style.width = '40px'
        closeModal[id].style.opacity = '1'
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
        closeModal[id].style.width = '0'
        closeModal[id].style.opacity = '0'
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
        <div class="modal-text">
            <p>Existe apenas uma diferença comparado as regras do Triângulo de Sierpinkski. Se você não leu ainda, no menu de formas, selecione a opção "Triangulo de Sierpinski" para ver as regras.</p>

            <p>Na regra nº 3 para formar o fractal triangular, devemos apenas escolher um dos três pontos originais, mas se aplicarmos essa mesma lógica para as demais formas, os pontos formarão um caos ao invés de um fractal.</p>
            <p>Para resolver esse problema, devemos colocar uma condição para a escolha desse ponto.</p>
            <p>Tal condição é:</p>
            <p>Escolher um dos pontos originais desde que não seja o mesmo selecionado no cálculo anterior.</p>
        </div>
        `
    } else {
        modalRules.innerHTML = `
        <hr>
        <div class="modal-text">
            <p>Existem 4 regras simples para formar o Triângulo de Sierpinski.</p>

            <p>Regra nº 1: Defina três pontos de forma que eles formem um triângulo. Chamaremos eles de "pontos originais" apenas para futuras referências.</p>
            <p>Regra nº 2: Coloque um ponto aleatório em qualquer lugar da tela.</p>
            <p>Regra nº 3: A partir do ponto que você acabou de criar, selecione um dos pontos originais e crie um novo ponto na metade da distância entre eles.</p>
            <p>Regra nº 4: Repita a Regra nº 3 a partir do último ponto criado.</p>
        </div>
        `
    }
}

function reset() {
    location.reload()
}