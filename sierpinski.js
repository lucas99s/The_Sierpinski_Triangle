//Generate canvas

let c_height = document.getElementById('canvas-container').clientHeight - 30 
let c_width = document.getElementById('canvas-container').clientWidth - 50

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
let speed
let shapeType

//Functions
function getAttributes() {
    maxDots = document.getElementById('max-dots').value
    dotSize = document.getElementById('size').value
    execution = document.getElementById('execution').value
    speed = document.getElementById('speed').value
    shapeType = document.getElementById('shape').value
}

let squareArr = [[c_height/100*10, c_height/100*10], [c_height/100*90, c_height/100*10], [c_height/100*90, c_height/100*90],[c_height/100*10, c_height/100*90]]
let pentagonArr = [[c_height/100*50, c_height/100*10], [c_height/100*90, c_height/100*38], [c_height/100*75, c_height/100*85],[c_height/100*25, c_height/100*85], [c_height/100*10, c_height/100*38]]
let hexagonArr = [[c_height/100*50, c_height/100*10], [c_height/100*90, c_height/100*30],[c_height/100*90, c_height/100*70],[c_height/100*50, c_height/100*85],[c_height/100*10, c_height/100*70],[c_height/100*10, c_height/100*30]]
shapeRender()
function shapeRender() {
    let type = document.getElementById('shape').value
    if(type == 'q'){
        originalDots = squareArr
    } else if (type == 'p') {
        originalDots = pentagonArr
    } else if (type == 'h') {
        originalDots = hexagonArr
    }
    
    for(let i = 0; i < originalDots.length; i++) {
        ctx.fillRect(originalDots[i][0], originalDots[i][1], 2, 2)
        sierpinkski()
    }
}

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

canvas.addEventListener("mousedown", function(e){
    getMousePosition(canvas, e);
});

function sierpinkski() {
    let lastPoint
    display.innerHTML = "Acompanhe a execução ao lado! :)"
    for(let i = 0; i < maxDots; i++){
        let random = Math.floor(Math.random() * originalDots.length)
        if(shapeType != 't') {
            while(random == lastPoint){
                random = Math.floor(Math.random() * originalDots.length)
            }
            lastPoint = random
        }
        let calcX = (originalDots[random][0] + dots[i][0]) / 2
        let calcY = (originalDots[random][1] + dots[i][1]) / 2
        dots[i+1] = [calcX, calcY]    
        
        if(execution == 'i') {
            ctx.fillRect(dots[i+1][0], dots[i+1][1], dotSize, dotSize)
            display2.innerHTML = 'Concluído!'
        }
    }

    if(execution == 'p'){
        let rep = 0
        let second = 0
        let estimatedTime = 'Calculando...'
        let avarage = 'Calculando...'

        let estimate = setInterval(function() {
            avarage = Math.floor(rep / second)
            estimatedTime = Math.floor((maxDots - rep) / avarage)
            second++
        }, 1000)

        let interval = setInterval(function() {
            if(second >= 1){
                ctx.fillRect(dots[rep+1][0], dots[rep+1][1], dotSize, dotSize)
                rep++
                display2.innerHTML = `
                    Em execução...<br>
                    Pontos criados: ${rep} / ${maxDots} <br>
                    Tempo estimado: ${estimatedTime} segundos<br> 
                    Pontos por segundo(*): ${avarage}
                    <br><br>
                    (*)Afeta o tempo estimado, ou seja, se o valor oscilar, o tempo estimado mudará.
                `
            }
            if(rep == maxDots){
                // display.innerHTML = "Não importa a posição dos pontos originais nem do ponto inicial, seguindo as duas últimas regras recursivamente, sempre resultará na formação desse fractal!<br><br> Não conhece as regras? Clique no livro na barra de navegação<br><br> Quer recomeçar? Clique no botão destacado!"
                display.innerHTML = "Não importa a posição dos pontos originais nem do ponto inicial, seguindo as duas últimas regras recursivamente, sempre resultará na formação desse fractal!"
                display2.innerHTML = "Concluído!"
                clearInterval(interval)
                clearInterval(estimate)
            }
        }, 1000 / speed)
    }
}