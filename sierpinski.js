//Generate canvas

let c_height = document.getElementById('canvas-container').clientHeight - 30 
let c_width = document.getElementById('canvas-container').clientWidth - 100

document.getElementById('canvas-container').innerHTML = `
    <canvas id="canvas" height="${c_height}" width="${c_width}"></canvas>   
`

//Attributes and settings
const canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
ctx.fillStyle = "#FFFFFF"

let display = document.getElementById("display-1")
let display2 = document.getElementById("display-2")
display.innerHTML = 'Olá! Este console te dará todas as instruções necessárias para executar o programa.<br>Defina o primeiro ponto...'
display2.innerHTML = 'Este console te dará o feedback relacionado à execução do programa.<br>Aguardando pelas instruções do usuário...'

let originalDots = []
let dots = []
let maxDots
let dotSize
let execution

function getAttributes() {
    maxDots = document.getElementById('max-dots').value
    dotSize = document.getElementById('size').value
    execution = document.getElementById('execution').value
}

//Functions
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    getAttributes()
    
    if(originalDots.length < 3) {
        ctx.fillRect(x, y, dotSize, dotSize)
        originalDots[originalDots.length] = [x, y]

        switch(originalDots.length){
            case 1:
                display.innerHTML = 'Segundo...'
                break;
            case 2:
                display.innerHTML = 'Agora o terceiro...'
                break;
            case 3:
                display.innerHTML = 'Temos os três pontos originais que formarão o triângulo!<br>Por fim defina o ponto inicial para começarmos os cálculos...'
                break;
        }        
    } else {
        ctx.fillRect(x, y, dotSize, dotSize)
        dots[0] = [x, y]
        sierpinkski()
    }
}

canvas.addEventListener("mousedown", function(e)
{
    getMousePosition(canvas, e);
});

function sierpinkski() {
    display.innerHTML = "Acompanhe a execução ao lado! :)"
    for(let i = 0; i < maxDots; i++){
        let random = Math.floor(Math.random() * originalDots.length)
        let calcX = (originalDots[random][0] + dots[i][0]) / 2
        let calcY = (originalDots[random][1] + dots[i][1]) / 2
        dots[i+1] = [calcX, calcY]    
        
        if(execution == 'i') {
            ctx.fillRect(dots[i+1][0], dots[i+1][1], dotSize, dotSize)
            display2.innerHTML = 'Concluído!'
        }
    }

    if(execution == 'p'){
        let j = 0
        let interval = setInterval(function() {
            ctx.fillRect(dots[j+1][0], dots[j+1][1], dotSize, dotSize)
            j++
            display2.innerHTML = `
                Em execução...<br>
                Pontos criados: ${j} / ${maxDots} <br>
                X: ${dots[j][0]}<br>
                Y: ${dots[j][1]}<br>
                Tempo estimado: xhxxm
            `
            if(j == maxDots){
                // display.innerHTML = "Não importa a posição dos pontos originais nem do ponto inicial, seguindo as duas últimas regras recursivamente, sempre resultará na formação desse fractal!<br><br> Não conhece as regras? Clique no livro na barra de navegação<br><br> Quer recomeçar? Clique no botão destacado!"
                display.innerHTML = "Não importa a posição dos pontos originais nem do ponto inicial, seguindo as duas últimas regras recursivamente, sempre resultará na formação desse fractal!"
                display2.innerHTML = "Concluído!"
                clearInterval(interval)
            }
        }, 1)
    }
}