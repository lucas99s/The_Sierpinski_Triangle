let modalContainer = document.getElementsByClassName('modal-container')
let modal = document.getElementsByClassName('modal')
let modalTitle = document.getElementsByClassName('modal-title')
let modalBody = document.getElementsByClassName('modal-body')

let speedInput = document.getElementById('speed')
let speedLabel = document.getElementById('speedL')

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

function reset() {
    console.log('teste')
    location.reload()
}