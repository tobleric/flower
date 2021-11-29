let score = 0;
let xPosCan = 0;
let xSpeedCan = 3;
let ySpeedBall = -5;
let xPosBall;
let yPosBall;
let ballShot = false;
let xPosTar = Math.floor(Math.random() * window.innerWidth - 20);
let yPosTar = Math.floor(Math.random() * window.innerHeight/2);
let tarSin = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
}

//function mit MouseClick wird geschossen
function mouseClicked() {
    ballShot = true
}

function draw() {
    //Canvas Hintergrund
    background(0);
    
    //Spielelemente Hintergrund
    fill(255);

    //Element Modis in Radius
    rectMode(RADIUS);
    ellipseMode(RADIUS);

    //Scoreboard erstellen
    textSize(24);
    text("Score: " + score, 10, 25);

    //Kanone bewegt sich frei
    xPosCan += xSpeedCan;

    //Kanone geht rechts/links
    if ((xPosCan >= windowWidth - 20) || (xPosCan <= 0)) {
        xSpeedCan *= -1
    }

    if( !xPosBall ) {
        //Ball wird in Kanone gesetzt 
        yPosBall = windowHeight - 40;
    }

    //Wenn Schuss abgefeuert, dann wird geht Ball nach oben
    if (ballShot) {
        yPosBall += ySpeedBall;
    }

    //Schuss folgt Kanone, wenn Abschuss noch nicht erfolgt
    if (!ballShot) {
        xPosBall = xPosCan;
    }

    //Kanone zeichnen
    rect(xPosCan, windowHeight - 50, 20, 50);

    // Schuss zeichnen
    ellipse(xPosBall, yPosBall, 20);

    //Wenn Ball über oberen Rand geht, dann wird Ball Position wieder in Kanone gesetzt
    if (yPosBall <= 5) {
        xPosBall = xPosCan + 10;
        yPosBall = windowHeight - 40;
        ballShot = false
    }

    //Erstelle Ziel, dass mit Sinus wächst und schrumpft
    let tarSizeFact = sin(tarSin);

    tarSizeFact = (tarSizeFact + 1) / 2;

    let tarMinSize = 5;
    let tarSize = tarMinSize + 15 * tarSizeFact;

    //Erstelle Ziel
    rect(xPosTar, yPosTar, tarSize);

    tarSin += 0.1


    //Wenn Ball Ziel trifft wird Score +1
    if ((xPosTar - 20 <= xPosBall - 5 && xPosTar + 20 >= xPosBall - 5) && (yPosTar + 20 >= yPosBall -5)) {
        score += 1;
        xPosTar = Math.floor(Math.random() * window.innerWidth);
        yPosTar = Math.floor(Math.random() * window.innerHeight/2);
        xSpeedCan *= 2;
    }

}