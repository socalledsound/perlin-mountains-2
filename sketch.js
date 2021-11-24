const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const scale = 0.1
const res = 3
const colors = [
    '#FFF8DC',
    '#FFEBCD',
    '#FFE4C4',
    '#FFDEAD',
    '#F5DEB3',
    '#DEB887',
    '#D2B48C',
    '#BC8F8F',
    '#F4A460',
    '#DAA520',
    '#CD853F',
    '#D2691E',
    '#8B4513',
    '#A0522D',
    '#A52A2A',
    '#800000',

]
const reversedColors = colors.reverse()

let mountainRange
let counter = 0



const inc = 0.01
function setup(){
    createCanvas(canvasWidth, canvasHeight, WEBGL)



}

function draw(){
    background(30)
    fill(200,20,200)
    box(10)
    // makeMountainPoints()
    // drawMountainPoints2()
    makeMountainRange(counter)
    drawMountainRange()
    counter+= inc
}


const drawMountainRange = () => {
    mountainRange.forEach((mountainPoints, r) => {
        mountainPoints.forEach(point => {
            // console.log(point) 
            
            push()
                translate(point.x, point.y, r * -10)
                fill(reversedColors[r])
                box(20 + point.scaler, 50 + point.scaler * 4,10)
            pop()
        })
    })
}

const drawMountainPoints2 = () => {
    
    mountainPoints.forEach(point => {
        // console.log(point) 
        push()
            translate(point.x, point.y, 0)
            fill(point.col)
            box(15, 10 ,10)
        pop()
    })

}


// const drawMountainPoints = () => {
//     stroke(200, 20, 200)
//     strokeWeight(10)
//     noFill()
//     beginShape()
//     mountainPoints.forEach(point => {
//         console.log(point.x, point.y)
//         vertex(point.x, point.y)
//     })
//     endShape()
// }

const makeMountainRange = () => {
    mountainRange = Array.from({length: colors.length}, (el, i) =>{
        
        const oneMountain = makeMountainPoints(i)
        return oneMountain
    })
}

const makeMountainPoints = (j) => {
    mountainPoints = Array.from({length: 500}, (el, i) => {
        //const noiseVal = map(noise())
        const yCenter = canvasHeight/4
        noiseSeed(j)
        const n = map(noise(i * scale * counter, j * scale  + counter, i * scale + counter), 0, 1, 0, 100)
        //const n = random(0,1)
        // fill(n * 255) 
        // rect(i, yCenter + (n * 500), res, res )
        const x = (i - canvasWidth/4) * 10 + n
        const y = yCenter + (n * 2) - j * 20
        const scaler = n/10
        return {
            x, y, scaler
        }
    })
    return mountainPoints
}