const canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

let originalDots = [[500, 50], [50, 950], [950, 950]]
let dots = []
let maxDots = 200000

let dotSize = 1

for(i = 0; i < originalDots.length; i++) {
    ctx.fillRect(originalDots[i][0],originalDots[i][1], dotSize, dotSize)
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    ctx.fillRect(x, y, dotSize, dotSize)
    dots[0] = [x, y]

    sierpinkski()
}

canvas.addEventListener("mousedown", function(e)
{
    getMousePosition(canvas, e);
});

function sierpinkski() {
    for(let i = 0; i < maxDots; i++){
        let random = Math.floor(Math.random() * originalDots.length)
        let calcX = (originalDots[random][0] + dots[i][0]) / 2
        let calcY = (originalDots[random][1] + dots[i][1]) / 2
        dots[i+1] = [calcX, calcY]       
        ctx.fillRect(dots[i+1][0], dots[i+1][1], dotSize, dotSize)
    }

    // let j = 0
    // let interval = setInterval(function() {
    //     ctx.fillRect(dots[j+1][0], dots[j+1][1], dotSize, dotSize)
    //     j++
    //     if(j == maxDots){
    //         clearInterval(interval)
    //     }
    // }, 1)
}