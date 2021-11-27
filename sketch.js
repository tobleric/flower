class Lissajous {
    constructor(x, y) {
        this.pointPos = []
        this.radius = 150
        this.factor = round(random(1,2))
        this.pos = {x: x, y: y}
        /*lissajous PunktPositionen wird mit loop generiert und in this.pos array gepusht*/
        for (let b = 0; b < TAU; b = b + TWO_PI/250) {
            let posX = cos(b + this.factor) * this.radius
            let posY = sin(b * this.factor) * this.radius
            this.pointPos.push({x: posX, y: posY})
        }
    }

    show() {
        this.t = frameCount/1000;
        push()
        translate(this.pos.x, this.pos.y)
        //Lissaujous Punkte werden auf Canvas gezeichnet
        for (let p of this.pointPos) {
            // point(p.x  * cos(this.t), p.y)
            line(p.x * cos(this.t), p.y * sin(this.t), 400, 400)
        }
        document.getElementById("frames").innerHTML = this.t;
        pop()
    }

}

let lissajous = []

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('canvas-flower')
    for (i = 0; i < 3; i += 1) {
        lissajous.push(new Lissajous((i + 1) * 150, (i + 1) * 150))
    }
}


function draw() {
    background(200);
    for (i = 0; i < lissajous.length; i += 1) {
        lissajous[i].show()
    }
}