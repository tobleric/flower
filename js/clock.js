function setup() {
    angleMode(DEGREES)
    createCanvas(400, 400);
    noStroke();
    frameRate(20)

  }

  /*Startwinkel für Sekundenkreis*/
  let a = 0;

   /*Startwinkel für StundenkreisA/B*/
  let b = 0;
  let blue = 255;
  
  function draw() {
    background(250);
    translate(0, height/2);

    /*Erstelle Radius für Stundekreis */
    let diameter = width;
    let radius = diameter/2;

    //Erstelle Werte und Form Stundenkreis A
    let hourFact = cos(b)
    let hourAPosX = map(hourFact, 1, -1, width/4, width/2)
    fill(0)
    ellipse(hourAPosX, 0, radius);

    //Erstelle Werte und Form Stundenkreis B
    push()
    let hourBPosX = map(hourFact, -1, 1, width/2, width-100)
    blendMode(DIFFERENCE);
    fill(255)
    ellipse(hourBPosX, 0, radius);
    pop()

    //Erstelle Werte und Form Sekundenkreis
    push()
    fill(0, 0, blue)
    translate(hourAPosX, 0)
    let sekPosY = sin(a) * radius / 2
    let sekPosX = cos(a) * radius / 2
    ellipse(sekPosX, sekPosY, 20)
    pop()

    /*Speed von Sekundenkreis wird erstellt*/
    a += 360/1200

    /*Speed von Stundenkreis wird erstellt*/
    b += 360/2400

    //console.log(hourFact)
  }